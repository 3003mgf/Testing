const {suma, mult, user, promisifiedFunction, mockRest} = require("../exercise1");
//Si ponemos XIT (xit), evitamos que ese test corra.
//Si ponemos XDESCRIBE (xdescribe), evitamos que un grupo de tests corran.
//Si ponemos describe.only, corre solamente ese grupo de test, y skippea los demas.


//HOOKS

beforeAll(()=>{
  console.log("Running Tests!");
})

afterAll(()=>{

})

beforeEach(()=>{

})

afterEach(()=>{

})


describe("Must return the sume between the 2 parameters", ()=>{ //Ponemos varios IT por seguridad.

  it("Return 15 if it receives 10 and 5", ()=>{
    expect(suma(10, 5)).toBe(15);
  });

  it("Return 12 if it receives 10 and 2", ()=>{
    expect(suma(10, 2)).toBe(12);
  });

})

describe("Must return the product of the parameters", ()=>{ //Ponemos varios IT por seguridad.

  it("Return 6 when receives 2 and 3", ()=>{
    expect(mult(2, 3)).toBe(6);
  });

  it("Return 10 when receives 2 and 5", ()=>{
    expect(mult(2, 5)).toBe(10);
  });

})


describe("Must return an object with keys NOMBRE and APELLIDO", ()=>{
  it("Return object with keys NAME and APELLIDO", ()=>{
    expect(user("Nacho", "GF")).toEqual({
      nombre: "Nacho",
      apellido: "GF"
    })});

  it("Return object with keys NAME and APELLIDO", ()=>{
    expect(Object.keys(user())).toEqual(["nombre", "apellido"]);
  });
})


describe("Testing Async Code", ()=>{

  it("Must return 'RESOLVED' if the argument is true", ()=>{
    return promisifiedFunction(true).then(data =>{ //Con este THEN cacheamos el resolve que creamos en la funcion en exercise1.js
    expect(data).toBe('Resolved');
   })
  })

  it("Must return 'RESOLVED' if the argument is true", async()=>{
    const promise = await promisifiedFunction(true);
    expect(promise).toBe("Resolved");
  })


  it("Must return 'REJECTED' if the argument is false", ()=>{
     return promisifiedFunction(false).catch(err => {
      expect(err).toBe("Rejected"); //Para que esto funcione debemos hacer un reject, no un Promise.reject
     })
     //Si tiraramos un new Error(), al ser un objeto deberiamos usar toBeEqual
  })

  it("Must return 'REJECTED' if the argument is false", async()=>{
     try{
      const promise = await promisifiedFunction(false);

     }catch(err){
      expect(err).toBe("Rejected");
     };
     //Si usamos async await para cachear el error, debemos hacerlo asi.
  })
  
})


describe("MockFunction (REST)", ()=>{
  it("Return 2 when receives 12 and 10", ()=>{
    const result = (a, b)  => a - b;

    const mock  = jest.fn(()=> result(12, 10));
    
    mockRest(12, 10, mock);

    console.log(mock.mock.calls); //Nos retorna [[2]];

    expect(mock.mock.results[0].value).toBe(2);
  })
})