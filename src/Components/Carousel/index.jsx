//import React from "react";
import Slider from "react-slick";
import Disney from "../../assets/disney.png";
import Inverno from "../../assets/inverno.png";
import Fantastika from "../../assets/fantastika.png";
import Phill from "../../assets/phill reboque.png";
import Dabliu from "../../assets/dabliu.png";
import { Subtitle, Name, Cards, Image } from "./style";

export default function Projetos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Subtitle> Projetos </Subtitle>
      <Slider {...settings}>
        <div>
          <Cards>
            <Name>Projeto Disney</Name>
            <a href="https://disneyvainaweb.netlify.app/" target="blank">
              <Image src={Disney} alt="disney" />
            </a>
          </Cards>
        </div>
        <div>
          <Cards>
            <Name>Projeto Inverno</Name>
            <a href="https://inverno-vainaweb.netlify.app/" target="blank">
              <Image src={Inverno} alt="inverno" />
            </a>
          </Cards>
        </div>
        <div>
          <Cards>
            <Name>Fantastika</Name>
            <a href="https://fantastika-vnw.netlify.app/" target="blank">
              <Image src={Fantastika} alt="" />
            </a>
          </Cards>
        </div>
        <div>
          <Cards>
            <Name>Phill Reboque</Name>
            <a href="https://phill-reboques.com.br/" target="blank">
              <Image src={Phill} alt="" />
            </a>
          </Cards>
        </div>
        <div>
          <Cards>
            <Name>Dabliu</Name>
            <a href="https://dabliusite.netlify.app/" target="blank">
              <Image src={Dabliu} alt="" />
            </a>
          </Cards>
        </div>
        {/*<div>
        <h3>6</h3>
      </div>
      <div>
        <h3>7</h3>
      </div>
      <div>
        <h3>8</h3>
  </div>*/}
      </Slider>
    </>
  );
}
