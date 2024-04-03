import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export const Planets = () => {
  const [planets, setPlanets] = useState();
  const [status, setStatus] = useState(0);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getPlanets = async () => {
        const response = await axios.get(
          'https://swapi.dev/api/planets', {
          params: {
            page: page
          }
        }
        );
        setStatus(response.status);
        setPlanets(response.data);
        setNextPage(response.data.next);
        navigate(`/planets?page=${page}`)
      }
      getPlanets();
    } catch (error) {
      alert(`Error: ${error}`)
    }
  }, [page, navigate]);

  function getId(url) {
    let id = url.match(/\d/g).join('');
    return id;
  }

  const handleNextPage = () => {
    if (nextPage !== null) {
      setPage(page + 1);
    } else {
      alert('You have reached the last page.')
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <>
      {status === 200 ? (
        <div className='py-5'>
          <div className='table-responsive'>
            <table className='table table-hover table-striped'>
              <thead className='table-primary'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Climate</th>
                  <th>Terrain</th>
                  <th>Population</th>
                </tr>
              </thead>
              <tbody>
                {
                  planets.results.map((planet) => {
                    let planetId = getId(planet.url);

                    return (
                      <tr key={planetId}>
                        <td>{planetId}</td>
                        <td>
                          <NavLink to={`/planets/${planetId}`}>{planet.name}</NavLink>
                        </td>
                        <td>{planet.climate}</td>
                        <td>{planet.terrain}</td>
                        <td>{planet.population}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>

          <div className='pagination'>
            <button className='btn btn-outline-primary' onClick={handlePreviousPage}>Previous</button>
            <button className='btn btn-outline-primary' onClick={handleNextPage}>Next</button>
          </div>
        </div>
      ) : (
        <div className='py-5'>
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  )
}
