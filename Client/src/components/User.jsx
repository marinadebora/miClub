import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfileId, getUsers } from "../redux/thunks"
import { Image } from "react-bootstrap"

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
    <>
      <Image src={img?.imageLogo} width={171} height={180} roundedCircle />
      <Image src={img?.imageFontPage} fluid />
    </>
  )
}

export default User
