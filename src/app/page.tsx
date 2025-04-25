import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Divine Temple</h1>
            <p>Experience peace, spirituality and divine connection</p>
            <div className="hero-buttons">
              <Link href="/register" className="primary-btn">
                Register Now
              </Link>
              <Link href="/donate" className="secondary-btn">
                Make a Donation
              </Link>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2>Our Services</h2>
            <div className="features-grid">
              <div className="feature-card">
                <Image
                  src="/icons/prayer.png"
                  alt="Daily Prayers"
                  width={64}
                  height={64}
                />
                <h3>Daily Prayers</h3>
                <p>Join our daily prayer ceremonies and spiritual gatherings</p>
              </div>
              <div className="feature-card">
                <Image
                  src="/icons/events.png"
                  alt="Special Events"
                  width={64}
                  height={64}
                />
                <h3>Special Events</h3>
                <p>Participate in festivals and special ceremonial events</p>
              </div>
              <div className="feature-card">
                <Image
                  src="/icons/community.png"
                  alt="Community"
                  width={64}
                  height={64}
                />
                <h3>Community</h3>
                <p>Be part of our growing spiritual community</p>
              </div>
            </div>
          </div>
        </section>



        <section className="projects">
  <div className="container">
    <h2 className="section-title">Ongoing Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <div className="project-image">
          <Image
            src="/image/temple.jpg"
            alt="Temple Renovation"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="project-content">
          <h3>Temple Renovation</h3>
          <p>Restoration of ancient temple structures preserving our sacred heritage</p>
          <div className="project-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: '75%' }}></div>
            </div>
            <span>75% Completed</span>
          </div>
          <Link href="/projects/renovation" className="project-link">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="project-card">
        <div className="project-image">
          <Image
            src="/image/langar.jpg"
            alt="Community Hall"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="project-content">
          <h3>Community Hall</h3>
          <p>Construction of new community hall for ceremonies and gatherings</p>
          <div className="project-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: '45%' }}></div>
            </div>
            <span>45% Completed</span>
          </div>
          <Link href="/projects/community-hall" className="project-link">
            Learn More →
          </Link>
        </div>
      </div>

      <div className="project-card">
        <div className="project-image">
          <Image
            src="/image/garden.jpg"
            alt="Sacred Garden"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="project-content">
          <h3>Sacred Garden</h3>
          <p>Development of meditation garden with ancient herbs and flowers</p>
          <div className="project-progress">
            <div className="progress-bar">
              <div className="progress" style={{ width: '30%' }}></div>
            </div>
            <span>30% Completed</span>
          </div>
          <Link href="/projects/sacred-garden" className="project-link">
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>






<section className="spiritual-content">
  <div className="container">
    <h2 className="section-title">Spiritual Teachings</h2>
    <div className="spiritual-grid">
      <div className="spiritual-card">
        <div className="spiritual-image">
          <Image
            src="/images/spiritual/meditation.jpg"
            alt="Meditation Guide"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="spiritual-content">
          <span className="content-tag">Meditation</span>
          <h3>Path to Inner Peace</h3>
          <p>Discover ancient meditation techniques for spiritual growth</p>
          <Link href="/teachings/meditation" className="content-link">
            Read More <span>→</span>
          </Link>
        </div>
      </div>

      <div className="spiritual-card">
        <div className="spiritual-image">
          <Image
            src="/images/spiritual/bhagavad-gita.jpg"
            alt="Sacred Texts"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="spiritual-content">
          <span className="content-tag">Sacred Texts</span>
          <h3>Understanding Scriptures</h3>
          <p>Weekly insights from ancient spiritual texts and their modern relevance</p>
          <Link href="/teachings/scriptures" className="content-link">
            Read More <span>→</span>
          </Link>
        </div>
      </div>

      <div className="spiritual-card">
        <div className="spiritual-image">
          <Image
            src="/images/spiritual/yoga.jpg"
            alt="Spiritual Practices"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="spiritual-content">
          <span className="content-tag">Practices</span>
          <h3>Daily Spiritual Practices</h3>
          <p>Learn essential spiritual practices for daily life</p>
          <Link href="/teachings/practices" className="content-link">
            Read More <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



















        
      </main>
    </>
  );
}