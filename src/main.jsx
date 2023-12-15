import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubinfoLoader } from './components/Github/Github.jsx'


//REACT- ROUTER =>
/*It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page*/
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {path:"",
//        element:<Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
      
//     ]
//   }
// ])

//SECOND METHOD OF DEFINIFG THE ROUTE-OBJECT
/* Passing the childeren directly in the route with the path and element*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={githubinfoLoader}
      path='github' 
      element={<Github/>}
      />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
