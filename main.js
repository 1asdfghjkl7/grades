const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
let grades = {A:0,B:0,C:0,D:0,F:0} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    /*
      If the score is greater than 90, increment grades.A by 1.
    
      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */


    switch (true) {
      case  (scores[i] > 50 && scores[i] <= 60):
      grades.F++ 
        break;
      
      case (scores[i] > 60 && scores[i] <= 70):
      grades.D++  
        break;

      case (scores[i] > 70 && scores[i] <= 80):
      grades.C++  
        break;

      case (scores[i] > 80 && scores[i] <= 90):
      grades.B++  
        break;

      case (scores[i] <= 100):
      grades.A++
      break;

      default:
        break;
    }

}
console.log(grades);