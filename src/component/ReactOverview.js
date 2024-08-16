import React, { useState, useEffect, useContext, createContext } from 'react';

// Context for the example
const MyContext = createContext();

const ReactOverview = () => (
  <div className="ReactOverview">
    <h1>React Overview</h1>

    <div className="section">
      <h2>1. Introduction to React</h2>
      <p>
        React is a JavaScript library for building user interfaces, particularly single-page applications where you need a dynamic and responsive user experience.
      </p>
    </div>

    <div className="section">
      <h2>2. Components</h2>
      <p>
        React applications are built using components. A component is a reusable, self-contained piece of code that defines how a section of the UI should appear.
      </p>

      <h3>Functional Components</h3>
      <pre>
        <code>{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</code>
      </pre>

      <h3>Class Components</h3>
      <pre>
        <code>{`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>3. JSX (JavaScript XML)</h2>
      <p>
        JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It’s used to describe what the UI should look like.
      </p>
      <pre>
        <code>{`const element = <h1>Hello, world!</h1>;`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>4. Props</h2>
      <p>
        Props (short for properties) are read-only attributes passed from a parent component to a child component.
      </p>
      <pre>
        <code>{`function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Greeting name="Alice" />`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>5. State</h2>
      <p>
        State is a built-in object used to manage data that changes over time within a component.
      </p>

      <h3>Functional Components (using Hooks)</h3>
      <pre>
        <code>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}</code>
      </pre>

      <h3>Class Components</h3>
      <pre>
        <code>{`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    );
  }
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>6. Event Handling</h2>
      <p>
        React handles events similarly to DOM events but uses camelCase syntax.
      </p>
      <pre>
        <code>{`function handleClick() {
  alert('Button was clicked!');
}

function MyButton() {
  return <button onClick={handleClick}>Click Me</button>;
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>7. Lifecycle Methods (Class Components)</h2>
      <p>
        Lifecycle methods are called at different stages of a component’s lifecycle.
      </p>
      <pre>
        <code>{`class MyComponent extends React.Component {
  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return <div>Hello</div>;
  }
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>8. Hooks (Functional Components)</h2>
      <p>
        Hooks are functions that let you use state and other React features without writing a class.
      </p>

      <h3>Common Hooks</h3>
      <pre>
        <code>{`import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>9. Context API</h2>
      <p>
        The Context API allows you to pass data through the component tree without having to pass props manually at every level.
      </p>

      <h3>Create Context</h3>
      <pre>
        <code>{`const MyContext = React.createContext();`}</code>
      </pre>

      <h3>Provide Context</h3>
      <pre>
        <code>{`function App() {
  return (
    <MyContext.Provider value="someValue">
      <Child />
    </MyContext.Provider>
  );
}`}</code>
      </pre>

      <h3>Consume Context</h3>
      <pre>
        <code>{`function Child() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>10. Routing (using React Router)</h2>
      <p>
        React Router is used for handling routing in React applications.
      </p>

      <h3>Basic Setup</h3>
      <pre>
        <code>{`npm install react-router-dom`}</code>
      </pre>

      <h3>Usage</h3>
      <pre>
        <code>{`import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>11. Handling Forms</h2>
      <p>
        React provides a way to manage form inputs and handle form submissions.
      </p>
      <pre>
        <code>{`function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('A name was submitted: ' + inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}`}</code>
      </pre>
    </div>

    <div className="section">
      <h2>12. Error Boundaries</h2>
      <p>
        Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.
      </p>
      <pre>
        <code>{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error occurred:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}`}</code>
      </pre>
    </div>
  </div>
);

export default ReactOverview;
