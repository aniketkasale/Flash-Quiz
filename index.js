var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
 console.log(chalk.yellow("WELCOME TO FLASH QUIZ"))
 console.log("-------------------------------------")
 var Name = readlineSync.question('What is Your Name : ');
 console.log("Welcome " + Name)
function play(que,ans,a,b){
  console.log(que)
  console.log(a);
  console.log(b);
  var userAns=readlineSync.question("Answer : ");
  
  if (userAns==ans){
     console.log(chalk.green("Yep!! you are right"));
  score=score+1;
  console.log(chalk.green("Hurray!! Your score is "+ score))
  console.log("-------------------------------------")
  }else{
    
  
  console.log( chalk.red(" you are Wrong"));
  console.log(chalk.red(" Your score is "+ score))
  }
}
var questions=[{que:"Which comics does The Flash also appear in ? : ",ans:"a",option1:"a : DC",option2:"b : Marvel"},{que:"What is The Flash's real name ? : ",option1:"a : Joseph",option2:"b : Barry",ans:"b"},{que:"What is the name of the company ? :",ans:"a",option1:"a : Star Labs",option2:"b : New  york and co",}];
for(var i=0;i<questions.length;i++){
  play(questions[i].que,questions[i].ans,questions[i].option1,questions[i].option2)
}
console.log("-------------------------------------")
console.log(chalk.yellow("So Your Total Score is ",score))
 console.log("-------------------------------------")
console.log(chalk.yellow("Thank You "))