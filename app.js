const btn = document.getElementById("calculate");
const answer1 = document.getElementById("root1");
const answer2 = document.getElementById("root2");
const  answerDiv = document.querySelector('.root');

function calculate() {
    let a = document.getElementById("a").value;
   let  b = document.getElementById("b").value;
    let  c = document.getElementById("c").value;
    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = Math.abs(descriminantValue);
     numeratorpositive = (-1*b) + descriminantValue;
     squareroot_absolutedescriminantValue = Math.sqrt(absolutedescriminantValue)
     denominator = (2*a)

    // for real roots
     if (descriminantValue>=0) {
        console.log("Squre root Discriminant: ",squareroot_absolutedescriminantValue);
        positive_numerator = (-1*b) + absolutedescriminantValue;
        negative_numerator = (-1*b) - absolutedescriminantValue;
            positive_answer = positive_numerator/denominator
            negative_answer = negative_numerator/denominator
            root1 = positive_numerator.toFixed(2);
            root2 = negative_answer.toFixed(2);
     } else {
        first_Answer = (-1*b)/denominator;
        positive_second_term = (squareroot_absolutedescriminantValue/denominator).toFixed(2)+"i";
        negative_second_term = ((-1*squareroot_absolutedescriminantValue)/denominator).toFixed(2)+"i";
        root1 = first_Answer.toFixed(2) + " + " + positive_second_term;
        root2 = first_Answer.toFixed(2)  + " " +  negative_second_term;
     }

     answerDiv.classList.add("show");
     answer1.textContent = root1;
     answer2.textContent = root2;
}






btn.addEventListener("click",calculate);
