function MovieItem({ id, title, poster_path, release_date, handleOpenPanel }) {
  const API_IMG_URL = 'https://image.tmdb.org/t/p/w500'

  //== return nice year format
  const getYear = (date) => {
    const dtRelease = new Date(date)
    const yearRelease = dtRelease.getFullYear()
    return yearRelease
  }

  //== build image
  const getImage = (poster_path) => {
    return poster_path != null ? API_IMG_URL + poster_path : require('../assets/img/layout/empty-poster.jpg')
  }

  //== open info panel
  const openPanel = (e, movieId) => {
    e.preventDefault()
    handleOpenPanel(movieId)
  }

  return (
    <div className='cell'>
      <a
        href='/'
        onClick={(e) => {
          openPanel(e, id)
        }}
        className='card-movie'
      >
        <span className='img' style={{ backgroundImage: `url(${getImage(poster_path)})` }}></span>
        <span className='info'>
          <span className='title'>{title}</span>
          <span className='year'>{release_date ? getYear(release_date) : 'No date'}</span>
        </span>
      </a>
    </div>
  )
}

export default MovieItem
