import { useState, useRef, useEffect } from 'react'
import { getImageUrl } from '../services/api'
import './MovieRow.css'

const MovieRow = ({ title, movies, onMovieClick }) => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const rowRef = useRef(null)

    // Track scroll position
    useEffect(() => {
        const container = rowRef.current
        if (!container) return

        const handleScroll = () => {
            setScrollPosition(container.scrollLeft)
        }

        container.addEventListener('scroll', handleScroll)
        return () => container.removeEventListener('scroll', handleScroll)
    }, [])

    const scroll = (direction) => {
        const container = rowRef.current
        const scrollAmount = 300

        if (direction === 'left') {
            container.scrollLeft -= scrollAmount
        } else {
            container.scrollLeft += scrollAmount
        }

        // Update scroll position after a short delay to ensure scroll has completed
        setTimeout(() => {
            setScrollPosition(container.scrollLeft)
        }, 100)
    }

    // Early return if no movies
    if (!movies || movies.length === 0) {
        return (
            <div className="movie-row">
                <h2 className="movie-row__title">{title}</h2>
                <p style={{ color: 'white', padding: '20px' }}>No movies available</p>
            </div>
        )
    }

    return (
        <div className="movie-row">
            <h2 className="movie-row__title">{title}</h2>
            <div className="movie-row__container">
                <button
                    className="movie-row__arrow movie-row__arrow--left"
                    onClick={() => scroll('left')}
                    style={{ display: scrollPosition > 0 ? 'block' : 'none' }}
                    aria-label="Scroll left"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>

                <div className="movie-row__movies" ref={rowRef}>
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="movie-card"
                            onClick={() => onMovieClick && onMovieClick(movie)}
                        >
                            <img
                                src={getImageUrl(movie.poster_path)}
                                alt={movie.title}
                                className="movie-card__image"
                                onError={(e) => {
                                    e.target.src = '/placeholder-movie.svg'
                                }}
                            />
                            <div className="movie-card__play-overlay">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="movie-card__info">
                                <h3 className="movie-card__title">{movie.title}</h3>
                                <div className="movie-card__details">
                                    <span className="movie-card__rating">
                                        ⭐ {movie.vote_average?.toFixed(1)}
                                    </span>
                                    <span className="movie-card__year">
                                        {new Date(movie.release_date).getFullYear()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="movie-row__arrow movie-row__arrow--right"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default MovieRow