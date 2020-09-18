## What is this project

I have done this project as a part of online course.
This project is a simple sorting project that is made with the help
of typescript.This project was more focused on designing application.
I started first with using interface but than finally used inheritance
as the objects in application shared similar properties.

To run this project execute : npm start.
Refer index.ts as an starting point to understand code

## Learnings from this project

* creating project structure : src and build folders
* tsc --init command to generate tsconfig file
* npm init -y command to generate package.json in silent mode
* using concurrently to fire command simultaneously..checkout package.json script tag
* configuring tsconfig file so that generated js file directly go in build folder
* defining getter/setter in class
* concept that getter method can be called using just name..skipping braces ()
* in interface also getter method can be defined skipping braces ()
* learnt about array join method and array split method
* concept that string cant be manipulated..let str = "xyz"..str[1]="p"..still if we
  print str..it will show "xyz".This behaviour is different from arrays
* interface vs abstract class
* concept that in abstract class we can provide method body also