import React, { Component } from "react";
import Slider from "react-slick";
import A from './A';
import style from '../styles/Slider.module.css';

export default class SliderI extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'h-500',
      autoplay: true,
      speed: 3500,
      fade: true,
      cssEase: "ease-in-out"
    };
    return (
      <div>
        <Slider {...settings}>
            {this.props.data.map((item, index) => {    
                return  (
                    <div key={index} className="d-flex flex-column flex-sm-row">
                <div className="flex-1 ">
                <picture>
                    <img
                    className="d-block w-100 h-100 slider-img"
                    src={item.image}
                    alt={"First slide"}
                    />
                </picture>
                </div>
                <div className="flex-2 bg-purple p-tit">
                    <div className=" d-flex flex-column bd-highlight h-100">
                        <div className="bd-highlight mb-5">
                            <h3 className={style.text}>
                                {item.title}
                            </h3>
                        </div>
                        <div className="mt-5 d-flex justify-content-end bd-highlight mt-auto">
                            <div className="d-flex align-items-end"> <A text={'Продукция'} href={'partners'} style={'btn-slider'}/></div>
                        </div>
                    </div>   
                </div> 
          </div>
                );
            })}
        </Slider>
      </div>
    );
  }
}



