import React, { useState, useEffect } from 'react'
import axios from './axios'
import styles from './Row.module.css'
const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([])
  console.log(styles)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)

      return request
    }
    fetchData()
    // return () => {
    //   second
    // }
  }, [fetchUrl])

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.row_posters}>
        {/* title */}
        {movies.map((movie, index) => {
          return (
            <img
              className={styles.row_poster}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.original_name}
              key={movie.id}
            />
          )
        })}
        {/* container -> poster */}
      </div>
    </>
  )
}

export default Row
