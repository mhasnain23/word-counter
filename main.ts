#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

export const main = async () => {
    const answer: {
        Sentence: string
    } = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: chalk.greenBright("Enter Your Sentence To Count Words"),
        }
    ])
    const words = answer.Sentence.trim().split(" ");
    console.log(words);
    //Print the words count of the sentence to the console
    console.log(`Your Sentence Words Count is ${words.length}`);

}

main()