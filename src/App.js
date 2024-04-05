
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Main from './layout/Main';
import Friends from './components/Friends';

function App() {
  const router =createBrowserRouter( [
    {path : "/",
      element: <Main></Main>,
      children: [
        {path : "home", element: <Home></Home> },
        {path : "about", element: <About></About> },
        {path : "contact", element: <Contact></Contact> },
        {path: "friends", element: <Friends></Friends>}
      ]},
    {path : "/product", element:<Product></Product>},
  ] );


  return (
    <div className="App">
        <RouterProvider router={router} >  </RouterProvider>
    </div>
  );
}

export default App;
