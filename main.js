// Hidden box converter
document.getElementById('output').style.visibility = 'hidden';
// input form
document.getElementById('lbsInput').addEventListener('input', function(e){
    // show box converter
    document.getElementById('output').style.visibility = 'visible';
    // target text in form to do same as the input form
    let lbs = e.target.value;
    // fireup grams output
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
    // fireup kilograms output
    document.getElementById('kgOutput').innerHTML = lbs/2.2046;
     // fireup Ounces output
    document.getElementById('ozOutput').innerHTML = lbs*16;
});