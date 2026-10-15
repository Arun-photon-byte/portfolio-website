import NavBar from '../components/NavBar.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';

const heroImages = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
        <rect width="1200" height="800" fill="#dfeaf6"/>
        <rect x="80" y="80" width="1040" height="640" rx="28" fill="#4c7ef3"/>
        <text x="600" y="420" text-anchor="middle" font-family="Arial" font-size="72" fill="#ffffff">Our Team</text>
      </svg>
    `),
    alt: 'Company team photo'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
        <rect width="1200" height="800" fill="#edf7ee"/>
        <rect x="80" y="80" width="1040" height="640" rx="28" fill="#31a66b"/>
        <text x="600" y="420" text-anchor="middle" font-family="Arial" font-size="72" fill="#ffffff">Creative Studio</text>
      </svg>
    `),
    alt: 'Creative workspace photo'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
        <rect width="1200" height="800" fill="#fff2d9"/>
        <rect x="80" y="80" width="1040" height="640" rx="28" fill="#f2a93b"/>
        <text x="600" y="420" text-anchor="middle" font-family="Arial" font-size="72" fill="#ffffff">Client Success</text>
      </svg>
    `),
    alt: 'Client success story photo'
  }
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <NavBar />

      <main className="content-panel">
        <section className="hero">
          <div>
            <p className="eyebrow">Trusted by growing businesses</p>
            <h1>Welcome to Northstar Studio</h1>
            <p className="lead">
              We help companies tell their story with thoughtful strategy, modern design,
              and measurable results.
            </p>
          </div>
        </section>

        <ImageCarousel images={heroImages} />
      </main>
    </div>
  );
}
