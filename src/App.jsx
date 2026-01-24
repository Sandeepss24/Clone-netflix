import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import MovieRow from './components/MovieRow'
import SearchResults from './components/SearchResults'
import TrailerModal from './components/TrailerModal'
import Footer from './components/Footer'
import { fetchMovies, searchMovies } from './services/api'

function App() {
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [movieCategories, setMovieCategories] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [allMovies, setAllMovies] = useState([]) // Store all movies for random selection
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false)

  useEffect(() => {
    const loadMovies = async () => {
      try {

        // Fetch different categories of movies
        const [trending, popular, topRated, upcoming] = await Promise.all([
          fetchMovies('trending'),
          fetchMovies('popular'),
          fetchMovies('top_rated'),
          fetchMovies('upcoming')
        ])



        // Set featured movie randomly from all available movies
        const allMoviesArray = [
          ...trending.results,
          ...popular.results,
          ...topRated.results,
          ...upcoming.results
        ]

        setAllMovies(allMoviesArray) // Store for later use

        if (allMoviesArray.length > 0) {
          // Get a random movie for the hero banner
          const randomIndex = Math.floor(Math.random() * allMoviesArray.length)
          setFeaturedMovie(allMoviesArray[randomIndex])
        }

        // Set movie categories
        const categories = [
          { title: 'Trending Now', movies: trending.results },
          { title: 'Popular', movies: popular.results },
          { title: 'Top Rated', movies: topRated.results },
          { title: 'Upcoming', movies: upcoming.results }
        ]

        setMovieCategories(categories)
      } catch (error) {
        console.error('Error loading movies:', error)
      }
    }

    loadMovies()
  }, [])

  const handleSearch = async (query) => {
    setIsSearching(true)
    setSearchQuery(query)

    try {
      const results = await searchMovies(query)
      setSearchResults(results.results || [])
    } catch (error) {
      console.error('Error searching movies:', error)
      setSearchResults([])
    }
  }

  const handleCloseSearch = () => {
    setIsSearching(false)
    setSearchQuery('')
    setSearchResults([])
  }

  // Function to change featured movie (for testing - can be removed in production)
  const changeFeatureMovie = () => {
    if (allMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * allMovies.length)
      setFeaturedMovie(allMovies[randomIndex])
    }
  }

  // Handle movie click to show trailer
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie)
    setIsTrailerModalOpen(true)
  }

  // Close trailer modal
  const closeTrailerModal = () => {
    setIsTrailerModalOpen(false)
    setSelectedMovie(null)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />

      {isSearching ? (
        <SearchResults
          movies={searchResults}
          query={searchQuery}
          onClose={handleCloseSearch}
          onMovieClick={handleMovieClick}
        />
      ) : (
        <>
          {featuredMovie && (
            <Hero
              key={featuredMovie.id}
              movie={featuredMovie}
              onPlayClick={handleMovieClick}
            />
          )}
          {/* Test button - remove in production */}
          <button
            onClick={changeFeatureMovie}
            style={{
              position: 'fixed',
              top: '80px',
              right: '20px',
              background: '#e50914',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '4px',
              cursor: 'pointer',
              zIndex: 1000,
              fontSize: '12px'
            }}
          >
            🎲 Random Hero
          </button>
          <div className="movie-rows">
            {movieCategories.map((category, index) => (
              <MovieRow
                key={index}
                title={category.title}
                movies={category.movies}
                onMovieClick={handleMovieClick}
              />
            ))}
          </div>
          <Footer />
        </>
      )}

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerModalOpen}
        onClose={closeTrailerModal}
        movie={selectedMovie}
      />
    </div>
  )
}

export default App
