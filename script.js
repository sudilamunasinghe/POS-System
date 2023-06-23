var product = document.getElementById('product');
var quantity = document.getElementById('quantity');
var uprice = document.getElementById('uprice');
var run = document.getElementById('run');
var exit = document.getElementById('exit');
var form = document.getElementById('form');

var z = 0;
var x = 0;
var y = 0;
// for (let z = 0; z++;) {
    
//     // if(run.length>0){
//     //     z = 1;
//     //     form(reset);
//     // }
//     // else{
//     //     z = 0;
//     // };
// }
    var tot = quantity.value + uprice.value;
do{
    var arrayProduct = [x];
    arrayProduct[x] = product;

    var arrayQuantity = [x];
    arrayQuantity[x] = quantity;

    var arrayUprice = [x];
    arrayUprice[x] = uprice;

    function eventrun(){
        var z=2;
        product.value = '';
        quantity.value = '';
        uprice.value = '';
        console.log(arrayProduct[x])
        console.log(arrayQuantity[x])
        console.log(arrayUprice[x])
        console.log(tot)
    }
    run.addEventListener('click',eventrun);
}while(z=0);

// function abc(){
//     document.getElementById('output1').innerHTML = arrayProduct[1].value;
// }
// exit.addEventListener('click',abc)





