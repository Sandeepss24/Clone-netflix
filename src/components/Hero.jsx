import { getImageUrl } from '../services/api'
import './Hero.css'

const Hero = ({ movie, onPlayClick }) => {
    if (!movie) return null

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text
        return text.substr(0, maxLength) + '...'
    }

    return (
        <div
            className="hero"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${getImageUrl(movie.backdrop_path, 'original')})`
            }}
        >
            <div className="hero__content">
                <h1 className="hero__title">{movie.title}</h1>
                <div className="hero__buttons">
                    <button
                        className="hero__button hero__button--play"
                        onClick={() => onPlayClick && onPlayClick(movie)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                    </button>
                    <button className="hero__button hero__button--info">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                        More Info
                    </button>
                </div>
                <p className="hero__description">
                    {truncateText(movie.overview, 200)}
                </p>
            </div>
        </div>
    )
}

export default Hero