function getpin(){
    const pin= Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length ==4){
        return pin;
    }
    else{
        return getpin();
    }
}

function generatePin(){
    const pin = getpin();
   document.getElementById('random-pin-generatePin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    document.getElementById('type-number-display').value = number;
})
