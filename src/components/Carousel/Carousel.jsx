import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "../Carousel/Carousel.module.scss";
import { load_categories } from "../../asyncActions/request_products";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const limitSlider = 5;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await load_categories(limitSlider); // Передаем лимит
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={s.sliderContainer}>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.download_url} alt={image.author} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
