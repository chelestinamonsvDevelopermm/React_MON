import './style.css'
// step-2
import ReactDom from 'react-dom/client'

// step-4
import React from 'react';





// step-1
const rootElement = document.querySelector("root"); 


// step-3
// react-dom --->client APIs ----> createRoot
// const root = createRoot(domNode, options?)
const root = ReactDOM.createRoot(rootElement);


// step-5
// const element = createElement(type, props, ...children)
const heading = React.createElement("h1",null,"Hola cómo estás")
react-dom --->client APIs ----> createRoot
// const root = createRoot(domNode, options?)


step'
// react-dom -----> client APIs -----> root.render(reactNode)
// root.render(<App />);
root.render()


