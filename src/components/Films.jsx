function Films() {
  return (
    <div className="Films">
      <div class="video-gallery" id="makina2">
        <a
          href="none"
          data-toggle="modal"
          data-target="#modalmakina"
          target="_blank"
          rel="noreferrer"
        >
          <div class="gallery-text">
            <h1>Direction & Cinematography</h1>
            <p>VIDEOCLIP | SPAIKE · MAKINA2</p>
          </div>
        </a>
        <video
          src="/videos/makina2.webm"
          autoplay=""
          muted
          loop
          class="video-gal"
        ></video>
      </div>

      <div class="video-gallery" id="xtranos">
        <a href="#none" data-toggle="modal" data-target="#modalxtra">
          <div class="gallery-text">
            <h1>Cinematography</h1>
            <p>VIDEOCLIP | SPAIKE ·XTRAÑOS</p>
          </div>
        </a>
        <video
          src="/videos/xtranos.webm"
          autoplay=""
          muted
          loop
          class="video-gal"
        ></video>
      </div>

      <div class="video-gallery" id="jcb">
        <a href="#none" data-toggle="modal" data-target="#modaljcb">
          <div class="gallery-text">
            <h1>Direction & Cinematography</h1>
            <p>VIDEOCLIP | MATI ECKHARDT JUST COME BACK</p>
          </div>
        </a>
        <video
          src="/videos/jcb.webm"
          autoplay=""
          muted
          loop
          class="video-gal"
        ></video>
      </div>

      <div class="video-gallery" id="qtsl">
        <a
          href="https://www.instagram.com/quetesealeve.sw/"
          target="_blank"
          rel="noreferrer"
        >
          <div class="gallery-text">
            <h1>Cinematography</h1>
            <p>WEB SERIES | QUE TE SEA LEVE</p>
          </div>
        </a>
        <video
          src="/videos/qtsl.webm"
          autoplay=""
          muted
          loop
          class="video-gal"
        ></video>
      </div>

      <div class="video-gallery" id="retorno">
        <a href="#none" data-toggle="modal" data-target="#modalreto">
          <div class="gallery-text">
            <h1>Cinematography</h1>
            <p>SHORT FILM | RETORNO</p>
          </div>
        </a>
        <video
          src="/videos/retorno.webm"
          autoplay=""
          muted
          loop
          class="video-gal"
        ></video>
      </div>
    </div>
  );
}

export default Films;
