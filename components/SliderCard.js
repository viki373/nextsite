import React, { Component } from "react";
import Slider from "react-slick";
import Link from 'next/link';
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: 'h-200',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
        {this.props.cardData.map((item, card) => {
         const path = 'partners/'
            return (
              <div key={card} className="slid-item d-flex justify-content-center align-items-center">
                <Link href={path + item.slug_link} >
                  <a className="slid-item ">
                     <img src={item.img} alt='' className="text-center" />
                    {/*<span className="slid-decr">{item.title}</span>*/}
                    <span className="slid-text shadow">{item.descripton}</span>
                  </a>
                </Link>
            </div>
            );
        })           
          }
        </Slider>
      </div>
    );
  }
}

