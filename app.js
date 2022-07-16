//let a = document.getElementById("a").value;
//let b = document.getElementById("b").value;
// let c = document.getElementById("c").value;
function a(a,b,c) {
    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = Math.abs(descriminantValue);
     numeratorpositive = (-1*b) + descriminantValue;
     squareroot_absolutedescriminantValue = Math.sqrt(absolutedescriminantValue)
     denominaor = (2*a)
    console.log("Discriminant: ",descriminantValue);
    console.log("Discriminant Positive: ",absolutedescriminantValue);

    // for real roots
     if (descriminantValue>=0) {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue);
        positivenumerator = (-1*b) + absolutedescriminantValue;
        negativenumerator = (-1*b) - absolutedescriminantValue;
        console.log(positivenumerator)
        console.log(negativenumerator)
     } else {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue+"i");
     }
}

a(1,0,9);
a(3,5,2);