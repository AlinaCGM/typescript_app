import React from 'react';
import './App.css';

// let name:string ;
// name = "Alina"

// function printName(name) {
//  console.log(name:sting)    OR  let personName: unknown         //if you want to use any Type
//}

  //  let age: number | string;   | this calls union in typescript, in order to use both:string and numbers
// let isStudent:boolean;
// let role:[number, string];
// role = [14, "cat"]

// type Person = {
//   name: string;       
//   age?:number;     ? this means that type age is optional and we can not use it for sure
// };

// let person: Person = {
//   name: "Alina",
// };

//let lotsOfPeople : Person[];

type X = {
  a:string;
  b: number;
};
                // IN variant below it will use properties of its own and properties from the above
type Y = X &  {
  a:string;
  b: number;
};    
//OR 
interface Person extends X {
  name: string ;
  age?:number;
};

function App() {
  return (
    <div className="App">
     hello
    </div>
  );
}

export default App;
