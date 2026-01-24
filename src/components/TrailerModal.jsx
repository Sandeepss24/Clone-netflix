import { useState, useEffect } from 'react'
import Modal from './Modal'
import { getMovieTrailer } from '../services/api'
import './TrailerModal.css'

const TrailerModal = ({ isOpen, onClose, movie }) => {
    const [trailerKey, setTrailerKey] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (isOpen && movie) {
            loadTrailer()
        }
    }, [isOpen, movie])

    const loadTrailer = async () => {
        setLoading(true)
        setError(null)
        setTrailerKey(null)

        try {
            const trailer = await getMovieTrailer(movie.id)
            if (trailer) {
                setTrailerKey(trailer)
            } else {
                setError('No trailer available for this movie')
            }
        } catch (err) {
            console.error('Error loading trailer:', err)
            setError('Failed to load trailer')
        } finally {
            setLoading(false)
        }
    }

    const handleClose = () => {
        setTrailerKey(null)
        setError(null)
        onClose()
    }

    if (!movie) return null

    return (
        <Modal isOpen={isOpen} onClose={handleClose}>
            <div className="trailer-modal">
                <div className="trailer-modal__header">
                    <h2 className="trailer-modal__title">{movie.title}</h2>
                    <div className="trailer-modal__info">
                        <span className="trailer-modal__rating">
                            ⭐ {movie.vote_average?.toFixed(1)}
                        </span>
                        <span className="trailer-modal__year">
                            {new Date(movie.release_date).getFullYear()}
                        </span>
                    </div>
                </div>

                <div className="trailer-modal__content">
                    {loading && (
                        <div className="trailer-modal__loading">
                            <div className="loading-spinner"></div>
                            <p>Loading trailer...</p>
                        </div>
                    )}

                    {error && (
                        <div className="trailer-modal__error">
                            <p>{error}</p>
                            <div className="trailer-modal__fallback">
                                <img
                                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                    alt={movie.title}
                                    className="trailer-modal__backdrop"
                                />
                            </div>
                        </div>
                    )}

                    {trailerKey && (
                        <div className="trailer-modal__video">
                            <iframe
                                width="100%"
                                height="400"
                                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
                                title={`${movie.title} Trailer`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>

                <div className="trailer-modal__description">
                    <p>{movie.overview}</p>
                </div>
            </div>
        </Modal>
    )
}

export default TrailerModal