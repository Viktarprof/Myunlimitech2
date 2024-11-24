import React, { useEffect, useState } from "react";
import s from "../CategoryProducts/CategoryProducts.module.scss";
import { load_categories } from "../../asyncActions/request_products";

const CategoryProducts = () => {
  const [images, setImages] = useState([]);
  const limitCategory = 8;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await load_categories(limitCategory);
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);


  return (
    <div className={s.gridContainer}>

      {images.map((_, groupIndex) => {
        const group = images.slice(groupIndex * 2, groupIndex * 2 + 2); 
        if (group.length < 2) return null;

        return (
          <div key={groupIndex} className={groupIndex % 2 === 0 ? s.groupContainer : s.groupContainerRevers   }>
            {group.map((image, index) => (
              <div
                key={image.id}
                className={index % 2 === 0 ? s.largeImage : s.smallImage}
              >
                <img src={image.download_url} alt={image.author} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryProducts;
