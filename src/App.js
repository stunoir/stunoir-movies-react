import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MoviesHero from './components/MoviesHero'
import MoviesList from './components/MoviesList'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)

  const API_KEY = 'daa03fdcd151c847dbb9e1008f179e84'
  const API_BASE_URL = 'https://api.themoviedb.org/3'

  const API_URLS = {
    latest_movies_url: API_BASE_URL + '/movie/now_playing?api_key=' + API_KEY + '&language=en-US&page=1',
    search_movies_url: API_BASE_URL + '/search/movie?api_key=' + API_KEY + '&language=en-US&page=1',
    top_movies_url: API_BASE_URL + '/movie/top_rated?api_key=' + API_KEY + '&language=en-US&page=1',
  }

  useEffect(() => {
    const fetchListings = async () => {
      try {
        fetch(API_URLS.latest_movies_url)
          .then((response) => response.json())
          .then((listings) => {
            setListings(listings.results)
            setLoading(false)
          })
      } catch (error) {
        // log error
      }
    }
    fetchListings()
  }, [])

  return (
    <div className='App'>
      <Header></Header>
      <main id='maincontent'>
        <MoviesHero></MoviesHero>
        {loading ? <Loader /> : <MoviesList listings={listings}></MoviesList>}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
