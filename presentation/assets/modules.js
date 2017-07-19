export const simple = `import React from 'react';
import ApiClient from './lib/ApiClient';

class MyComponent extends React.Component {
  ...
}

export MyComponent;
`;

export const defaults = `// example.js
export default function() {...};

// example2.js
import ex from './example';

ex();
`;

export const named = `// example.js
export function ex1() {...};
export function ex2() {...};
export function ex3() {...};

// example2.js
import { ex2, ex3 } from './example.js;
`;

export const aliasing = `// example.js
export function ex1() {...};
export function ex2() {...};
export function ex3() {...};

// example2.js
import * as EX from './example.js';

EX.ex1();
EX.ex2();
`;
