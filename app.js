//let a = document.getElementById("a").value;
//let b = document.getElementById("b").value;
// let c = document.getElementById("c").value;
function a(a,b,c) {
    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = Math.abs(descriminantValue);
     numeratorpositive = (-1*b) + descriminantValue;
     squareroot_absolutedescriminantValue = Math.sqrt(absolutedescriminantValue)
    console.log("Discriminant: ",descriminantValue);
    console.log("Discriminant Positive: ",absolutedescriminantValue);
     if (descriminantValue>=0) {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue);
     } else {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue+"i");
     }
}

a(1,-7,3);