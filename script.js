"use strict"

// document.write("<h1>Objects Assignment</h1>");

//  const fries = {
//      Wendys: 'Nasty',
//      Mcdonalds: 'Cold',
//     ChickFillA: 'Walffle Fries',
//     Dillons: 'Crumbly',
//     food: function(){
//      return(" My favorite fries are from chick fill which are  " + fries.ChickFillA + " That is my favorite place to get fries");
//     }
//  }
//  console.log(fries.food());
// // document.write(" My favorite fries are ", + this.ChickFillA + " my second favorite fries are Mcdonalds which are always ", + this.Mcdonalds + " my third favorite fries are dillons but sometimes they are " + this.Dillons + " But my least favorite are Wendys fries becasue they are " + this.Wendys + " That is my fries list ");
//  console.log(fries.Wendys);
//  console.log(fries.ChickFillA);

function Dog(name, type, age, size){
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
}
Dog.prototype.color = 'beige';
Dog.prototype.string = function(){
    return("My dogs name is " + this.name + " She is a " + this.type + " she is " + this.age + " and she is a " + this.size);
}

const myDog = new Dog(" Princess ", " mixed poodle ", " 8 years old "," small dog" );

console.log(myDog.string());

document.write(myDog.string());