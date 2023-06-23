import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import NavBarHome from './components/Home/NavBarHome.jsx'
import User from './components/User.jsx'
function App()
{

  return (
    <>
      <NavBarHome />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/user' element={<User />} />
      </Routes>
    </>
  )
}

export default App
