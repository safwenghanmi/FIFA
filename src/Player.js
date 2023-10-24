import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const Player = ({ player}) => {
    console.log(player)
  return (
    <div>
        
   {   <Card style={{ width: '18rem' }}>
        <Card.Img className='pth' src={player.Image} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>
           <p> Age: {player.age}</p>
           <p> Nationality: {player.nationality}</p>
           <p>Team: {player.team}</p>
           <p> Number: {player.number}</p>
          </Card.Text>
          
        </Card.Body>
      </Card>  }
    </div>
  )
}

export default Player; 