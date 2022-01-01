function MovieItem({ id, title, poster_path, release_date }) {
  const API_IMG_URL = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='cell'>
      <a href='/' className='card-movie'>
        <span className='img' style={{ backgroundImage: `url(${API_IMG_URL}${poster_path})` }}></span>
        <span className='info'>
          <span className='title'>{title}</span>
          <span className='year'>{release_date}</span>
        </span>
      </a>
    </div>
  )
}

export default MovieItem
