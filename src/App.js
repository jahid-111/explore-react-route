
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Main from './layout/Main';
import Friends from './components/Friends';
import FriendDetails from './components/FriendDetails';

function App() {
  const router = createBrowserRouter( [
    {path : "/",
      element: <Main></Main>,
      children: [
        {path : "home", element: <Home></Home> },
        {path : "about", element: <About></About> },
        {path : "contact", element: <Contact></Contact> },
        {path: "friends",
          loader: async ()=> {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <Friends></Friends>}
      ]},
    {path : "/product", element:<Product></Product>},
    {path : "/friend/:friendId" ,
      loader : async ( {params} ) => {
        console.log(params)
        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
      },
    element: <FriendDetails></FriendDetails>},
    {path : "*", element: <div><h1>Status : 404 !Found</h1></div>},
  ] );
  
  return (
    <div className="App">
        <RouterProvider router={router} >  </RouterProvider>
    </div>
  );
}

export default App;
