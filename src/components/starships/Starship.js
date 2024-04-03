import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';

export const Starship = () => {
  const { id } = useParams();
  const [startship, setStarship] = useState();
  const [status, setStatus] = useState(0);

  useEffect(() => {
    try {
      const getStarship = async () => {
        const response = await axios({
          method: 'get',
          url: `https://swapi.dev/api/starships/${id}`
        });
        setStatus(response.status);
        setStarship(response.data);
      }
      getStarship();
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, [id]);

  return (
    <>
      {status === 200 ? (
        <div className="card text-center">
          <div className="card-header">
            {startship.name}
          </div>
          <div className="card-body">
            <h5 className="card-title">{`${startship.name} - ${startship.model}`}</h5><br></br>
            <span className="card-text">Starship class: {startship.starship_class}.</span><br></br>
            <span className="card-text">Manufacturer: {startship.manufacturer}.</span><br></br>
            <span className="card-text">Cost in credits: {startship.cost_in_credits}.</span><br></br>
            <span className="card-text">Length: {startship.length}.</span><br></br>
            <span className="card-text">Crew: {startship.crew}.</span><br></br>
            <span className="card-text">Passengers: {startship.passengers}.</span><br></br>
            <span className="card-text">Max atmosphering speed: {startship.max_atmosphering_speed}.</span><br></br>
            <span className="card-text">Hyperdrive rating: {startship.hyperdrive_rating}.</span><br></br>
            <span className="card-text">MGLT: {startship.MGLT}.</span><br></br>
            <span className="card-text">Cargo capacity: {startship.cargo_capacity}.</span><br></br>
            <span className="card-text">Consumables: {startship.consumables}.</span><br></br><br></br>
            <NavLink to='/starships' className='btn btn-outline-primary'>Starships</NavLink>
          </div>
          <div className="card-footer text-body-secondary">
            <span className="card-text">Created: {startship.created}.</span><br></br>
            <span className="card-text">Edited: {startship.edited}.</span>
          </div>
        </div>
      ) : (
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </>
  )
}
