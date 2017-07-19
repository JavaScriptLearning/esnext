export const proto = `function Dog() {...}
Dog.prototype = new Animal();
`;

export const classIn = `class Dog Extends Animal {
  ...
}
`;

export const withReact = `import React from 'react'

class EmployeeCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company,
    };
  }

  render() {
    return (
      <div>
        Active Employees: { this.state.company.employeeCount }
      </div>
    )
  }
}
`;

export const withBetterReact = `import React, { Component } from 'react'
import PT from 'prop-types';

class EmployeeCount extends Component {
  static propTypes = {
    company: PT.shape({
      employeeCount: PT.number.isRequired,
    }).isRequired,
  }

  state = {
    company: this.props.company,
  }

  render() {
    const { company } = this.state;

    return (
      <div>
        Active Employees: { company.employeeCount }
      </div>
    )
  }
}
`;
