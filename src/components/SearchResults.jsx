import { getImageUrl } from '../services/api'
import './SearchResults.css'

const SearchResults = ({ movies, query, onClose, onMovieClick }) => {
    if (!query || movies.length === 0) return null

    return (
        <div className="search-results">
            <div className="search-results__header">
                <h2>Search results for "{query}"</h2>
                <button className="search-results__close" onClick={onClose}>
                    ✕
                </button>
            </div>
            <div className="search-results__grid">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className="search-result-card"
                        onClick={() => onMovieClick && onMovieClick(movie)}
                    >
                        <img
                            src={getImageUrl(movie.poster_path)}
                            alt={movie.title}
                            className="search-result-card__image"
                            onError={(e) => {
                                e.target.src = '/placeholder-movie.svg'
                            }}
                        />
                        <div className="search-result-card__play-overlay">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <div className="search-result-card__info">
                            <h3 className="search-result-card__title">{movie.title}</h3>
                            <p className="search-result-card__overview">
                                {movie.overview?.substring(0, 150)}...
                            </p>
                            <div className="search-result-card__details">
                                <span className="search-result-card__rating">
                                    ⭐ {movie.vote_average?.toFixed(1)}
                                </span>
                                <span className="search-result-card__year">
                                    {new Date(movie.release_date).getFullYear()}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults