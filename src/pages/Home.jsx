import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [houses, setHouses] = useState([]);

  const getHouses = async () => {
    try {
      const response = await axios.get('https://wizard-world-api.herokuapp.com/houses');
      setHouses(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHouses()
  }, [])

  return (
    <div>
      <h1>Hogwarts houses</h1>
      {houses.map(elem => {
        return (
          <div key={elem.id}>
            <h2>{elem.name}</h2>
            <p>{elem.founder}</p>
            <Link to={`/houses/${elem.id}`}>See House</Link>

          </div>
        )
      })}
    </div>
  )
}

export default Home;