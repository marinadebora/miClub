import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
//import { addUser } from "../redux/userSlice"
import { getProfileId, getUsers } from "../redux/thunks"

const User = () => {
  const users = useSelector(state=>state.user)
  const profile = useSelector(state=>state.profile)
let id =users.user[0]?.profile[0]
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getUsers())
  dispatch(getProfileId(id))
  }, [dispatch,id])
  console.log(profile.profile)
  return (
    <div>
      <img src={profile.profile.imageLogo} alt="" /><img src={profile.profile.imageFontPage} alt="" />
      <h1>hola</h1>
    </div>
  )
}

export default User
