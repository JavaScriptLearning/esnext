export const basicSpread = `const arr = [1, 2, 3];
  ...arr; // 1 2 3

  const obj = { a: 1, b: 2, c: 3 };
  ...obj; // { a: 1, b: 2, c: 3 }

  <MyComponent {...this.props} />
`;

export const arrs = `const [x, y] = [1, 2, 3, 4];
x; // 1
y; // 2

const [x, y, ...rest] = [1, 2, 3, 4];
x; // 1
y; // 2
rest; // [3, 4]
`;

export const assign = `const baseStyle = {
  background: '#b4d455',
  padding: 10,
};

const App = (props) => {
  const { altStyle } = this.props;
  const blendedStyle = { ...baseStyle, ...altStyle };

  return <div style={blendedStyle}>Yay!</div>;
};
`;
