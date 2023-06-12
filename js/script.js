let a;
let c = true;
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
    }
    
}
function sub(){
    c=false;
    document.getElementById("submits").value = "SUBMITED";
    document.getElementById("submits").className = "selected";
}