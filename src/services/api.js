// TMDB API configuration
const API_KEY = '58b551fe0dc55f59865de6fd86c7a06b' // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

// For demo purposes, using sample data when API key is not provided
const SAMPLE_MOVIES = {
  results: [
    {
      id: 1,
      title: 'The Dark Knight',
      overview: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      backdrop_path: '/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg',
      vote_average: 9.0,
      release_date: '2008-07-18'
    },
    {
      id: 2,
      title: 'Inception',
      overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible.',
      poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
      vote_average: 8.8,
      release_date: '2010-07-16'
    },
    {
      id: 3,
      title: 'Interstellar',
      overview: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      poster_path: '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      backdrop_path: '/pbrkL804c8yAv3zBZR4QPWZAAn8.jpg',
      vote_average: 8.6,
      release_date: '2014-11-07'
    },
    {
      id: 4,
      title: 'The Matrix',
      overview: 'Set in the 22nd century, The Matrix tells the story of a computer programmer who is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
      poster_path: '/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      backdrop_path: '/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg',
      vote_average: 8.7,
      release_date: '1999-03-31'
    },
    {
      id: 5,
      title: 'Avengers: Endgame',
      overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more.',
      poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
      backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      vote_average: 8.4,
      release_date: '2019-04-26'
    },
    {
      id: 6,
      title: 'Spider-Man: No Way Home',
      overview: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous.',
      poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
      backdrop_path: '/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
      vote_average: 8.2,
      release_date: '2021-12-17'
    },
    {
      id: 7,
      title: 'Top Gun: Maverick',
      overview: 'After more than thirty years of service as one of the Navy\'s top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot.',
      poster_path: '/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
      backdrop_path: '/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
      vote_average: 8.3,
      release_date: '2022-05-27'
    },
    {
      id: 8,
      title: 'Dune',
      overview: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.',
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      backdrop_path: '/iopYFB1b6Bh7FWZh3onQhph1sih.jpg',
      vote_average: 8.0,
      release_date: '2021-10-22'
    },
    {
      id: 9,
      title: 'Black Panther',
      overview: 'King T\'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country\'s new leader. However, T\'Challa soon finds that he is challenged for the throne.',
      poster_path: '/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
      backdrop_path: '/b6ZJZHUdMEFECvGiDpJjlfUWela.jpg',
      vote_average: 7.3,
      release_date: '2018-02-16'
    },
    {
      id: 10,
      title: 'Joker',
      overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
      poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
      backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
      vote_average: 8.2,
      release_date: '2019-10-04'
    },
    {
      id: 11,
      title: 'Avatar: The Way of Water',
      overview: 'Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, and the lengths they go to keep each other safe.',
      poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      backdrop_path: '/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg',
      vote_average: 7.6,
      release_date: '2022-12-16'
    },
    {
      id: 12,
      title: 'Oppenheimer',
      overview: 'The story of J. Robert Oppenheimer\'s role in the development of the atomic bomb during World War II.',
      poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
      vote_average: 8.3,
      release_date: '2023-07-21'
    }
  ]
}

export const fetchMovies = async (category) => {
  // If no API key is provided, return sample data
  if (API_KEY === 'your_api_key_here') {
    console.warn('Using sample data. Please add your TMDB API key to services/api.js')
    
    // Return different movies for different categories to simulate real API
    const shuffled = [...SAMPLE_MOVIES.results].sort(() => 0.5 - Math.random())
    const categoryMovies = {
      ...SAMPLE_MOVIES,
      results: shuffled.slice(0, 8) // Return 8 movies per category for more variety
    }
    
    return categoryMovies
  }

  try {
    let endpoint = ''
    
    switch (category) {
      case 'trending':
        endpoint = '/trending/movie/week'
        break
      case 'popular':
        endpoint = '/movie/popular'
        break
      case 'top_rated':
        endpoint = '/movie/top_rated'
        break
      case 'upcoming':
        endpoint = '/movie/upcoming'
        break
      default:
        endpoint = '/movie/popular'
    }

    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching movies:', error)
    // Return sample data as fallback
    return SAMPLE_MOVIES
  }
}

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return '/placeholder-movie.svg'
  // For sample data, use TMDB images directly
  if (path.startsWith('/')) {
    return `https://image.tmdb.org/t/p/${size}${path}`
  }
  return '/placeholder-movie.svg'
}

// Sample trailer data for demo purposes
const SAMPLE_TRAILERS = {
  1: 'EXeTwQWrcwY', // The Dark Knight
  2: 'YoHD9XEInc0', // Inception
  3: 'zSWdZVtXT7E', // Interstellar
  4: 'vKQi3bBA1y8', // The Matrix
  5: 'TcMBFSGVi1c', // Avengers: Endgame
  6: 'JfVOs4VSpmA', // Spider-Man: No Way Home
  7: 'giXco2jaZ_4', // Top Gun: Maverick
  8: '8g18jFHCLXk', // Dune
  9: 'xjDjIWPwcPU', // Black Panther
  10: 'zAGVQLHvwOY', // Joker
  11: 'd9MyW72ELq0', // Avatar: The Way of Water
  12: 'uYPbbksJxIg'  // Oppenheimer
}

export const getMovieTrailer = async (movieId) => {
  // If no API key is provided, return sample trailer
  if (API_KEY === 'your_api_key_here') {
    console.warn('Using sample trailer data. Please add your TMDB API key for real trailers')
    return SAMPLE_TRAILERS[movieId] || null
  }

  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Find the first YouTube trailer
    const trailer = data.results.find(
      video => video.type === 'Trailer' && video.site === 'YouTube'
    )
    
    return trailer ? trailer.key : null
  } catch (error) {
    console.error('Error fetching trailer:', error)
    // Return sample trailer as fallback
    return SAMPLE_TRAILERS[movieId] || null
  }
}

export const searchMovies = async (query) => {
  if (API_KEY === 'your_api_key_here') {
    return SAMPLE_MOVIES
  }

  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error searching movies:', error)
    return SAMPLE_MOVIES
  }
}