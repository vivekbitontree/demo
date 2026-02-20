import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <div className="nav-logo">ANTIGRAVITY</div>
                <div className="nav-links">
                    <Link to="/login" style={{ color: 'var(--text-main)', textDecoration: 'none', marginRight: '1.5rem' }}>Login</Link>
                    <Link to="/signin" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Get Started</Link>
                </div>
            </nav>

            <div style={{ marginTop: '8rem' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Experience the Future</h1>
                <p className="subtitle" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    Beautiful, fast, and modern application template built with React and Vite.
                    Ready for your next big idea.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn-primary" style={{ width: 'auto', padding: '1rem 2rem' }}>Learn More</button>
                    <button className="btn-primary" style={{ width: 'auto', padding: '1rem 2rem', background: 'transparent', border: '1px solid var(--glass-border)' }}>Documentation</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
