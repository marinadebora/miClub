import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import NavBarHome from './components/Home/NavBarHome.jsx'
import FooterHome from './components/Home/FooterHome.jsx'
import Jobs from './components/views/Jobs.jsx'
import Others from './components/views/others.jsx'
import Education from './components/views/Education.jsx'
import Sports from './components/views/Sports.jsx'
import ProfileUser from './components/profileUser.jsx/ProfileUser.jsx'
function App()
{

  return (
    <>
      <NavBarHome />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/perfil' element={<ProfileUser />} />
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
