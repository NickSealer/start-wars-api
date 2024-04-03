import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export const Starships = () => {
  const [starships, setStarships] = useState();
  const [status, setStatus] = useState(0);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const getStarships = async () => {
        const response = await axios({
          method: 'get',
          url: 'https://swapi.dev/api/starships',
          params: {
            page: page
          }
        });
        setStatus(response.status);
        setStarships(response.data);
        setNextPage(response.data.next);
        navigate(`/starships?page=${page}`)
      }
      getStarships();
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
            <table className='table table-hover'>
              <thead className='table-dark'>
                <tr>
                  <th>Name</th>
                  <th>Model</th>
                  <th>Class</th>
                  <th>Crew</th>
                  <th>Passengers</th>
                  <th>Consumables</th>
                </tr>
              </thead>
              <tbody>
                {
                  starships.results.map((startship, index) => {
                    let startshipId = getId(startship.url);

                    return (
                      <tr key={startshipId}>
                        <td>
                          <NavLink to={`/starships/${startshipId}`}>{startship.name}</NavLink>
                        </td>
                        <td>{startship.model}</td>
                        <td>{startship.startship_class}</td>
                        <td>{startship.crew}</td>
                        <td>{startship.passengers}</td>
                        <td>{startship.consumables}</td>
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
