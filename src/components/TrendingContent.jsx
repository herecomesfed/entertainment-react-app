import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import image from "../assets/thumbnails/112/regular/large.jpg";
import movieIcon from "../assets/icon-nav-movies.svg";
import iconBookmark from "../assets/icon-bookmark-empty.svg";

import Card from "./Card";
console.log(image);

const TrendingContent = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 2.5,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 1.5,
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
                  <Card d={d} iconBookmark={iconBookmark} absolute={true} />
                </swiper-slide>
              );
            })}
        </swiper-container>
      </div>
    </>
  );
};

export default TrendingContent;
