function Hero() {
  return (
    <div className="Hero" id="Hero" sx={{ width: "100vw" }}>
      <div class="video-banner" id="home">
        <video
          src="/videos/introFHD.webm"
          autoplay="true"
          muted
          type="video/webm"
          loop
          class="video-ban"
        ></video>
        <video
          autoplay="true"
          muted
          loop
          playsinline
          controls
          class="d-none"
          id="home-mobile"
        >
          <source
            src="/videos/introMobile.webm"
            autoplay="true"
            muted
            playsinline
            loop
            controls
            class="video-mobile"
            type="video/webm"
          />
          <source
            src="/videos/introMobile.mp4"
            autoplay="true"
            muted
            playsinline
            loop
            controls="true"
            class="video-mobile"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Hero;
