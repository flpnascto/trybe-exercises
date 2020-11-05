
// Create a Simple JSX Element
const JSX1 = <h1>Hello JSX!</h1>;

// Create a Complex JSX Element
const JSX2 = (
  <div>
    <h1>JSX Element</h1>
    <p>This is a complex element</p>
    <ul>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ul>
  </div>
);

// Add Comments in JSX
const JSX3 = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    { /*<h1>JSX Element</h1>
    <p>This is a complex element</p> */ }
  </div>
);

// Render HTML Elements to the DOM
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));

// Define an HTML Class in JSX
const JSX5 = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

// Learn About Self-Closing JSX Tags
const JSX6 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// Create a Stateless Functional Component
const MyComponent = function() {
  return (
    <div>My component function</div>
  );
}

// Create a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
};

// Create a Component with Composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
