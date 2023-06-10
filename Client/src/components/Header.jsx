import { useSelector } from "react-redux"

const Header = () => {
  const user = useSelector(state=>state.user)
  return (
    <header>
      <h1>Redux toolkit examole</h1>
      <ul>
        <li>Name:{user.name} </li>
        <li>Email:{user.email} </li>
        <li>Username: {user.userName}</li>
      </ul>
    </header>
  )
}

export default Header
