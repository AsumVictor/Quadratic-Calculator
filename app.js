//let a = document.getElementById("a").value;
//let b = document.getElementById("b").value;
// let c = document.getElementById("c").value;

function descriminant(a,b,c) {
    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = AbstractRange(descriminantValue);
    //let numeratorpositive = (-1*b) + descriminantValue;
    console.log(descriminantValue);
    console.log(absolutedescriminantValue);
}

descriminant(6,-7,3);
 
