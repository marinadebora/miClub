import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
//import { addUser } from "../redux/userSlice"
import { getUsers } from "../redux/thunks"

const User = () => {
  const users = useSelector(state=>state.user)
  console.log("users"+ users.data)
  const dispatch = useDispatch()
  useEffect(() => {
  dispatch(getUsers())
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default User
