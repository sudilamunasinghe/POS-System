var product = document.getElementById('product').value;
var quantity = document.getElementById('quantity').value;
var uprice = document.getElementById('uprice').value;
var run = document.getElementById('run');
var exit = document.getElementById('exit');
var form = document.getElementById('form');
var op1 = document.getElementById('output1');
var op2 = document.getElementById('output2');
var op3 = document.getElementById('output3');

var x = 0;
var z = 0;
var y = 1;
do{
    var arrayProduct = [x];
    arrayProduct[x] = product;

    var arrayQuantity = [x];
    arrayQuantity[x] = quantity;

    var arrayUprice = [x];
    arrayUprice[x] = uprice;

    var x = x + 1;
    var y = y + 1;
    function eventrun(){
        var z = 1;
        document.getElementById('product').value = '',
        document.getElementById('quantity').value = '',
        document.getElementById('uprice').value = '',
        console.log(y);
    }
    run.addEventListener('click',eventrun);

    function exitrun(){
        var x = 0;
        var z = 0;
        console.log(y)
        for(;i=0, i <= y;){
            console.log(arrayProduct[x]);
            console.log(arrayQuantity[x]);
            console.log(arrayUprice[x]);
            form.style.cssText = 'display: none;'
            op1.innerHTML = arrayProduct[x];
            var x = x + 1;
            var i = i + 1;
        }
    }
    exit.addEventListener('click',exitrun);
}while(z==1);

