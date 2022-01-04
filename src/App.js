import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MoviesHero from './components/MoviesHero'
import MoviesList from './components/MoviesList'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)
  const [listingsCount, setListingsCount] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [query, setQuery] = useState('')
  const [searchUrl, setSearchUrl] = useState('')

  const API_KEY = 'daa03fdcd151c847dbb9e1008f179e84'
  const API_BASE_URL = 'https://api.themoviedb.org/3'

  const API_URLS = {
    latest_movies_url: API_BASE_URL + '/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1',
    search_movies_url: API_BASE_URL + '/search/movie?api_key=' + API_KEY + '&language=en-US&page=1',
    top_movies_url: API_BASE_URL + '/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1',
  }

  useEffect(() => {
    fetchListings(API_URLS.latest_movies_url)
    // eslint-disable-next-line
  }, [])

  //== fetch the movies from the API using the passed URL
  const fetchListings = (url) => {
    try {
      fetch(url)
        .then((response) => response.json())
        .then((listings) => {
          setCurrentPage(listings.page)
          setTotalPages(listings.total_pages)
          setListingsCount(listings.total_results)
          setListings(listings.results)
          setLoading(false)
        })
      setSearchUrl(url)
    } catch (error) {
      // log error
    }
  }

  //== fetch searched movies
  const handleSearch = () => {
    if (query !== '') fetchListings(`${API_URLS.search_movies_url}&query=${query.trim()}`)
    setQuery('')
  }

  //== fetch Top Rated movies
  const handleTopMovies = () => {
    fetchListings(`${API_URLS.top_movies_url}`)
  }

  //== handle pagination
  const handlePaging = (direction) => {
    let page = currentPage
    if (direction === 'prev') {
      page = page - 1
      if (page >= 1) {
        loadPagedData(page)
      }
    }
    if (direction === 'next') {
      page = page + 1
      if (page <= totalPages) {
        loadPagedData(page)
      }
    }
  }

  //== load pagination URL to fetch data
  const loadPagedData = (newpage) => {
    let url = updateQSParameter(searchUrl, 'page', newpage)
    fetchListings(url)
  }

  //== replace QS parameter in URL
  const updateQSParameter = (url, key, value) => {
    let re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i')
    let sep = url.indexOf('?') !== -1 ? '&' : '?'
    if (url.match(re)) {
      return url.replace(re, '$1' + key + '=' + value + '$2')
    } else {
      return url + sep + key + '=' + value
    }
  }

  return (
    <div className='App'>
      <Header handleSearch={handleSearch} handleTopMovies={handleTopMovies} query={query} setQuery={setQuery}></Header>
      <main id='maincontent'>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <MoviesHero listings={listings}></MoviesHero>
            <MoviesList
              currentPage={currentPage}
              totalPages={totalPages}
              listingsCount={listingsCount}
              listings={listings}
              handlePaging={handlePaging}
            ></MoviesList>
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
