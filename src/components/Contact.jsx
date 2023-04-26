function Contact() {
  return (
    <div className="Contact">
      <section class="about" id="contact">
        <div class="row container m-auto d-flex mb-0" id="about-container">
          <div class="col-12 col-md-6 align-self-center px-4">
            <div class="about-img">
              <img
                id="about-img"
                class="img-fluid"
                src="/img/about.jpg"
                alt="clara presas foto"
              ></img>
            </div>
          </div>
          <div class="col-12 col-md-6 align-self-center px-4">
            <p class="about-text">
              Argentina. Diseñadora de Imagen y Sonido <br />
              egresada de la Universidad de Buenos Aires (FADU) en el año 2020.
            </p>
            <br />
            <p class="about-text">
              Busco la esencia en el sinsentido.
              <br />
              En un mundo donde como caleidoscopios
              <br />
              nos construimos por una cadena espejal de miradas,
              <br />
              elijo cerrar los ojos para sentir.
              <br />
              La magia de los colores son la energía inexplicable
              <br />
              de la esencia. La luz su expresión.
              <br />
              En el proceso la realidad toma su forma
              <br />
              desde el sinsentido como una mirada única.
              <br />
              Lo cotidiano, el detalle.
              <br />
              Lo documental, la ficción.
              <br />
              Me encuentro en lo irreal
              <br />
            </p>
          </div>
        </div>
        <div class="row container m-auto about-text justify-content-center text-center">
          <div class="col-12 col-md-3">
            <a
              href="https://www.instagram.com/clara.presas/"
              class="btn btn-outline-light p-2"
              style={{ borderRadius: "16px" }}
              target="_blank"
              rel="noreferrer"
            >
              <i class="me-2 fab fa-lg fa-instagram"></i>
              @clara.presas
            </a>
          </div>
          <div class="col-12 col-md-3">
            <a
              href="mailto:clari.presas@gmail.com"
              class="btn btn-outline-light p-2"
              style={{ borderRadius: "16px" }}
              target="_blank"
              rel="noreferrer"
            >
              <i class="me-2 far fa-lg fa-envelope"></i>
              clari.presas@gmail.com
            </a>
          </div>
          <div class="col-12 col-md-3">
            <a
              href=" https://wa.me/525579824989"
              class="btn btn-outline-light p-2"
              style={{ borderRadius: "16px" }}
              target="_blank"
            >
              <i class="me-2 fab fa-lg fa-whatsapp"></i>
              +5491150547776
            </a>
          </div>
        </div>
        <p class="align-self-end switchit">
          coded with <span class="heart">♥</span> by{" "}
          <a href="https://switchit.com.ar" target="_blank" rel="noreferrer">
            SwitchIT
          </a>
        </p>
      </section>
    </div>
  );
}

export default Contact;
