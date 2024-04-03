import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Planet = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    try {
      const getPlanent = async () => {
        const response = await axios.get(`https://swapi.dev/api/planets/${id}`)
        setStatus(response.status)
        setPlanet(response.data)
      }
      getPlanent();
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, [id]);
  return (
    <>
      {status === 200 ? (
        <div className='card' style={{ width: 600, margin: 'auto', textAlign: 'left' }}>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Name: </b>{planet.name}</li>
              <li className="list-group-item"><b>Diameter: </b>{planet.diameter}</li>
              <li className="list-group-item"><b>Rotation period: </b>{planet.rotation_period}</li>
              <li className="list-group-item"><b>Orbital preiod: </b>{planet.orbital_period}</li>
              <li className="list-group-item"><b>Gravity: </b>{planet.gravity}</li>
              <li className="list-group-item"><b>Population: </b>{planet.population}</li>
              <li className="list-group-item"><b>Climate: </b>{planet.climate}</li>
              <li className="list-group-item"><b>Surface water: </b>{planet.surface_water}</li>
              <li className="list-group-item"><b>Terrain: </b>{planet.terrain}</li>
            </ul>
          </div>
        </div>
      ) : (
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  )
}
