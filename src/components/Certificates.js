import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { certificates } from "../data";

export const Certificates = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="certificate" id="certificates">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="certificate-bx wow zoomIn">
              <h2>Certificados</h2>
              <p>Acredito que esses certificados demonstram meu comprometimento com o aprendizado contínuo e minha busca por excelência profissional. Estou sempre buscando oportunidades para expandir meus conhecimentos e aplicar minhas habilidades de forma eficaz em projetos desafiadores.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme certificate-slider">
                {
                  certificates.map(({ title, imgUrl, link }) => (
                    <div className="item">
                      <img src={imgUrl} alt={title} />
                      <h5>{title}</h5>
                      <a href={link} target="_blank" rel="noreferrer">Conferir</a>
                    </div>
                  )
                  )
                }
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src="https://png.pngtree.com/element_our/png/20181227/blue-gradient-wave-background-png_292505.jpg" alt="Image" /> */}
    </section>
  )
}
