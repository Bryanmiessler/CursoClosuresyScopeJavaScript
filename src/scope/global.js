var a ; // declaracion
var b = 'b'; // declaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


//Global scope
var fruit = 'Sandia';

console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit()

function Countries() {
  const pais = 'Colombia';
  console.log(pais);
}

Countries();
console.log(pais);