const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let emptyArr = [];

rl.question(`What is your name?`, (answer1) => {
  console.log(`cool! Hi ${answer1}`);
  emptyArr.push(answer1);
  rl.question(`chocolates/candy?`, (answer2) => {
    console.log(`okayyyy weird!!! but you know why? ${answer2} for me too!`)
    emptyArr.push(answer2);
  rl.question(`do you prefer cats or dogs?`, (answer3) => {
    console.log(`YESS!!! ${answer3} all the way!!`)
    emptyArr.push(answer3);
  rl.question(`Are you a marvel or DC fan?`, (answer4) => {
    console.log(`That was easy! And I agree ${answer4} is better!`);
    emptyArr.push(answer4);
    console.log(`${emptyArr[0]} is a ${emptyArr[2]} lover and will only watch ${emptyArr[3]} movies at the theatres! Oh also make sure you don't leave ${emptyArr[1]} laying around while ${emptyArr[0]} is in the vicinity, he will consume them and then some.`);

    rl.close();
  });
});
});
});