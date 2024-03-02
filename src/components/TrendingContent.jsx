import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import Card from "./Card";

const TrendingContent = ({ data, handleBookmarkShow }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      // slidesPerView: 2.5,
      spaceBetween: 20,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
        },
        320: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1366: {
          slidesPerView: 3.5,
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);
  return (
    <>
      <div className="trending">
        <h2 className="heading-md m-block-2">Trending</h2>
        <swiper-container init="false" ref={swiperRef}>
          {data
            .filter((d) => {
              return d.isTrending === true;
            })
            .map((d) => {
              return (
                <swiper-slide key={d.title}>
                  <Card
                    d={d}
                    absolute={true}
                    handleBookmarkShow={handleBookmarkShow}
                  />
                </swiper-slide>
              );
            })}
        </swiper-container>
      </div>
    </>
  );
};

export default TrendingContent;
