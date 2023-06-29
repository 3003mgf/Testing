const suma = (a, b) =>{
//Your code here:
return a + b;
};


const mult = (a, b) =>{
//Code here:
return a * b;
};


const user = (nombre, apellido) =>{
  //Code here:
return {
  nombre,
  apellido,
}
};


const promisifiedFunction = (arg) => new Promise((resolve, reject)=>{
  //Code here:
 return arg ? resolve("Resolved") : reject("Rejected");
})


const mockRest = (a, b, result) =>{
result(a - b);
}


module.exports.suma = suma;
module.exports.mult = mult;
module.exports.user = user;
module.exports.promisifiedFunction = promisifiedFunction;
module.exports.mockRest = mockRest;