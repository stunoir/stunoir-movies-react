function MoviesHero({ listings }) {
  const API_IMG_URL = 'https://image.tmdb.org/t/p/w500'

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
    <div className='wrapper-hero'>
      {listings.slice(0, 1).map((movie) => (
        <div key={movie.id}>
          <div className='bg-img' style={{ backgroundImage: `url(${getBackdropImage(movie.backdrop_path)})` }}></div>
          <div className='grid-container'>
            <div className='grid-x grid-padding-x'>
              <div className='medium-10 large-8 cell'>
                <div className='content-hero'>
                  <p className='highlite'>List highlite</p>
                  <h1>{movie.title}</h1>
                  <p className='info'>{truncateString(movie.overview, 165)}</p>
                  <p className='date'>Released: {movie.release_date ? getYear(movie.release_date) : 'No date'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MoviesHero
