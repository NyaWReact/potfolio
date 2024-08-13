import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.scss'
import { Layout } from './components/layout/Layout'
import {About} from './components/about/About'
import { Portfolio } from './components/portfolio/Portfolio'
import { Lab } from './components/lab/Lab'
import { Contact } from './components/contact/Contact'
import { SinglePortfolioProject } from './components/singlePortfolioProject/SinglePortfolioProject'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<About/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/portfolio/:name' element={<SinglePortfolioProject/>}/>
      <Route path='/lab' element={<Lab/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
  ))


  return (
    <RouterProvider router={router}/>
  )
}

export default App
