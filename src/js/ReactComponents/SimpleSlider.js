import React from "react";
import Slider from "react-slick";

export default class SimpleSlider extends React.Component{
    render() {
      const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        touchThreshold: 5000
      };
      return (
        <div>
          <Slider {...settings}>
                <div className="item" style="background: url(https://otkrit-ka.ru/uploads/posts/2021-09/foto-i-kartinki-salon-krasoty-21.jpg?3) no-repeat center center / cover;"></div> 
                <div className="item" style="background: url(https://otkrit-ka.ru/uploads/posts/2021-09/foto-i-kartinki-salon-krasoty-21.jpg?3) no-repeat center center / cover;"></div> 
                <div className="item" style="background: url(https://otkrit-ka.ru/uploads/posts/2021-09/foto-i-kartinki-salon-krasoty-21.jpg?3) no-repeat center center / cover;"></div> 
          </Slider>
        </div>
      );
    }
  }