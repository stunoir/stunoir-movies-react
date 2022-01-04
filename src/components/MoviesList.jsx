import { useState } from 'react'
import MovieItem from './MovieItem'
import MoviePanel from './MoviePanel'

function MoviesList({ currentPage, totalPages, listingsCount, listings, handlePaging }) {
  const [movieId, setMovieId] = useState(null)

  //== handle pagination in App.js
  const handlePager = (e, direction) => {
    handlePaging(direction)
  }

  const handleOpenPanel = (movieId) => {
    setMovieId(movieId)
  }

  return (
    <>
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
                      {/* prev button */}
                      {currentPage > 1 ? (
                        <button
                          onClick={(e) => {
                            handlePager(e, 'prev')
                          }}
                          type='button'
                          className='btn-page'
                        >
                          <span className='mmt-icon-back-arrow'></span>
                          <span className='show-for-sr'>Previous page</span>
                        </button>
                      ) : (
                        ''
                      )}
                      {/* next button */}
                      {currentPage < totalPages ? (
                        <button
                          onClick={(e) => {
                            handlePager(e, 'next')
                          }}
                          ttype='button'
                          className='btn-page'
                        >
                          <span className='mmt-icon-forward-arrow'></span>
                          <span className='show-for-sr'>Next page</span>
                        </button>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
                {/* listing */}
                <div className='grid-x grid-padding-x small-up-2 medium-up-3 large-up-5 card-container'>
                  {listings.map((movie) => (
                    <MovieItem
                      key={movie.id}
                      id={movie.id}
                      title={movie.title}
                      poster_path={movie.poster_path}
                      release_date={movie.release_date}
                      handleOpenPanel={handleOpenPanel}
                    ></MovieItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {movieId && <MoviePanel movieId={movieId} handleOpenPanel={handleOpenPanel}></MoviePanel>}
    </>
  )
}

export default MoviesList
