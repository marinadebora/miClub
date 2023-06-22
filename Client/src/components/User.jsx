import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfileId, getUsers } from "../redux/thunks"

const User = () =>
{
  const users = useSelector(state => state.user)
  const profile = useSelector(state => state.profile)
  const id = users.user[0]?.profile[0]
  const img = profile.profile[0]
  const dispatch = useDispatch()

  useEffect(() =>
  {
    dispatch(getUsers())
    dispatch(getProfileId(id))
  }, [dispatch, id])

  return (
    <div>
      <img src={img?.imageLogo} alt="" /><img src={img?.imageFontPage} alt="" />
      <h1>hola</h1>
    </div>
  )
}

export default User
