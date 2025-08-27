import { Toaster } from "react-hot-toast";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom'
import Cart from './components/CartPage.jsx'
import { RouterProvider } from 'react-router-dom'
import store from './Redux/store.jsx'
import {Provider} from 'react-redux'

const approuter = createBrowserRouter([
    {
        path: '/',
        element:<App/>
    } , 

    {
        path:'/cart',
        element:<Cart/>

    }
])

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
    <RouterProvider router={approuter}>
        
    </RouterProvider>
    <Toaster position="top-center" reverseOrder={false} />
    </Provider>
 
)
