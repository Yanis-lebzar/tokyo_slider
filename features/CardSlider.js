import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import PlaceCard from "../components/PlaceCard";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function CardSlider() {
  const [count, setCount] = useState(0);
  const descriptions = [
    { name: "Tokyo Tower", country: "Japan", img: "tokyoDay.png", key: 0 },

    {
      name: "Old Tokyo",
      country: "Japan",
      img: "oldTokyo.png",
      key: 1,
    },
    {
      name: "Winter in Tokyo",
      country: "Japan",
      img: "winterTokyo.png",
      key: 2,
    },
    {
      name: "Tokyo blossoms",
      country: "Japan",
      img: "blossomTokyo.png",
      key: 3,
    },

    {
      name: "Street Food",
      country: "Japan",
      img: "streetFoodTokyo.png",
      key: 4,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ease: "easeInOut", duration: 1, delay: 1 },
      }}
      className=" lg:scale-100 flex flex-1"
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        initialSlide={0}
        allowSlidePrev={false}
        loopPreventsSlide={true}
        autoplay={{
          delay: 3000,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 500,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {descriptions.map(
          (description, key) => (
            console.log(key),
            (
              <SwiperSlide className="">
                <PlaceCard
                  key={description.key}
                  name={description.name}
                  country={description.country}
                  bgImg={description.img}
                />
              </SwiperSlide>
            )
          )
        )}
      </Swiper>
    </motion.div>
  );
}

export default CardSlider;
