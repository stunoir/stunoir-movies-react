function MoviesHero({ image, title, summary, releasedDate }) {
  return (
    <div className='wrapper-hero'>
      <div
        className='bg-img'
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg)` }}
      ></div>
      <div className='grid-container'>
        <div className='grid-x grid-padding-x'>
          <div className='medium-10 large-8 cell'>
            <div className='content-hero'>
              <p className='highlite'>List highlite</p>
              <h1>Spider-Man: No Way Home</h1>
              <p className='info'>
                Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a
                super-hero. When he asks for help from Doctor Strange the st…
              </p>
              <p className='date'>Released: 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesHero
