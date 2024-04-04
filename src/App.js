
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';

function App() {
  const router =createBrowserRouter( [
    {path : "home", element: <Home></Home>},
    {path : "about", element: <About></About> },
    {path : "/contact", element: <Contact></Contact> },
    {path : "/product", element:<Product></Product>},
  ] );


  return (
    <div className="App">
        <RouterProvider router={router} >  </RouterProvider>
    </div>
  );
}

export default App;
