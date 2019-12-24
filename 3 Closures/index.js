// Write an example of a closure

const globalVariable = 'global var';

function outerFunction(param1) {
  const variable1 = 'var one';

  function innerFunction(param2) {
    const variable2 = 'var two';

    console.log('globalVariable: ', globalVariable);
    console.log('variable1: ', variable1);
    console.log('variable2: ', variable2);
    console.log('param1: ', param1);
    console.log('param2: ', param2);
  }

  innerFunction('param one');
}

outerFunction('param two');

/*  
What is a closure? 

- a closure gives you access to an outer function’s scope from an inner function.
- defined as a function inside another function and exposed.
- to expose a function, return it or pass it to another function.
*/