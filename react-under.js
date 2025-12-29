// What is component ?
// Component is a reusable piece of UI.
// Component is a reusable, self-contained UI block in react that returns JSX and can manage own data & logic.
// ----------------------------------------------------------------------------------------------------------------------------
// What is props ?
//  Props are immutuable input passed from parent component to child component.
// Immutable - THe data can't be modified by the receiver.
// Child to parent communication is achieved by passing callback functions as props.
// ------------------------------------------------------------------------------------------------------------------------------
// What is the differences between unmount & mount ?
// on first render - "Component mounted", on removal - "Component unmounted"

// Mounting is the process of inserting a component into the DOM.
// unMounting is the process of removing a component from the DOM & cleanup its side effects.
// ------------------------------------------------------------------------------------------------------------------------------
// What is React ?
// React is an open source js library is used to build user interface(UI) especially single page application.
// React is fast , interactive web page using reusable component. 

// React utilies the virtual dom instead of directly manipulating the browser DOM.
// When state changes, React efficiency compare the virtual DOM with the pervious version and only updated the neccessary part of the 
// actual DOM, leading to improve performance.
// React compares the previous Virtual DOM with the New Virtual DOM using a process called reconciliation.

// DOM manipulation : (document.getElementById("title").innerText = "Hello world")
// clearly explanation :
// React runs in the browser & ultimately updated the actual DOM(react commit into the actual DOM). 
// React first creates a virtual DOM from JSX. The virtual DOM is converted
// into the actual DOM & rendered on the screen.
// -------------------------------------------------------------------------------------------------------------------------------
// What is DOM(Document Object Model) ?
//  When runs any html file in browser, the browser is parses the HTML & create a DOM. JS uses this DOM to dynamically read , update , add 
// and remove element without reloading the page.



// What is virtual DOM ?
//  It is a lightweight js object. Its is created from JSX.
// When any state change, React creates a new Virtual DOM, compares it with
//  previous virtual DOM & updates only the necessary part
// of the Actual DOM without re-rendering entire tree.

// -------------------------------------------------------------------------------------------------------------------------------

// What is React Hooks ?
//  React hooks are built-in function that allow us to use React feature like state, lifecycle methods, and context inside functional
// component without using class component.
// ----------------------------------------------------------------------------------------------------------------------------------
// React-Hooks

// useState :
// useState is a React-Hooks that allow functional components to have manage state. WHen the state change affected to rendering the UI page.
// (RE-render Browser updates only changes part, Rendering - Browsers draws UI on screen) 
// 1) React re-renders only when state changes.
// 2) Because React only re-renders when state changes, NOT when normal variables change.

// ------------------------------------------------------------------------------------------------------------------------------------------------


// useEffect :
//  useEffect is a react-Hooks used to handle side effect in functional component such as API call & subscriptions. Its runs after rendering only once
// after that doesn't call unless the change through the dependecies array.
// and can be controlled using the dependency array.


// 1) React initially re-renders the page after only once call useEffect.After that doesnt call unless the dependecies through call the useEffect.
// 2) If you want to call the useEffect when you need achieve through in dependecies.

// chatGPT :
// In React, useEffect runs only once when the page first loads. After that, even if the page re-renders, useEffect won’t run again unless something in the dependency array changes.

// If you want useEffect to run again, just add the values you want to track inside the dependency array.

// Memory Leak :
// useEffect(() => {
// // After clean up API call 
// //clean up leakages
// return (() => setName("")
// }
// , [])
// -----------------------------------------------------------------------------------------------------------------------------------------

// What is useRef ?.
//   useEffect(() => {
//         console.log("naaaaaaaaaa", name);
//         inputRef.current = name;
//     }, [name]);

// useRef is a React Hook to create an mutuable references value persists across render without triggering re-render, commonly used for DOM
// access & stored in mutuable value 
// name is a state value, when we updated the state we see the previous value , because its call after re-render this page so before the re-rendered value
//  store in the input.current. But actually its store the current value.


// Persists across renders :
// That value is remembered & not reset even when a component re-renders.

// What is the differences of createRef & useRef ?
// useRef is used in functional component and returns the same references across renders, while createREf is main used in class component
// and create a new reference on every renders.
// ---------------------------------------------------------------------------------------------------------------------------------------
// useContext :
// useContext is a react Hook, allow functional Component read to data from a React Context.
// Its purpose to avoided the props drilling.  Its provided global across part of the component tree.
// Disadvantage :
// The useContext is that whatever the context value change, all component consuming that context will re-render, even if they are using only a small part of the data.
//  THis can lead to unnecessary re-renders and performance
// issue , espically with frequently changing data.

// useContext is a react Hook that allow function components to consume shared global from react context without passing props manually
// through each level of the component tree. Its avoid the props drilling.
// ----------------------------------------------------------------------------------------------------------------------------------------

// Redux :
//  What is Redux ?
//      Redux is a store management library for js , commonly used with React js.
// Redux is used to store & manage application data in one centralized place, so different component can share & update data 
// easily & predictably.

// Why do we need Redux ?
//    State is local to component. We can pass the data component to another component using props.In large application, passing data
// through many component cause props drilling. 
// Redux used to solve this.

// Core principles of Redux:
// 1) Single source of truth :
// The entire application state is stored in one centralized store.
// 2) State is Read only :
// State cannot modified directly, if you want change dispatch an action.
// 3) Changes are made with pure Function (reducer)
// Reducer are pure function that takes previous state and action , & return a new state.
// ----------------------------------------------------------------------------------------------------------------------------------------
// What is useLayoutEffect ?
// useLayoutEffect  is react Hook, it works like useEffect, but its run synchorounoiusly after all DOM mutation(DOM update) & before browswer paint scree
// creen.
// It is best for DOM measurement(width, height , position)