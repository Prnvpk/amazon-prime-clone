import './App.css'
import headerLogo from './assets/prime-current/header-logo.png'
import footerLogo from './assets/prime-current/footer-logo.png'
import heroImage from './assets/prime-current/hero.jpg'
import rentalsImage from './assets/prime-current/rentals.jpg'
import appleTv from './assets/prime-current/apple-tv.jpg'
import moviesphere from './assets/prime-current/moviesphere.jpg'
import lionsgate from './assets/prime-current/lionsgate.jpg'
import goldmines from './assets/prime-current/goldmines.jpg'
import animeTimes from './assets/prime-current/anime-times.jpg'
import manoramaMax from './assets/prime-current/manorama-max.jpg'
import chaupal from './assets/prime-current/chaupal.jpg'
import bbcPlayer from './assets/prime-current/bbc-player.jpg'
import nba from './assets/prime-current/nba.jpg'

const subscriptions = [
  ['Apple TV+', appleTv],
  ['Moviesphere+', moviesphere],
  ['Lionsgate Play', lionsgate],
  ['Goldmines Play', goldmines],
  ['Anime Times', animeTimes],
  ['ManoramaMAX', manoramaMax],
  ['Chaupal', chaupal],
  ['BBC Player', bbcPlayer],
  ['NBA', nba],
]

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </svg>
  )
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21c.7-4 3.2-6 7.5-6s6.8 2 7.5 6" />
    </svg>
  )
}

function App() {
  return (
    <div className="prime-home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Prime Video home">
          <img src={headerLogo} alt="Prime Video" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a className="active" href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#tv-shows">TV shows</a>
          <a href="#live-tv">Live TV</a>
          <span className="nav-divider" />
          <a href="#subscriptions">Subscriptions</a>
        </nav>

        <div className="nav-actions">
          <button className="round-action" type="button" aria-label="Search">
            <SearchIcon />
          </button>
          <button className="language" type="button" aria-label="Choose language">
            EN <span>⌄</span>
          </button>
          <button className="round-action grid-action" type="button" aria-label="Apps">
            <GridIcon />
          </button>
          <a className="profile" href="#sign-in" aria-label="Profile and account">
            <UserIcon />
          </a>
          <a className="join-prime" href="#join">Join Prime</a>
        </div>
      </header>

      <main id="home">
        <section className="magnet hero" style={{ '--desktop-image': `url(${heroImage})` }}>
          <div className="magnet-copy">
            <h1>Welcome to Prime Video</h1>
            <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
            <a className="primary-button" href="#sign-in">Sign in to join Prime</a>
          </div>
        </section>

        <section className="magnet rentals" id="movies" style={{ '--desktop-image': `url(${rentalsImage})` }}>
          <div className="magnet-copy">
            <h2>Movie rentals on Prime Video</h2>
            <p>Early Access to new movies, before digital subscription</p>
            <a className="primary-button" href="#rent-now">Rent now</a>
          </div>
        </section>

        <section className="subscriptions-section" id="subscriptions">
          <div className="subscriptions-copy">
            <h2>Your favorite subscriptions all in one place</h2>
            <p>Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app</p>
          </div>

          <div className="subscriptions-grid">
            {subscriptions.map(([name, image]) => (
              <a href="#channel" key={name} aria-label={name}>
                <img src={image} alt={name} />
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" id="join">
        <img src={footerLogo} alt="Prime Video" />
        <nav aria-label="Footer navigation">
          <a href="#terms">Terms and Privacy Notice</a>
          <a href="#cookies">Cookie Notice</a>
          <a href="#feedback">Send us feedback</a>
          <a href="#help">Help</a>
        </nav>
        <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  )
}

export default App
