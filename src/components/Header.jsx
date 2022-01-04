import Logo from '../assets/img/layout/logo.png'

function Header({ query, setQuery, handleSearch, handleTopMovies }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <header className='wrapper-header'>
      <a className='skip-to-content-link' href='#maincontent'>
        Skip to main content
      </a>

      <div className='grid-container'>
        <div className='grid-x grid-padding-x'>
          <div className='large-2 medium-4 small-5 align-self-middle cell'>
            <a className='logo' href='/'>
              <img alt='Stunoir Movies home' src={Logo} />
            </a>
          </div>
          <div className='large-6 medium-4 small-1 text-right cell'>
            <button className='btn-main btn-toprated hide-for-small-only' onClick={handleTopMovies}>
              Top Rated
            </button>
          </div>
          <div className='large-4 medium-4 small-6 cell'>
            {/* search form */}
            <form onSubmit={handleSubmit} className='form-search'>
              <label htmlFor='txtSearchInput' className='show-for-sr'>
                Search for a movie
              </label>
              <input
                id='txtSearchInput'
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder='Search here...'
                type='text'
              />
              <button id='cmdSearch' type='submit' className='btn-search'>
                <span className='mmt-icon-search'></span>
                <span className='show-for-sr'>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
