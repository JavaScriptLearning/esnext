export const before = `const arr = [1, 2, 3];
const x = arr[0];
const y = arr[1];

function(obj) {
  const value = obj.value;
}

const name = this.props.name;
const dob = this.props.dob;
`;

export const after = `const [x, y] = [1, 2, 3];

function ({ value }) {}

const { name, dob } = this.props;
`;

export const complex = `// Fun
const { props: { fontStyle, user }, state: { name }, context: { router }} = this;

// More understandable
const { fontStyle, user } = this.props;
const { name } = this.state;
const { router } this.context;
`;

export const func = `updateState(payload) {
  const name = payload.name || 'stranger';
  this.setState({
    name: name
  });
}

updateState({ name = 'stranger' }) {
  this.setState({ name });
}
`;
