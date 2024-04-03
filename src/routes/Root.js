import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { Layout } from './Layout'
import { Index as PlanetIndex } from './planets/Index'
import { Show as PlanetShow } from './planets/Show'
import { NotFound } from './NotFound'

export const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/planets' element={<PlanetIndex/>}/>
            <Route path='/planets/:id' element={<PlanetShow/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
