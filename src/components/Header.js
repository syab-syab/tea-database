import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="title-cover">
        <h1 className="title">Tea's Database</h1>
        <h2 className="sub-title">お茶の情報まとめてみた</h2>
      </Link>
      <div className="header-menu">
        <div className="header-menu-link">
          <Link to="/" className="menu-link">Home</Link>
        </div>
        <div className="header-menu-link">
          <Link to="/teas" className="menu-link">All Teas</Link>
        </div>
        <div className="header-menu-link">
          <Link to="/caffeine" className="menu-link">Caffeine</Link>
        </div>
        <div className="header-menu-link">
          <Link to="/about" className="menu-link">About</Link>
        </div>
      </div>
      
    </header>
  );
}
 
export default Header;