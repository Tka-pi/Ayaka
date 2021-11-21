window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);

function add1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=7; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=7; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=7; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=8; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    var newrow  = relic.insertRow(row_num);
    for(var j=0; j<=7; j++){
        var cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}



function del1(){
    var relic = document.getElementById("relic1");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    var relic = document.getElementById("relic2");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    var relic = document.getElementById("relic3");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    var relic = document.getElementById("relic4");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    var relic = document.getElementById("relic5");
    var row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){
let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})


var C1=relic1_matrix.length;
var C2=relic2_matrix.length;
var C3=relic3_matrix.length;
var C4=relic4_matrix.length;
var C5=relic5_matrix.length;
var Cx=C1*C2*C3*C4*C5;


function eval(){
    var totalHP=baseHP*(1+HPrate*0.01+u_HPrate*0.01)+HP;
    var totalATK=baseATK*(1+(ATKrate+u_ATKrate)*0.01)+ATK+totalHP*bangan_rate;
    var total_CRIT=(5+u_CRIT+CRIT)*0.01;
    var total_CRITd=(50+u_CRITd+CRITd)*0.01;
    var total_charge=(u_charge+charge)*0.01;

    if(total_CRIT>=1){
        total_CRIT=1;
    }

    var zetsuen=0.25*(1+total_charge)*zetsuen_flag;
    if(zetsuen>0.75){
        zetsuen=0.75;
    }

    kiri_time=0.8;
    if(time>=10){
        kiri_time=8/time;
    }

    


    var model
    =(normal*(1+simenawa+0.3*possibility_talent+u_normal_and_heavy+kentoushi+kokken)
    +heavy*pattern_heavy*(1+2.98*possibility_heavy+simenawa+0.3*possibility_talent+u_normal_and_heavy+kokken)
    +skill*pattern_skill)*(1+0.01*(cyro+u_cyro+cyro_kiri3*kiri_time))
    +burst*pattern_burst*(1+0.4*possibility_burst+u_burst+kizoku+zetsuen)*(1+0.01*(cyro+u_cyro+cyro_kiri3));

    if(model==0){
        model=1;
    }


    console.log(model);


    if(constraint>100+charge+u_charge){
        return 0;
    }else{
        alert_constraint=1;
        return model*totalATK*(1+total_CRIT*total_CRITd);
    }
    
}



let EV_index=[];
let EV_vector=[];



stella=Number($("#stella").val());
talent1=Number($("#talent1").val());
talent2=Number($("#talent2").val());
talent3=Number($("#talent3").val());
weapon_rank=Number($("#weapon_rank").val());
relic_type=Number($("#relic_type").val());

pattern_normal=Number($("#pattern_normal").val());
pattern_burst=Number($("#pattern_burst").val());
pattern_skill=Number($("#pattern_skill").val());
pattern_heavy=Number($("#pattern_heavy").val());

possibility_talent  =Number($("#possibility_talent").val());
possibility_heavy   =Number($("#possibility_heavy").val());
possibility_burst   =Number($("#possibility_burst").val());

constraint   =Number($("#constraint").val());
freeze=Number($("#freeze").val());


if(stella<=1){
    possibility_burst=0;
}
if(stella<=5){
    possibility_heavy=0;
}

interval=Number($("#interval").val());
time=Number($("#time").val());


u_ATKrate           =Number($("#u_ATKrate").val());
u_CRIT              =Number($("#u_CRIT").val());
u_CRITd             =38.4;
u_cyro              =Number($("#u_cyro").val());
u_normal_and_heavy  =Number($("#u_normal_and_heavy").val())*0.01;
u_burst             =Number($("#u_burst").val())*0.01;


normal1=66.5+6.0457*(talent1-6);
normal2=70.8+6.4229*(talent1-6);
normal3=91+8.2829*(talent1-6);
normal4=98.7+8.9914*(talent1-6);
normal5=113.6+10.349*(talent1-6);
heavy=240.3+21.9*(talent1-6);

skill=335+24.321*(talent2-6);
burst=3219+236.33*(talent3-6);



var normal=0;
if(pattern_normal>=1){
    normal+=normal1;
}
if(pattern_normal>=2){
    normal+=normal2;
}
if(pattern_normal>=3){
    normal+=normal3;
}
if(pattern_normal>=4){
    normal+=normal4;
}
if(pattern_normal>=5){
    normal+=normal5;
}



baseATK=342;
baseHP=12858;
cyro_kiri3=0;
u_HPrate=0;
bangan_rate=0;
u_charge=0;
kokken=0;


if($("#weapon").val()=="kiri"){
    u_CRITd+=44.1;
    baseATK+=674;
    u_cyro+=28+7*(weapon_rank-1);
    cyro_kiri3+=12+3*(weapon_rank-1);
}
if($("#weapon").val()=="bangan"){
    u_CRIT+=44.1;
    baseATK+=542;
    bangan_rate=0.012+0.003*(weapon_rank-1);
    u_HPrate+=20+5*(weapon_rank-1);
}
if($("#weapon").val()=="tenku"){
    baseATK+=608;
    u_charge+=55.1;
    u_CRIT+=4+(weapon_rank-1);
}
if($("#weapon").val()=="kokken"){
    baseATK+=510;
    u_CRIT+=27.6;
    kokken=0.2+0.05*(weapon_rank-1);
}
if($("#weapon").val()=="kageuchi"){
    u_ATKrate+=55.1;
    baseATK+=454;
}
if($("#weapon").val()=="seifu"){
    baseATK+=454;
    u_charge+=61.3;
}
if($("#weapon").val()=="sairei"){
    baseATK+=454;
    u_charge+=61.3;
}









var index=0;

var alert_label=0;
var alert_nan=0;
var alert_minus=0;
var alert_constraint=0;


for (var r1=0 ; r1<C1 ; r1++){
    for (var r2=0 ; r2<C2 ; r2++){
        for (var r3=0 ; r3<C3 ; r3++){
            for (var r4=0 ; r4<C4 ; r4++){
                for (var r5=0 ; r5<C5 ; r5++){

                    var series  =relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                    var HP      =relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                    var HPrate  =relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2];
                    var ATK     =relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                    var ATKrate =relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4];
                    var CRIT    =relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5];
                    var CRITd   =relic1_matrix[r1][6]+relic2_matrix[r2][6]+relic3_matrix[r3][6]+relic4_matrix[r4][6]+relic5_matrix[r5][6];
                    var charge  =relic1_matrix[r1][7]+relic2_matrix[r2][7]+relic3_matrix[r3][7]+relic4_matrix[r4][7]+relic5_matrix[r5][7];
                    var cyro    =relic4_matrix[r4][8];

                    var ev=0;

                    simenawa=0;
                    zetsuen_flag=0;
                    kizoku=0;
                    kentoushi=0;


                    if(relic_type==1){
                        if(series%(11**2)==0){
                            cyro+=15;
                        }if(series%(11**4)==0){
                            CRIT+=20+freeze*20;
                        }if(series%(7**2)==0){
                            ATKrate+=18;
                        }if(series%(5**2)==0){
                            charge+=20;
                        }if(series%(3**2)==0){
                            kizoku=0.2;
                        }if(series%(2**2)==0){
                            ATKrate+=18;
                        }if(series%(2**4)==0){
                            kentoushi=0.35;
                        }
                        ev=eval();
                    }
                    if(relic_type==2&&series%(7**4)==0){
                        ATKrate+=18;
                        simenawa=0.5;
                        ev=eval();
                    }
                    if(relic_type==3&&series%(5**4)==0){
                        charge+=20;
                        zetsuen_flag=1;
                        ev=eval();
                    }
                    EV_index[index] = [r1,r2,r3,r4,r5];
                    EV_vector[index] = ev;
                    if(isNaN(ev)){
                        alert_nan=1;
                        alert_label=1;
                    }
                    if(ev<0){
                        alert_minus=1;
                        alert_label=1;
                    }
                    index++;
                }
            }
        }
    }
}

if(alert_minus==1){
    alert("期待値がマイナスです");
}if(alert_nan==1){
    alert("数値を入力してください");
}if(alert_constraint==0){
    alert("拘束条件を満たす組が存在しません");
}



var max_index=0;
var max=-1;
for(var j=0 ; j<Cx ; j++){
    if(max<EV_vector[j]){
        max=EV_vector[j];
        max_index=j;
    }
}

if(max==0){
    alert_label=1;
    if(relic_type==2){
    alert("しめ縄4セットがありません");
    }
    if(relic_type==3){
    alert("絶縁4セットがありません");
    }
}



var result = document.getElementById('result');



function relic_name(n){
    if(n==11){
        return"氷風";
    }
    if(n==7){
        return "しめ縄";
    }
    if(n==5){
        return "絶縁";
    }
    if(n==3){
        return"旧貴族";
    }
    if(n==2){
        return"剣闘士";
    }
    if(n==1){
        return "その他";
    }
}

var R1=EV_index[max_index][0];
var R2=EV_index[max_index][1];
var R3=EV_index[max_index][2];
var R4=EV_index[max_index][3];
var R5=EV_index[max_index][4];

if(alert_label==0&&alert_constraint==1){
    result.rows[0].cells[1].innerHTML=relic_name(relic1_matrix[R1][0]);
    result.rows[1].cells[1].innerHTML=relic_name(relic2_matrix[R2][0]);
    result.rows[2].cells[1].innerHTML=relic_name(relic3_matrix[R3][0]);
    result.rows[3].cells[1].innerHTML=relic_name(relic4_matrix[R4][0]);
    result.rows[4].cells[1].innerHTML=relic_name(relic5_matrix[R5][0]);

    for(var s=2;s<=8;s++){
    result.rows[0].cells[s].innerHTML=relic1_matrix[R1][s-1];
    result.rows[1].cells[s].innerHTML=relic2_matrix[R2][s-1];
    result.rows[2].cells[s].innerHTML=relic3_matrix[R3][s-1];
    result.rows[3].cells[s].innerHTML=relic4_matrix[R4][s-1];
    result.rows[4].cells[s].innerHTML=relic5_matrix[R5][s-1];
    }
    console.log(relic4_matrix[R4][8]);

    if(relic4_matrix[R4][8]>1){
        result.rows[3].cells[0].innerHTML="杯(氷)";
    }else{
        result.rows[3].cells[0].innerHTML="杯";
    }
}

console.log(relic1_matrix);
console.log(relic2_matrix);
console.log(relic3_matrix);
console.log(relic4_matrix);
console.log(relic5_matrix);
console.log(EV_index);
console.log(EV_vector);


}