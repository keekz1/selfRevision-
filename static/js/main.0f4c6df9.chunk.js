(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(6),r=n.n(o),c=(n(15),n(4)),u=n(2);var s=e=>{let{notes:t}=e;return l.a.createElement("ul",{className:"note-list"},t.length>0?t.map((e,t)=>l.a.createElement("li",{key:t},e)):l.a.createElement("li",null,"No notes available."))};var i=e=>{let{title:t,notes:n}=e;return l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,t),l.a.createElement(s,{notes:n}))};var m=e=>{let{addNote:t}=e;const[n,o]=Object(a.useState)("");return l.a.createElement("div",{className:"note-editor"},l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),n.trim()&&(t(n),o(""))}},l.a.createElement("textarea",{value:n,onChange:e=>{o(e.target.value)},placeholder:"Write your note here..."}),l.a.createElement("button",{type:"submit"},"Save Note")))};var p=e=>{let{sections:t,onSectionChange:n}=e;return l.a.createElement("nav",{className:"navigation"},t.map(e=>l.a.createElement("button",{key:e,onClick:()=>n(e)},e)))};Object(a.createContext)();var d=()=>l.a.createElement("div",{className:"ReactOverview"},l.a.createElement("h1",null,"React Overview"),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"1. Introduction to React"),l.a.createElement("p",null,"React is a JavaScript library for building user interfaces, particularly single-page applications where you need a dynamic and responsive user experience.")),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"2. Components"),l.a.createElement("p",null,"React applications are built using components. A component is a reusable, self-contained piece of code that defines how a section of the UI should appear."),l.a.createElement("h3",null,"Functional Components"),l.a.createElement("pre",null,l.a.createElement("code",null,"function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}")),l.a.createElement("h3",null,"Class Components"),l.a.createElement("pre",null,l.a.createElement("code",null,"class Welcome extends React.Component {\n  render() {\n    return <h1>Hello, {this.props.name}</h1>;\n  }\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"3. JSX (JavaScript XML)"),l.a.createElement("p",null,"JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It\u2019s used to describe what the UI should look like."),l.a.createElement("pre",null,l.a.createElement("code",null,"const element = <h1>Hello, world!</h1>;"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"4. Props"),l.a.createElement("p",null,"Props (short for properties) are read-only attributes passed from a parent component to a child component."),l.a.createElement("pre",null,l.a.createElement("code",null,'function Greeting(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n<Greeting name="Alice" />'))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"5. State"),l.a.createElement("p",null,"State is a built-in object used to manage data that changes over time within a component."),l.a.createElement("h3",null,"Functional Components (using Hooks)"),l.a.createElement("pre",null,l.a.createElement("code",null,"import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}")),l.a.createElement("h3",null,"Class Components"),l.a.createElement("pre",null,l.a.createElement("code",null,"class Counter extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { count: 0 };\n  }\n\n  render() {\n    return (\n      <div>\n        <p>You clicked {this.state.count} times</p>\n        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>\n      </div>\n    );\n  }\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"6. Event Handling"),l.a.createElement("p",null,"React handles events similarly to DOM events but uses camelCase syntax."),l.a.createElement("pre",null,l.a.createElement("code",null,"function handleClick() {\n  alert('Button was clicked!');\n}\n\nfunction MyButton() {\n  return <button onClick={handleClick}>Click Me</button>;\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"7. Lifecycle Methods (Class Components)"),l.a.createElement("p",null,"Lifecycle methods are called at different stages of a component\u2019s lifecycle."),l.a.createElement("pre",null,l.a.createElement("code",null,"class MyComponent extends React.Component {\n  componentDidMount() {\n    console.log('Component did mount');\n  }\n\n  componentDidUpdate(prevProps, prevState) {\n    console.log('Component did update');\n  }\n\n  componentWillUnmount() {\n    console.log('Component will unmount');\n  }\n\n  render() {\n    return <div>Hello</div>;\n  }\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"8. Hooks (Functional Components)"),l.a.createElement("p",null,"Hooks are functions that let you use state and other React features without writing a class."),l.a.createElement("h3",null,"Common Hooks"),l.a.createElement("pre",null,l.a.createElement("code",null,"import React, { useState, useEffect } from 'react';\n\nfunction Example() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"9. Context API"),l.a.createElement("p",null,"The Context API allows you to pass data through the component tree without having to pass props manually at every level."),l.a.createElement("h3",null,"Create Context"),l.a.createElement("pre",null,l.a.createElement("code",null,"const MyContext = React.createContext();")),l.a.createElement("h3",null,"Provide Context"),l.a.createElement("pre",null,l.a.createElement("code",null,'function App() {\n  return (\n    <MyContext.Provider value="someValue">\n      <Child />\n    </MyContext.Provider>\n  );\n}')),l.a.createElement("h3",null,"Consume Context"),l.a.createElement("pre",null,l.a.createElement("code",null,"function Child() {\n  const value = useContext(MyContext);\n  return <p>{value}</p>;\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"10. Routing (using React Router)"),l.a.createElement("p",null,"React Router is used for handling routing in React applications."),l.a.createElement("h3",null,"Basic Setup"),l.a.createElement("pre",null,l.a.createElement("code",null,"npm install react-router-dom")),l.a.createElement("h3",null,"Usage"),l.a.createElement("pre",null,l.a.createElement("code",null,'import { BrowserRouter as Router, Route, Switch, Link } from \'react-router-dom\';\n\nfunction Home() {\n  return <h2>Home</h2>;\n}\n\nfunction About() {\n  return <h2>About</h2>;\n}\n\nfunction App() {\n  return (\n    <Router>\n      <nav>\n        <ul>\n          <li><Link to="/">Home</Link></li>\n          <li><Link to="/about">About</Link></li>\n        </ul>\n      </nav>\n      <Switch>\n        <Route path="/" exact component={Home} />\n        <Route path="/about" component={About} />\n      </Switch>\n    </Router>\n  );\n}'))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"11. Handling Forms"),l.a.createElement("p",null,"React provides a way to manage form inputs and handle form submissions."),l.a.createElement("pre",null,l.a.createElement("code",null,"function Form() {\n  const [inputValue, setInputValue] = useState('');\n\n  const handleChange = (event) => {\n    setInputValue(event.target.value);\n  };\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert('A name was submitted: ' + inputValue);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Name:\n        <input type=\"text\" value={inputValue} onChange={handleChange} />\n      </label>\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}"))),l.a.createElement("div",{className:"section"},l.a.createElement("h2",null,"12. Error Boundaries"),l.a.createElement("p",null,"Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI."),l.a.createElement("pre",null,l.a.createElement("code",null,'class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError() {\n    return { hasError: true };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.error("Error occurred:", error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <h1>Something went wrong.</h1>;\n    }\n\n    return this.props.children; \n  }\n}'))));n(16);var E=function(){const[e,t]=Object(a.useState)({Python:[],Java:[],TypeScript:[],React:[]}),[n,o]=Object(a.useState)("Python");return Object(a.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("sections"));e&&t(e)},[]),Object(a.useEffect)(()=>{localStorage.setItem("sections",JSON.stringify(e))},[e]),l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(p,{sections:Object.keys(e),onSectionChange:o}),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/react-overview",element:l.a.createElement(d,null)}),l.a.createElement(u.a,{path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:n,notes:e[n]}),l.a.createElement(m,{addNote:e=>{t(t=>({...t,[n]:[...t[n],e]}))}}))})))))};var h=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then(t=>{let{getCLS:n,getFID:a,getFCP:l,getLCP:o,getTTFB:r}=t;n(e),a(e),l(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null))),h()},7:function(e,t,n){e.exports=n(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.0f4c6df9.chunk.js.map