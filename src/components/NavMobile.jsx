import styles from "./nav.module.css";

function Nav() {
  return (
    <div className="Nav">
      <div className={styles.logoTextMobile}>
        <a href="#none">Clara Presas</a>
      </div>
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
    </div>
  );
}

export default Nav;
