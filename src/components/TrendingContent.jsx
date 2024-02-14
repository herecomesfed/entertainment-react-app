import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import image from "../assets/thumbnails/112/regular/large.jpg";
import movieIcon from "../assets/icon-nav-movies.svg";
console.log(image);

const TrendingContent = ({ data }) => {
  console.log(data);
  console.log(
    "Tutti i map",
    data.map((d) => {
      return d.title;
    })
  );
  console.log(
    "Map Filtrati",
    data
      .filter((d) => {
        return d.isTrending === true;
      })
      .map((d) => {
        return d.title;
      })
  );
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1.5,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 4,
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
        <h2 className="heading-md">Trending</h2>
        <swiper-container init="false" ref={swiperRef}>
          {data
            .filter((d) => {
              return d.isTrending === true;
            })
            .map((d) => {
              return (
                <swiper-slide key={d.title}>
                  <div className="trending__content">
                    <img
                      src={d.thumbnail.trending.large.replace("./", "./src/")}
                      alt=""
                    />
                    <div className="trending__text">
                      <div className="trending__info paragraph-sm">
                        {d.year} • <img src={`${d.category}Icon`} alt="" />
                        {d.category} • {d.rating}
                      </div>
                      <div className="trending__title heading-sm">
                        {d.title}
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              );
            })}
          {/* <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide> */}
        </swiper-container>
      </div>
    </>
  );
};

export default TrendingContent;
