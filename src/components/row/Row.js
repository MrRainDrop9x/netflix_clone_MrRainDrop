import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import styles from './Row.module.css'
import YoutubeEmbed from '../youtubeEmbed/Youtube'
import movieTrailer from 'movie-trailer'
const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [trailerCurrent, setTrailerCurrent] = useState('')
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

  const handleShow = currentMovieName => {
    setTrailerCurrent(currentMovieName)
    movieTrailer(currentMovieName)
      .then(url => {
        let urlQuery = new URL(url).search
        const urlParams = new URLSearchParams(urlQuery)
        setTrailerUrl(urlParams.get('v'))
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.row_posters}>
        {/* title */}
        {movies.map((movie, index) => {
          let currentMovieName =
            movie.name || movie.original_title || title || ''
          if (movie.poster_path && movie.backdrop_path) {
            return (
              <img
                onClick={() => {
                  if (trailerUrl && currentMovieName === trailerCurrent) {
                    setTrailerUrl('')
                  } else handleShow(currentMovieName)
                }}
                className={`${styles.row_poster} ${
                  isLargeRow && styles.row_posterLarge
                }`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.original_name}
                key={movie.id}
              />
            )
          } else {
            return
          }
        })}
      </div>
      {trailerUrl && <YoutubeEmbed embedId={trailerUrl} />}
    </>
  )
}

export default Row
