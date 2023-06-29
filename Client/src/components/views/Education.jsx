import { useDispatch, useSelector } from "react-redux"
import { getActivity } from "../../redux/thunks"
import { useEffect } from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Education = () => {
  const activity = useSelector(state=>state.activity)
  const dispatch = useDispatch()
  let activitys = activity.activity.education
  useEffect(() => {
  dispatch(getActivity())
  }, [dispatch])
  console.log(activity)
  return (
    <Row xs={1} md={2} className="g-4">
    {activitys?.map((e, idx) => (
      <Col key={idx}>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{e.activityName}</Card.Title>
            <Card.Text> {e.institution}
{/*             
: 
"matematicas"
address
: 
"calle 25"
category
: 
"educacion"
city
: 
"glew"
daysAndSchedule
: 
['a convenir']
institution
: 
"particular"
phone
: 
['11222555666'] */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  )
}

export default Education
