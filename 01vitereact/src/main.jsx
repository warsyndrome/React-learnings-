import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>Custom App</div>
//   );
// }

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

// const anotherElement = {
  
// }

const anotheruser = 'chai aur hehehe'

const reactElement = React.createElement(
  'a' ,
  {href: 'https://google.com', target:'_blank'},
  'click me to visit google',
  anotheruser
)



ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
