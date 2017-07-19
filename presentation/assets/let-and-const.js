export const functionScoped = `function() {
  if (true) {
    var i = 'hello';
  }
  console.log(i); // hello
}
`;

export const blockScoped = `function() {
  if (true) {
    let i = 'hello';
    const j = 'world';
  }
  console.log(i); // ReferenceError
  console.log(j); // ReferenceError
}
`;

export const hoisted = `function() {
  console.log(a); // undefined
  var a = 'var';
}
`;

export const notHoisted = `function() {
  console.log(a); // ReferenceError
  console.log(b); // ReferenceError

  let a = 'let';
  const b = 'const';
}
`;

export const immutable = `const foo; // SyntaxError

const foo = someObject;
foo = someOtherObject; // SyntaxError
foo.bar = 'hello';
`;
