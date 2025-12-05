export default function Home() {
  const mixes = [
    {
      title: 'House Mix 01',
      url: 'https://ia601702.us.archive.org/8/items/House-Mix-01-Hitterman/01%20Mix%201.mp3',
      description: 'Upbeat house mix full of energy and good vibes',
    },
    {
      title: 'House Mix 02',
      url: 'https://ia903402.us.archive.org/18/items/house-mix-02-hitterman/01%20House%20Mix%2002.mp3',
      description: 'House mix of remixed familiar hits and fresh tracks',
    },
  ];

  return (
    <div
      style={{
        background: '#fdf6e3',
        minHeight: '100vh',
        padding: '3rem 1.5rem',
        fontFamily: 'system-ui, sans-serif',
        color: '#111',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '0' }}>
          <img
            src="/favicon.ico"
            alt="DJ Hitterman Logo"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </div>

        <h1
          style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            letterSpacing: '-1px',
            marginBottom: '2rem',
            marginTop: '0.5rem',
            background: 'linear-gradient(90deg, #c4d6a1, #8b9b5f)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          DJ HITTERMAN
        </h1>

        {mixes.map((mix, index) => (
          <div
            key={index}
            style={{
              background: 'linear-gradient(145deg, #ffffffcc, #f5f8f1cc)',
              padding: '1.2rem',
              borderRadius: '24px',
              boxShadow:
                '0 12px 25px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.05)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.6)',
              marginBottom: '2rem',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow =
                '0 18px 40px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 12px 25px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.05)';
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: '1.9rem',
                fontWeight: '800',
                background: 'linear-gradient(90deg, #8fa76c, #6b7d45)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-0.5px',
                textAlign: 'center',
              }}
            >
              {mix.title}
            </h2>

            <p
              style={{
                marginTop: '0.5rem',
                marginBottom: '0',
                fontSize: '1rem',
                color: '#333',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              {mix.description}
            </p>

            <div
              style={{
                marginTop: '0.5rem',
                paddingTop: '0',
                padding: '1rem',
                borderRadius: '18px',
                background: 'linear-gradient(145deg, #ffffffcc, #f5f8f1cc)',
              }}
            >
              <audio
                controls
                onPlay={() => {
                  if (typeof window.gtag !== 'function') return;
                  window.gtag('event', 'mix_play', { mix_title: mix.title });
                }}
                style={{ width: '100%', borderRadius: '12px', outline: 'none' }}
              >
                <source src={mix.url} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
