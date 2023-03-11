import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function HomeDetail() {
  const [house, setHouse] = useState(null);
  const { houseId } = useParams();

  const getHouse = async () => {
    try {
      const response = await axios.get(
        `https://wizard-world-api.herokuapp.com/Houses/${houseId}`
      );
      console.log(response.data);
      setHouse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
      getHouse();
    }, [houseId]);

  return (
    <div>
      {house && (
        <div>
          <h1>{house.name}</h1>
          <p>Founded by {house.founder}</p>
          <p>Colours {house.houseColours}</p>
          <p>
            Element: {house.element} | Animal: {house.animal}
          </p>
          <p>Traits of student:</p>
          <ul>
            {house.traits.map((elem) => (
              <li key={elem.id}>{elem.name}</li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}
