import { useEffect, useRef, useState } from 'react'
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

const languages = [
  'Bahasa Indonesia',
  'Bahasa Melayu',
  'Dansk',
  'Deutsch',
  'English',
  'Español',
  'Español Latinoamérica',
  'Français',
  'Italiano',
  'Magyar',
  'Nederlands',
  'Norsk',
  'Polski',
  'Português (Brasil)',
  'Português (Portugal)',
  'Română',
  'Suomi',
  'Svenska',
  'Türkçe',
  'Wikang Filipino',
  'Čeština',
  'Ελληνικά',
  'Русский',
  'עברית',
  'العربية',
  'हिन्दी',
  'தமிழ்',
  'తెలుగు',
  'ไทย',
  '日本語',
  '简体中文',
  '繁體中文',
  '한국어',
]

const categoryGroups = [
  {
    title: 'Genres',
    items: [
      'Action and adventure',
      'Anime',
      'Comedy',
      'Documentary',
      'Drama',
      'Fantasy',
      'Horror',
      'Kids',
      'Mystery and thrillers',
      'Romance',
      'Science fiction',
      'Young adult',
    ],
  },
  {
    title: 'Featured collections',
    items: [
      'Made for you',
      'New and upcoming',
      'Home Premiere',
      'Popular Bundles',
      'Critically acclaimed',
      'LGBTQIAP+',
      'Black voices',
    ],
  },
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

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
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
  const [openMenu, setOpenMenu] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const [page, setPage] = useState(() => (window.location.hash === '#signin' ? 'signin' : 'home'))
  const [signInNotice, setSignInNotice] = useState('')
  const headerRef = useRef(null)

  useEffect(() => {
    const closeMenus = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpenMenu(null)
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }
    const syncPage = () => setPage(window.location.hash === '#signin' ? 'signin' : 'home')

    document.addEventListener('pointerdown', closeMenus)
    document.addEventListener('keydown', closeOnEscape)
    window.addEventListener('hashchange', syncPage)
    return () => {
      document.removeEventListener('pointerdown', closeMenus)
      document.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('hashchange', syncPage)
    }
  }, [])

  const toggleMenu = (menu) => {
    setOpenMenu((current) => (current === menu ? null : menu))
  }

  const closeMenu = () => setOpenMenu(null)

  const navigateToSignIn = () => {
    closeMenu()
    window.location.hash = 'signin'
    setPage('signin')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const navigateHome = () => {
    window.location.hash = 'home'
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  if (page === 'signin') {
    return (
      <main className="amazon-signin-page">
        <button className="amazon-wordmark" type="button" onClick={navigateHome} aria-label="Return to Prime Video">
          <span>amazon</span><i />
        </button>

        <section className="signin-card" aria-labelledby="signin-title">
          <h1 id="signin-title">Sign in</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSignInNotice('Demo only: no sign-in information was submitted or stored.')
            }}
          >
            <label htmlFor="signin-email">Email or mobile phone number</label>
            <input id="signin-email" type="text" autoComplete="off" required />
            <button className="amazon-continue" type="submit">Continue</button>
          </form>
          {signInNotice && <p className="signin-notice" role="status">{signInNotice}</p>}
          <p className="signin-terms">
            By continuing, you agree to Amazon&apos;s <a href="#conditions">Conditions of Use</a> and <a href="#privacy">Privacy Notice</a>.
          </p>
          <details className="signin-help">
            <summary>Need help?</summary>
            <a href="#forgot-password">Forgot your password?</a>
            <a href="#other-issues">Other issues with Sign-In</a>
          </details>
          <div className="business-divider" />
          <h2>Buying for work?</h2>
          <a href="#business">Shop on Amazon Business</a>
        </section>

        <div className="new-account-divider"><span>New to Amazon?</span></div>
        <button className="create-account" type="button">Create your Amazon account</button>

        <footer className="signin-footer">
          <nav>
            <a href="#conditions">Conditions of Use</a>
            <a href="#privacy">Privacy Notice</a>
            <a href="#help">Help</a>
          </nav>
          <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </footer>
      </main>
    )
  }

  return (
    <div className="prime-home">
      <header className="site-header" ref={headerRef}>
          <a className="brand" href="#home" aria-label="Prime Video home" onClick={closeMenu}>
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
          <div className="menu-anchor language-anchor">
            <button
              className={`language ${openMenu === 'language' ? 'menu-open' : ''}`}
              type="button"
              aria-label={`Choose language. Current language: ${selectedLanguage}`}
              aria-expanded={openMenu === 'language'}
              aria-controls="language-menu"
              onClick={() => toggleMenu('language')}
            >
              EN <span className="caret">⌄</span>
            </button>
            {openMenu === 'language' && (
              <div className="language-menu dropdown-panel" id="language-menu">
                <p>Choose a language</p>
                <div className="language-grid">
                  {languages.map((language) => (
                    <button
                      className={selectedLanguage === language ? 'selected' : ''}
                      type="button"
                      key={language}
                      onClick={() => {
                        setSelectedLanguage(language)
                        closeMenu()
                      }}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="menu-anchor categories-anchor">
            <button
              className={`round-action grid-action ${openMenu === 'categories' ? 'menu-open' : ''}`}
              type="button"
              aria-label="Categories"
              aria-expanded={openMenu === 'categories'}
              aria-controls="categories-menu"
              onClick={() => toggleMenu('categories')}
            >
              <GridIcon />
            </button>
            {openMenu === 'categories' && (
              <div className="categories-menu dropdown-panel" id="categories-menu">
                <h2>Categories</h2>
                <div className="category-menu-groups">
                  {categoryGroups.map((group) => (
                    <section key={group.title}>
                      <h3>{group.title}</h3>
                      <div>
                        {group.items.map((category) => (
                          <a href="#category" key={category} onClick={closeMenu}>{category}</a>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="profile" type="button" aria-label="Profile and account" onClick={navigateToSignIn}>
            <UserIcon />
          </button>
          <button className="join-prime" type="button" onClick={navigateToSignIn}>Join Prime</button>
          <div className="menu-anchor mobile-menu-anchor">
            <button
              className={`mobile-menu-button ${openMenu?.startsWith('mobile') ? 'menu-open' : ''}`}
              type="button"
              aria-label="Menu"
              aria-expanded={openMenu === 'mobile' || openMenu === 'mobile-language' || openMenu === 'mobile-categories'}
              aria-controls="mobile-navigation"
              onClick={() => toggleMenu('mobile')}
            >
              <MenuIcon />
              <span>Menu</span>
              <span className="caret">⌄</span>
            </button>
            {(openMenu === 'mobile' || openMenu === 'mobile-language' || openMenu === 'mobile-categories') && (
              <nav className="mobile-nav dropdown-panel" id="mobile-navigation" aria-label="Mobile navigation">
                {openMenu === 'mobile' ? (
                  <>
                    <p>Browse</p>
                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#movies" onClick={closeMenu}>Movies</a>
                    <a href="#tv-shows" onClick={closeMenu}>TV shows</a>
                    <button type="button" onClick={() => setOpenMenu('mobile-categories')}>Categories <strong>›</strong></button>
                    <button type="button" onClick={navigateToSignIn}>Join Prime</button>
                    <div className="mobile-subscriptions">
                      <span>Subscriptions</span>
                      <a href="#subscriptions" onClick={closeMenu}>Channels <strong>Browse all ›</strong></a>
                    </div>
                    <button type="button" onClick={() => setOpenMenu('mobile-language')}>
                      Language <strong>EN ›</strong>
                    </button>
                  </>
                ) : openMenu === 'mobile-language' ? (
                  <>
                    <button className="mobile-back" type="button" onClick={() => setOpenMenu('mobile')}>
                      ‹ Back <strong>EN</strong>
                    </button>
                    <p>Choose a language</p>
                    <div className="mobile-language-list">
                      {languages.map((language) => (
                        <button
                          className={selectedLanguage === language ? 'selected' : ''}
                          type="button"
                          key={language}
                          onClick={() => {
                            setSelectedLanguage(language)
                            closeMenu()
                          }}
                        >
                          {language}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <button className="mobile-back" type="button" onClick={() => setOpenMenu('mobile')}>
                      ‹ Back <strong>Categories</strong>
                    </button>
                    <div className="mobile-category-groups">
                      {categoryGroups.map((group) => (
                        <section key={group.title}>
                          <p>{group.title}</p>
                          {group.items.map((category) => (
                            <a href="#category" key={category} onClick={closeMenu}>{category}</a>
                          ))}
                        </section>
                      ))}
                    </div>
                  </>
                )}
              </nav>
            )}
          </div>
        </div>
      </header>

      <main id="home">
        <section className="magnet hero" style={{ '--desktop-image': `url(${heroImage})` }}>
          <div className="magnet-copy">
            <h1>Welcome to Prime Video</h1>
            <p>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
            <button className="primary-button" type="button" onClick={navigateToSignIn}>Sign in to join Prime</button>
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
