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
      Functional component is just a simple javascript function; it accepts the data in the form of props and returns the react element. 
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
    <h2>React Dom</h2>
    ReactDOM is the interface between React and the DOM, responsible for rendering and updating components efficiently. It leverages the Virtual DOM to minimize direct DOM manipulations, ensuring high performance and smooth updates. With newer versions of React, ReactDOM is evolving to support more advanced rendering techniques, making it an essential part of React's architecture.
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
    <h2>Creating a ListGroup Component</h2>
    <h3>Use Fragments<code>{'<>'}</code></h3>
Avoid Extra DOM Nodes:

Wrapping elements in a (div) or other HTML elements can clutter the DOM, which might affect styling or layout. Fragments prevent this by not rendering any additional HTML tags.
Cleaner Markup:

Using fragments helps keep the HTML structure clean and reduces unnecessary nesting, making the code more readable and maintainable.
    <pre>
    <code>{` jsx (javascript xml)
  function ListGroup {
  return ><>
  
   <ul className="List-Group">
    <li classNmae=List-Group-item> item</li>
    <li classNmae=List-Group-item> third item</li>
    <li classNmae=List-Group-item>fourth item</li>
     <li classNmae=List-Group-item> fifth item</li>


  </ul>

  <>
}

`}</code>       </pre>



<h3> professional way </h3>
const <hr></hr> A constant, declared using the const keyword, cannot be reassigned once it's been set. This means that the value of a constant remains the same throughout the code after it's initialized.
<hr></hr>
let 
<hr></hr>Variables declared with let or var can be reassigned. This means their values can change over time as your program runs.
 <pre>
    <code>{` 
  function ListGroup {
  const items=["london","tokyo","paris","spain"]
  
  return ><>
   <ul className="List-Group">
  {items.map((item)=>(
    <li key ={item}>{item}</li>))} //when rendering a list of items  using the map method we shoul dgive each item a unique key
  </ul>

  <>
}

`}</code>       </pre>
 <pre>
    <code>{` 
   ]
function ListGroup {

let items=["london","tokyo","paris","spain"];
items[];

if(items.length===0)
return <><h1>List</h1><p>no items found<p><>;
return ><>
   <ul className="List-Group">
  {items.map((item)=>(
    <li key ={item}>{item}</li>))} //when rendering a list of items  using the map method we shoul dgive each item a unique key
  </ul>
  

  <>
}

`}</code>       </pre>
in jsx we cannot use if statment , only Html components or React component, the only thing we can use is braces <code>{'{items.length===0?<p>no items found</p>:null} </code>to render anything we want '}</code>
<pre>
    <code>{` 
   ]
function ListGroup {

let items=["london","tokyo","paris","spain"];
items[];

return ><>
   <ul className="List-Group">
   {items.length===0?<p>no items found</p>:null}
  {items.map((item)=>(
    <li key ={item}>{item}</li>))} //when rendering a list of items  using the map method we shoul dgive each item a unique key
  </ul>

  <>
}
`}</code></pre>
<pre>
    <code>{` 
   ]
function ListGroup {

let items=["london","tokyo","paris","spain"];
items[];

const getMessage= ()=> { return items.length===0?<p>no items found</p>:null
}


return ><>
  {getMessage(1)}
   <ul className="List-Group">
 /when rendering a list of items  using the map method we shoul dgive each item a unique key
  </ul>

  <>
}
 
   
function ListGroup {

let items=["london","tokyo","paris","spain"];

return ><>
   <ul className="List-Group">
   {items.length===0? && <p>no items found</p>}
  {items.map((item)=>(
    <li className="List-group-item" key={item} onClick={()=> console.log('clicked')}>{item}</li>))} //when rendering a list of items  using the map method we shoul dgive each item a unique key
  </ul>

  <>
}
  
   
function ListGroup {

let items=["london","tokyo","paris","spain"];

return ><>
   <ul className="List-Group">
   {items.length===0? && <p>no items found</p>}
  {items.map((item)=>(
    <li className="List-group-item" key={item} onClick={()=> console.log(item)}>{item}</li>))}// in order to show th eitem clicked in the console we logged item to it 

   </ul>
  <>
}-----------------
return ><>
  
   <ul className="List-Group">
   {items.length===0? && <p>no items found</p>}
  {items.map((item,index)=>(
    <li className="List-group-item" key={item} onClick={()=> console.log(item,index)}>{item}</li>))}// in order to show th eitem clicked in the console and number them in order 

   </ul>
  <>
}
  return ><>
   <ul className="List-Group">
   {items.length===0? && <p>no items found</p>}
  {items.map((item,index)=>(
    <li className="List-group-item" key={item} onClick={(event)=> console.log(event)}>{item}</li>))}// by passing the event parameter you'll be abole to view the event details  

   </ul>
  <>
  

import { useState } from "react"
import { MouseEvent } from "react";
function ListGroup {

let items=["london","tokyo","paris","spain"];


//Hook 
const [selctedIndex , setSelectedIndex]=useState(-1);


//event Handler
const handleClick = (event : MouseEvent)=> console.log(event)

return ><>
   <ul className="List-Group">
   {items.length===0? && <p>no items found</p>}
  {items.map((item,index)=>(
    <li className={selectedIndex===index ? "list-group-item active" : "list-group-item} key={item} onClick={()=>{setSelectedIndex(index);}}// in order to show th eitem clicked in the console we logged item to it 

   </ul>
  <>
import { useState } from "react"
import { MouseEvent } from "react";


interface Props {
   items: string[];
   heading: string;


}

function ListGroup ({items,heading}:Props{

//Hook 
const [selctedIndex , setSelectedIndex]=useState(-1);


//event Handler
const handleClick = (event : MouseEvent)=> console.log(event)

return ><>

    <h1>{heading}</h1>
     {items.length===0? && <p>no items found</p>}
    <ul className="List-Group">
  {items.map((item,index)=>(
    <li className={selectedIndex===index ? "list-group-item active" : "list-group-item} key={item} onClick={()=>{setSelectedIndex(index);}}// in order to show th eitem clicked in the console we logged item to it 

   </ul>
  </div>
  <>

  app.tsx
  import ListGroup from "./components/listGroup"
  function App(){
let items=["london","tokyo","paris","spain"];
return(
<div>
<ListGroup items={items} heading ="cities}
</div>

)
  
  }
}
  // passing functions via props
  
import { useState } from "react"
import { MouseEvent } from "react";


interface Props {
   items: string[];
   heading: string;
   // (item: string) => void
   onselectItem: (item:string) = >void // onClick


}

function ListGroup ({items,heading}:Props{

//Hook 
const [selctedIndex , setSelectedIndex]=useState(-1);


//event Handler
const handleClick = (event : MouseEvent)=> console.log(event)

return ><>

    <h1>{heading}</h1>
     {items.length===0? && <p>no items found</p>}
    <ul className="List-Group">
  {items.map((item,index)=>(
    <li className={selectedIndex===index ? "list-group-item active" : "list-group-item} key={item} 
    onClick={()=>{setSelectedIndex(index); onSelectItem(item)}}// in order to show th eitem clicked in the console we logged item to it 

   </ul>
  </div>
  <>

`}</code></pre>
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
