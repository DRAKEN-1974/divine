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

        <section className="upcoming-events">
          <div className="container">
            <h2>Upcoming Events</h2>
            <div className="events-grid">
              {/* Add your events here */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}