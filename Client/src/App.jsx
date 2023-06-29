import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import NavBarHome from './components/Home/NavBarHome.jsx'
import User from './components/User.jsx'
import FooterHome from './components/Home/FooterHome.jsx'
import Jobs from './components/views/Jobs.jsx'
import Others from './components/views/others.jsx'
import Education from './components/views/Education.jsx'
import Sports from './components/views/Sports.jsx'
function App()
{

  return (
    <>
      <NavBarHome />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/user' element={<User />} />
        <Route exact path='/sport' element={<Sports />} />
        <Route exact path='/education' element={<Education />} />
        <Route exact path='/jobs' element={<Jobs />} />
        <Route exact path='/others' element={<Others />} />
      </Routes>
      <FooterHome />
    </>
  )
}

export default App
