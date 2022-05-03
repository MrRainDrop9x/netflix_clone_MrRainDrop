import React, { useState, useEffect, useContext } from 'react'
import axios from '../../axios'
import { globalContext } from '../../globalContext'
import requests from '../../requests'
import styles from './Banner.module.css'

function Banner() {
  const { base_url } = useContext(globalContext)

  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      let random = Math.floor(Math.random() * request.data.results.length)
      setMovie(request.data.results[random])
    }

    fetchData()
  }, [])
  // function truncate(str, lettets) {
  //   return str?.length > lettets ? str.substr(0, lettets - 1) + '...' : str
  // }
  return (
    <>
      <header
        className={styles.banner}
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
          backgroundPosition: 'center center',
        }}
      >
        <div className={styles.bannerContents}>
          {/* title  */}
          <h1 className={styles.bannerTitle}>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          {/* 2 buttons */}
          <div className={styles.bannerButtons}>
            <button className={styles.bannerButton}>Play</button>
            <button className={styles.bannerButton}>My List</button>
          </div>
          {/* description */}
          <div className={styles.bannerDescription}>{movie.overview}</div>
        </div>

        <div className={styles.bannerFadeBottom}></div>
      </header>
    </>
  )
}

export default Banner
