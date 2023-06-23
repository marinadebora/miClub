import { Image, Stack } from "react-bootstrap"

const Home = () => {
  return (
   /*  <Stack gap={3}>
      <div className="p-2">First item</div>
      <div className="p-2">Second item</div>
      <div className="p-2">Third item</div>
    </Stack> */
    <div>
        <Stack gap={2} className="col-md-10 mx-auto">
            <div className="p-2">
            <Image src="https://res.cloudinary.com/deqbqghhq/image/upload/v1687559114/banner_proyectoMongo_jl0ldc.jpg"fluid  />
            </div>
            <div className="p-2">contenido de la pagina</div>
        </Stack>
    
    </div>
  
  )
}

export default Home






















/* import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// pagina https://jasonwatmore.com/post/2022/06/16/react-redux-toolkit-fetch-data-in-async-action-with-createasyncthunk
import { userActions } from '_store';

export { Home };

function Home() {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    const { users } = useSelector(x => x.users);

    useEffect(() => {
        dispatch(userActions.getAll());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <h1>Hi {authUser?.firstName}!</h1>
            <p>You re logged in with React 18 + Redux & JWT!!</p>
            <h3>Users from secure api end point:</h3>
            {users.length &&
                <ul>
                    {users.map(user =>
                        <li key={user.id}>{user.firstName} {user.lastName}</li>
                    )}
                </ul>
            }
            {users.loading && <div className="spinner-border spinner-border-sm"></div>}
            {users.error && <div className="text-danger">Error loading users: {users.error.message}</div>}
        </div>
    );
}
 */