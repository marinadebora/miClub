import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  getUsers } from "../../redux/thunks"
import { Image } from "react-bootstrap"
const ProfileUser = () => {
  const users = useSelector(state => state.user)
  const dispatch = useDispatch()
let user = users.user[0]
  useEffect(() =>
  {
    dispatch(getUsers())
  }, [dispatch])
console.log(user)
  return (
    <div>
      <Image src={user.profilePhoto[0]} width={171} height={180} roundedCircle />
    </div>
  )
}

export default ProfileUser
