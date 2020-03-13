
import readline from 'readline';
import {Student} from './class.mjs';

const rl = readline.createInterface({

input: process.stdin,

output: process.stdout
});

rl.question('What is your name? : ', (answer1) => {
    rl.question('what is yout matricno : ', (answer2) => {
        rl.question('What is your major : ', (answer3) => {

            let student = new Student (answer1, answer2, answer3)
            console.log(student.display());
            rl.close();
        });
    });
});
