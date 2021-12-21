
let store = document.getElementById('store');

function display(num){
    store.value += num;
}

function calculate(){
    try{
        store.value=eval(store.value)
    }
    catch{
        alert("invalid")
    }
    
}
function clr(){
    store.value="";
}
function del(){
    store.value=store.value.slice(0,-1)
}