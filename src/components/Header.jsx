import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Add scroll effect with useEffect to prevent multiple listeners
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim())
    }
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__left">
        <div className="header__logo">
          NETFLIX
        </div>
        <nav className="header__nav">
          <a href="#home">Home</a>
          <a href="#tv-shows">TV Shows</a>
          <a href="#movies">Movies</a>
          <a href="#new">New & Popular</a>
          <a href="#my-list">My List</a>z
        </nav>
      </div>
      <div className="header__right">
        <form className="header__search" onSubmit={handleSearch}>
          <svg className="header__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className='searchicon'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
            </svg>
          </button>
        </form>
        <div className="header__profile">
          <img src="/profile-avatar.svg" alt="Profile" />
        </div>
      </div>
    </header>
  )
}

export default Header