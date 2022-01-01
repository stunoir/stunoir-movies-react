import MovieItem from './MovieItem'

function MoviesList({ currentPage, totalPages, listingsCount, listings }) {
  return (
    <div className='wrapper-list'>
      <div className='grid-container container-movies'>
        <div className='grid-x grid-padding-x'>
          <div className='medium-12 cell'>
            <div className='wrapper-main'>
              {/* info and pagination */}
              <div className='grid-x grid-padding-x section-results-info'>
                <div className='medium-6 align-self-middle cell'>
                  <p>{listingsCount} movies found</p>
                </div>
                <div className='medium-6 cell'>
                  <div className='block-pager'>
                    <p className='results-page-info'>
                      Pages {currentPage} of {totalPages}
                    </p>
                    <button type='button' className='btn-page'>
                      <span className='mmt-icon-back-arrow'></span>
                      <span className='show-for-sr'>Previous page</span>
                    </button>
                    <button type='button' className='btn-page'>
                      <span className='mmt-icon-forward-arrow'></span>
                      <span className='show-for-sr'>Next page</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* listing */}
              <div className='grid-x grid-padding-x small-up-2 medium-up-3 large-up-5 card-container'>
                {listings.map((movie) => (
                  <MovieItem
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                  ></MovieItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesList
