import { useEffect, useState } from 'react'

function MoviePanel({ movieId, handleOpenPanel }) {
  const API_KEY = 'daa03fdcd151c847dbb9e1008f179e84'
  const API_BASE_URL = 'https://api.themoviedb.org/3'
  const API_IMG_URL = 'https://image.tmdb.org/t/p/w500'

  const [loading, setLoading] = useState(true)
  const [credits, setCredits] = useState(null)
  const [details, setDetails] = useState(null)

  const getAPIData = async (url) => {
    const response = await fetch(url)
    if (response.status !== 200) throw new Error('Cannot get data')
    const data = await response.json()
    return data
  }

  useEffect(() => {
    const movieCreditsURL = API_BASE_URL + '/movie/' + movieId + '/credits?api_key=' + API_KEY + '&language=en-US'
    const movieURL = API_BASE_URL + '/movie/' + movieId + '?api_key=' + API_KEY + '&language=en-US'

    Promise.all([getAPIData(movieCreditsURL), getAPIData(movieURL)]).then(([credits, details]) => {
      setCredits(credits)
      setDetails(details)
      setLoading(false)
    })
    // eslint-disable-next-line
  }, [])

  //== open info panel
  const openPanel = (e, movieId) => {
    e.preventDefault()
    handleOpenPanel(movieId)
  }

  //== return nice year format
  const getYear = (date) => {
    const dtRelease = new Date(date)
    const yearRelease = dtRelease.getFullYear()
    return yearRelease
  }

  //== truncate a string based on length required
  const truncateString = (s, n) => {
    return s.length > n ? s.substr(0, n - 1) + '...' : s
  }

  //== build backdrop
  const getBackdropImage = (backdrop_path) => {
    return backdrop_path != null ? API_IMG_URL + backdrop_path : require('../assets/img/layout/empty-back.jpg')
  }

  return (
    <>
      {!loading && (
        <div
          onClick={(e) => {
            openPanel(e, null)
          }}
          className='panel-movie-info'
        >
          <div className='content'>
            <div className='grid-x grid-padding-x'>
              <div className='medium-12 cell'>
                <button
                  onClick={(e) => {
                    openPanel(e, null)
                  }}
                  className='btn-close'
                  type='button'
                >
                  <span className='mmt-icon-back-arrow'></span> back
                </button>
                <div className='panel-details'>
                  <div className='panel-details'>
                    <h3 className='movie-title'>{details.title}</h3>
                    <p className='movie-release'>
                      {getYear(details.release_date)} | {details.runtime} mins
                    </p>
                    <div
                      className='movie-img'
                      style={{ backgroundImage: `url(${getBackdropImage(details.backdrop_path)})` }}
                    ></div>
                    <div className='movie-teaser'>
                      <p>{truncateString(details.overview, 400)}</p>
                      <ul>
                        <li>
                          <strong>Director</strong>:&nbsp;
                          {credits.crew
                            .filter((item) => item.job === 'Director')
                            .map((item, i) => [i > 0 && ', ', <span key={item.id}>{item.name}</span>])}
                        </li>
                        {credits.cast.length > 0 && (
                          <li>
                            <strong>Cast</strong>:&nbsp;
                            {credits.cast
                              .slice(0, 4)
                              .map((item, i) => [i > 0 && ', ', <span key={item.id}>{item.name}</span>])}
                          </li>
                        )}
                        {details.genres.length > 0 && (
                          <li>
                            <strong>Genre</strong>:&nbsp;
                            {details.genres.map((item, i) => [i > 0 && ', ', <span key={item.id}>{item.name}</span>])}
                          </li>
                        )}
                        <li>
                          <strong>IMDB rating</strong>: {details.vote_average}/10
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MoviePanel
