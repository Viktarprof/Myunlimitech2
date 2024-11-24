import React from "react";
import Carousel from "../Carousel/Carousel";
import s from "../CarouselContainer/CarouselContainer.module.scss"
import Button from "../UI/Button/Button";

const CarouselContainer = () => {
  return (
    <div className={s.coruseleContainer}>
      <Carousel />
      <div className={s.textNexCollection}>
        <div>
          <h3>Nowa kolekcja</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab.
          </p>
        </div>
        <Button styles={'btnMore'} text={"Zobacz więcej"} />
      </div>
    </div>
  );
};

export default CarouselContainer;
