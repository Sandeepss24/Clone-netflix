# Netflix Clone

A Netflix clone built with React and Vite, featuring movie data from The Movie Database (TMDB) API.

## Features

- 🎬 Browse trending, popular, top-rated, and upcoming movies
- 🎯 Hero section with featured movie (changes randomly on each refresh)
- 📱 Responsive design with mobile optimization
- 🔍 **Enhanced search bar** with icons and focus states
- 🎨 Netflix-inspired UI/UX with professional styling
- 🎲 Random hero movie selection from all categories
- 🎥 **Movie trailers in modal** - Click on any movie to watch its trailer
- ▶️ **Perfect arrow navigation** with smooth hover effects
- 👤 **Professional profile icon** with hover animations
- 🦶 **Complete footer section** with social links and company info
- 🎯 Play button overlays on hover for better UX

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Get a TMDB API key:
   - Go to [The Movie Database (TMDB)](https://www.themoviedb.org/)
   - Create a free account
   - Go to Settings > API
   - Request an API key (choose "Developer" option)
   - Copy your API key

4. Add your API key:
   - Open `src/services/api.js`
   - Replace `'your_api_key_here'` with your actual TMDB API key

5. Start the development server:
   ```bash
   npm run dev
   ```

## How to Use

**Watch Trailers:**
- Click on any movie poster in the rows to open the trailer modal
- Click the "Play" button in the hero section to watch the featured movie's trailer
- Press Escape or click the X button to close the modal
- Trailers are embedded from YouTube with autoplay

**Browse Movies:**
- Scroll through different categories (Trending, Popular, Top Rated, Upcoming)
- Use the enhanced search bar with search and submit icons
- Hover over movies to see play button overlay and movie details
- Navigate movie rows with perfect arrow buttons (smooth animations)
- Click profile icon for hover effects

**UI Features:**
- Professional Netflix-style header with scroll effects
- Enhanced search bar with focus states and icons
- Perfect arrow navigation with hover and active states
- Complete footer with social links and company information
- Responsive design that works on all devices

The development server runs at `http://localhost:5174/`

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Featured movie section
│   ├── MovieRow.jsx       # Horizontal movie rows
│   └── *.css             # Component styles
├── services/
│   └── api.js            # TMDB API integration
├── App.jsx               # Main app component
└── main.jsx             # App entry point
```

## API Integration

The app uses The Movie Database (TMDB) API to fetch:
- Trending movies
- Popular movies
- Top-rated movies
- Upcoming movies

If no API key is provided, the app will display sample data for demonstration purposes.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- React 19
- Vite
- CSS3
- TMDB API

## License

This project is for educational purposes only.