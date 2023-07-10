
import { Image, NavLink, Stack } from "react-bootstrap"



// useLocation para capturara el pathname 
const Home = () => {

  return (
 
    <div>
      <Stack gap={2} className="col-md-5 mx-auto ">
              <NavLink href="/sport">
            <div className="p-2">Deporte</div>
            <div className="p-2">
            <Image src="https://res.cloudinary.com/deqbqghhq/image/upload/v1687559114/banner_proyectoMongo_jl0ldc.jpg"fluid  />
            </div>
            </NavLink>
        </Stack> 
        <Stack gap={2} className="col-md-5 mx-auto">
        <NavLink href="/education">
            <div className="p-2">Educacion</div>
            <div className="p-2">
            <Image src="https://res.cloudinary.com/deqbqghhq/image/upload/v1687559114/banner_proyectoMongo_jl0ldc.jpg"fluid  />
            </div>
        </NavLink>
        </Stack> 
        <Stack gap={2} className="col-md-5 mx-auto">
        <NavLink href="/jobs">
            <div className="p-2">Oficio</div>
            <div className="p-2">
            <Image src="https://res.cloudinary.com/deqbqghhq/image/upload/v1687559114/banner_proyectoMongo_jl0ldc.jpg"fluid  />
            </div>
            </NavLink>
        </Stack> 
        <Stack gap={2} className="col-md-5 mx-auto">
        <NavLink href="/others">
            <div className="p-2">Otros</div>
            <div className="p-2">
            <Image src="https://res.cloudinary.com/deqbqghhq/image/upload/v1687559114/banner_proyectoMongo_jl0ldc.jpg"fluid  />
            </div>
            </NavLink>
        </Stack> 
       </div>
  
  )
}

export default Home


/* import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridExample() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample; */



















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