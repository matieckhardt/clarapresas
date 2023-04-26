function Nav() {
  return (
    <div className="Nav">
      <nav id="menu-apple" class="menu-m">
        <input type="checkbox" id="tm" class="tm" />
        <label for="tm" id="toggle-menu">
          <div class="menu-toggle">
            <span>Menu</span>
          </div>
        </label>
        <ul class="main-menu cf">
          <li>
            <a href="#home" onclick="document.getElementById('tm').click()">
              Home
            </a>
          </li>
          <li>
            <a href="#film" onclick="document.getElementById('tm').click()">
              Film
            </a>
          </li>
          <li>
            <a href="#masonry" onclick="document.getElementById('tm').click()">
              Photo
            </a>
          </li>
          <li>
            <a href="#contact" onclick="document.getElementById('tm').click()">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav class="cat">
        <a class="caca" href="#none" id="mas">
          +
        </a>
        <a class="cat" id="title1" href="#none" style={{ display: "none" }}>
          FILM
        </a>
        <a class="cat" id="title2" href="#none" style={{ display: "none" }}>
          STILLS
        </a>
        <a class="cat" id="title3" href="#none" style={{ display: "none" }}>
          PHOTO
        </a>
        <a class="cat" id="title4" href="#none" style={{ display: "none" }}>
          CONTACT
        </a>
      </nav>
      <div class="logo-text">
        <a href="#none">Clara Presas</a>
      </div>
      <div class="nav" id="menu">
        <a href="#home" id="menu">
          Home
        </a>{" "}
        <br />
        <a href="#videos" id="menu">
          Film
        </a>{" "}
        <br />
        <a href="#stills" id="menu">
          Stills
        </a>
        <br />
        <a href="#masonry" id="menu">
          Photo
        </a>
        <br />
        <a href="#contact" id="menu">
          Contact
        </a>
        <br />
      </div>
    </div>
  );
}

export default Nav;
