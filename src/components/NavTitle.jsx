import React, { useState, useEffect } from "react";
import styles from "./nav.module.css";

const sections = [
  { id: "home", title: "Home" },
  { id: "videos", title: "Film" },
  { id: "stills", title: "Stills" },
  { id: "masonry", title: "Photo" },
  { id: "contact", title: "Contact" },
];

const titles = [
  { name: "", threshold: [0, 6] },
  { name: "FILM", threshold: [6, 15] },
  { name: "STILLS", threshold: [15, 65] },
  { name: "PHOTO", threshold: [65, 70] },
  { name: "CONTACT", threshold: [70, 100] },
];

function calculateTitle(scrollPercentRounded, winHeight) {
  const heightToThreshold = [
    { height: 1080, threshold: [6, 15, 65, 99, 105] },
    { height: 975, threshold: [6, 15, 65, 99, 105] },
    { height: 795, threshold: [6, 39, 77, 99, 105] },
    { height: 665, threshold: [5, 34, 78, 99, 105] },
  ];

  let index = 0;
  if (winHeight < 975 && winHeight >= 795) {
    index = 1;
  } else if (winHeight < 665) {
    index = 2;
  }

  const thresholds = heightToThreshold[index].threshold;
  for (let i = 0; i <= thresholds.length; i++) {
    if (scrollPercentRounded <= thresholds[i]) {
      return titles[i].name;
    }
  }

  return "";
}

function TitleComponent() {
  const [showTitle, setShowTitle] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);

      const title = calculateTitle(scrollPercentRounded, winHeight);
      setShowTitle(title);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={styles.titleSection}>
      <div className={styles.logoText}>
        <a href="#none">Clara Presas</a>
      </div>
      {showMenu && showTitle == "" && (
        <div className={styles.nav} id="menu">
          {sections.map((section) => (
            <div key={section.id}>
              <a key={section.id} href={`#${section.id}`} id="menu">
                {section.title}
              </a>
              <br />
            </div>
          ))}{" "}
        </div>
      )}
      <a
        className={styles.moreButton}
        href="#none"
        id="mas"
        onClick={toggleMenu}
      >
        +
      </a>
      {showTitle !== "" && (
        <div className={`${styles.title} ${showTitle !== "" && styles.show}`}>
          <span>{showTitle}</span>
        </div>
      )}
    </nav>
  );
}

export default TitleComponent;
