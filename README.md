# README Generator

## Project Goals

The goal of this project was to create a command line application that takes user input and outputs a professional README.md document.

To complete this assignment I did the following:
Used node.js to create the command line application framework. This application itself is executed through node.js.
Created the template for the outputted README using template literals within JavaScript.
Modularized the code files so that related code lives in it's own files, streamlining the project directory.
Used the Inquirer npm (node package manager) to prompt the user with questions through the command line and capture their input.
Utilized node's fs (file system) feature to dynamically write a README.md file based on the user's input.

## What I Learned

This was my first venture into node.js and backend programming. I learned that there is so much possible from the command line, and this was only the tip of the iceberg. Getting to use Inquirer was a great first experience with npms. Modularizing code is a game changer, as well. I look forward to learning more about the backend and what else node.js can accomplish.

## Using This Project

In order to use this README.md generator, a user would first need to clone the project repository on GitHub. Next they would navigate to the project's root directory and type "npm install" into the command line:

![npm install](https://user-images.githubusercontent.com/108894754/192595828-8bdbbff1-fbd9-40c2-9748-01bcdf9c58d2.png)

This will tell the user's machine to look at the package-lock.json file and download all of the dependencies for the project (including the exact version of those dependencies so there are no conflicts).
To run the app itself and generate a README.md, this user will enter "node index.js" into the command line and will be presented with a set of questions that will capture the data for the README.md, as shown below:

![launching app](https://user-images.githubusercontent.com/108894754/192595233-f63fdf2c-e062-48f7-b073-1b0514ec80d2.png)

Once the user has gone through all of the prompts, a completed README.md document will appear in the "dist" folder. A completed README will look like the following:

![Generated README md](https://user-images.githubusercontent.com/108894754/192596108-8bfc2a04-4381-457a-a1d2-244eda38a75d.png)

Click the following link to see a video of this program in action:
https://drive.google.com/file/d/1t2oDiGWkZALaQnkyw-I5JQFFLxU2QQo0/view

## GitHub Repo

https://github.com/pmacdonald07/readme-generator.git
