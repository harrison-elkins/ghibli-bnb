import "./NavBar.scss";

function NavBar() {
  return (
    <header className="nav">
      <div className="nav__container">
        <div className="nav__logo-container">
          <h2 className="nav__logo">ghiblibnb</h2>
          <div className="nav__search-container">
            <input className="nav__search" />
          </div>
        </div>
        <div className="nav__details-wrapper">
          <div className="nav__link-container">
            <a className="nav__link" href="#">
              Explore New Terrains
            </a>
          </div>
          <div className="nav__btn-container">
            <button className="nav__btn">Become a Host</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
