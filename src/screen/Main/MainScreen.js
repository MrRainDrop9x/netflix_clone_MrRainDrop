import React from 'react'
import requests from '../../requests'
import Row from '../../components/row/Row'
import Banner from '../../components/banner/Banner'
import Navbar from '../../components/navbar/Navbar'
import './mainscreen.css'
function MainScreen() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className='wrapper_rows'>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Documantary' fetchUrl={requests.fetchDocumantaries} />
      </div>
    </>
  )
}

export default MainScreen
