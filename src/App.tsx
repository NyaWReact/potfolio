import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.scss'
import { Layout } from './components/layout/Layout'
import {About} from './components/about/About'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<About/>}/>
    </Route>
  ))


  return (
    <RouterProvider router={router}/>
  )
}

export default App
