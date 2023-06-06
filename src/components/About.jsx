const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">

        <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>

        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row">
          <div className="ms-auto"><p className="lead">Salome Nusantara merupakan sebuah UMKM yang menghadirkan kelezatan autentik dalam setiap hidangan yang ditawarkannya. Dikenal dengan spesialisasi dalam pembuatan salome, es cendol, dan jus jeruk, Salome Nusantara berhasil memadukan cita rasa tradisional dengan sentuhan modern yang menggugah selera. Dalam setiap sajian, Salome Nusantara tidak hanya menyajikan makanan dan minuman, tetapi juga sebuah pengalaman mengenai kekayaan rasa Indonesia. Dengan menjaga keaslian bahan-bahan dan kualitas terbaik, Salome Nusantara memanjakan pelanggan dengan hidangan yang menggoda lidah dan membawa kenangan yang tak terlupakan.</p></div>
        </div>

        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light" href="https://maps.app.goo.gl/gawWpEj8LoQo4Skr6" rel="noreferrer" target="_blank">
            Pesan Sekarang!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
