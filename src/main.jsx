import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import MainHome from './MainHome.jsx'
import Todo from './pages/Todo.jsx'
import Currency from './pages/Currency.jsx'
import Authlayout from './Authlayout.jsx'
import Pass from './pages/Password.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<MainHome/>
      },
      {
        path:'/login',
        element:(
          <Authlayout authentication={false}>
            <Login/>
          </Authlayout>
        )
      },
      {
        path:'/sign-up',
        element:(
          
            <Signup/>
        )
      },
      {
        path:'/products',
        element:(
          <Authlayout authentication>
            <Todo/>
          </Authlayout>
        )
      },
      {
        path:'/password',
        element:(
          <Authlayout authentication>
            <Pass/>
          </Authlayout>
        )
      },
      {
        path:'/services',
        element:(
          <Authlayout authentication>
            <Currency/>
          </Authlayout>
        )
      },
    ]
    

    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
