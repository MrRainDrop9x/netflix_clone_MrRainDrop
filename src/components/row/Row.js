import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import styles from './Row.module.css'
import YoutubeEmbed from '../youtubeEmbed/Youtube'
import movieTrailer from 'movie-trailer'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
// import required modules
import { Navigation } from 'swiper'
// REACT-ICONS FONTAWEASOME
import './overrideSwipejs.css'
import { FaRegHeart } from 'react-icons/fa'
const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')
  const [trailerCurrent, setTrailerCurrent] = useState('')

  useEffect(() => {
    // eslint-disable-next-line
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
    <div className={`${styles.wrapperRow} thumbSection`}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.arrowHeader}>
          <div className={styles.seeAllLink}>Explore All</div>
          <div className={styles.iconArrow}></div>
        </div>
      </div>
      <div className='thumbTiles swiper-container'>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          pagination={{ clickable: true }}
          freeMode
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              spaceBetween: 0,
              slidesPerGroup: 1,
              speed: 1000,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2.5,
              spaceBetween: 0,
              slidesPerGroup: 2,
              speed: 500,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              slidesPerGroup: 3,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 10,
              slidesPerGroup: 4,
            },
          }}
        >
          {movies.map((movie, index) => {
            let currentMovieName =
              movie.name || movie.original_title || title || ''
            if (movie.poster_path && movie.backdrop_path) {
              return (
                <SwiperSlide key={movie.id}>
                  <div>
                    <img
                      style={{ zIndex: '1000' }}
                      className={styles.row_poster}
                      src={`${base_url}${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                      }`}
                      alt={movie.original_title}
                    />
                    <div
                      className={styles.overlaySwiper}
                      onClick={() => {
                        if (trailerUrl && currentMovieName === trailerCurrent) {
                          setTrailerUrl('')
                        } else handleShow(currentMovieName)
                      }}
                    >
                      <p className={styles.titleOfFilm}>
                        {movie.title || movie.name}
                      </p>
                      <FaRegHeart
                        className={styles.iconHeart}
                        style={{
                          position: 'absolute',
                          top: '4px',
                          left: '4px',
                          color: 'white',
                          fontSize: '1.2rem',
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              )
            } else {
              return ''
            }
          })}
        </Swiper>
      </div>

      {trailerUrl && <YoutubeEmbed embedId={trailerUrl} />}
    </div>
  )
}

export default Row
