const btn = document.getElementById("calculate");
const answer1 = document.getElementById("root1");
const answer2 = document.getElementById("root2");
const  answerDiv = document.querySelector('.root');
const  history = document.querySelector('.history');



function calculate() {
    let a = document.getElementById("a").value;
   let  b = document.getElementById("b").value;
    let  c = document.getElementById("c").value;
    let descriminantValue = (b*b)-(4*a*c);
    let absolutedescriminantValue = Math.abs(descriminantValue);
     let squareroot_absolutedescriminantValue = Math.sqrt(absolutedescriminantValue)
    let  denominator = (2*a)
    alert(-1*0)
    // for real roots
     if (descriminantValue>=0) {
        positive_numerator = (-1*b) + squareroot_absolutedescriminantValue;
        negative_numerator = (-1*b) - squareroot_absolutedescriminantValue;
            positive_answer = positive_numerator/denominator
            negative_answer = negative_numerator/denominator
            root1 = positive_numerator.toFixed(2);
            root2 = negative_answer.toFixed(2);
     } else {
        first_Answer = (-1*b)/denominator;
        positive_second_term = (Math.sqrt(squareroot_absolutedescriminantValue)/denominator).toFixed(2)+"i";
        negative_second_term = ((-1*Math.sqrt(squareroot_absolutedescriminantValue))/denominator).toFixed(2)+"i";
        root1 = first_Answer.toFixed(2) + " + " + positive_second_term;
        root2 = first_Answer.toFixed(2)  + " " +  negative_second_term;
     }

     answerDiv.classList.add("show");
     answer1.textContent = root1;
     answer2.textContent = root2;
}

function addHistory() {
   let a = document.getElementById("a").value;
   let  b = document.getElementById("b").value;
    let  c = document.getElementById("c").value;
    //let root1 = 1;
   // let root2 = 3;
   const answerdiv = document.createElement('div')
   const eqn = document.createElement('div')
  const ans = document.createElement('div')
   answerdiv.classList.add('answer')
   history.append(answerdiv)
   eqn.innerHTML = "<p>Equation :</p>"+ a + "X<sup>2</sup>" + " + " + b + "X" + "+" + c + " = 0";
   ans.innerHTML = "X = " + root1 + " OR " + "X = " + root2 ;
   answerdiv.append(eqn)
   answerdiv.append(ans)
}


btn.addEventListener("click",calculate);
btn.addEventListener("click",addHistory);

