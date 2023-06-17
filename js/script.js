let a;
let c = true;
let l = false;
let price =0;
function oii(b){
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');
    const four = document.querySelector('#four');
    const five = document.querySelector('#five');
    if(c){
    one.className = 'items';
    two.className = 'items';
    three.className = 'items';
    four.className = 'items';
    five.className = 'items';
    switch(b){
        case 1:one.className = 'sitem';break;
        case 2:two.className = 'sitem';break;
        case 3:three.className = 'sitem';break;
        case 4:four.className = 'sitem';break;
        case 5:five.className = 'sitem';break;
    }
    a=b;
    l=true;
    }
    
}
function sub(){
   if(l){
    c=false;
    document.getElementById("submits").value = "SUBMITED";
    document.getElementById("rating-h1").innerHTML = "Thank you!";
    document.getElementById("rating-p").innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    document.getElementById("submits").className = "selected";
   }
}
function test(g,p){
    const f = document.getElementById(g);
    if(f.value=="Add to cart"){
        f.value = "Added";
        f.className = "addselect";
        price+=p;
    }else{
        price-=p;
        f.value = "Add to cart";
        f.className = "test";
    }
    document.getElementById("row-item-price").innerHTML = "LKR "+price+".00";
}

function change(c,d,p){
    if(document.getElementById(c).className=="sub-item"){
        document.getElementById(c).className= "sub-item-select";
        document.getElementById(d).className= "fa-solid fa-circle-minus fa-sm";
        price+=p;
    }else{
        price-=p;
        document.getElementById(c).className= "sub-item";
        document.getElementById(d).className= "fa-solid fa-circle-plus fa-sm";
    }
    document.getElementById("row-item-price").innerHTML = "LKR "+price+".00";
}