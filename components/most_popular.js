import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";

export default function most_popular() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/*Swiper*/}
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{Posts()}</SwiperSlide>
        <SwiperSlide>{Posts()}</SwiperSlide>
        <SwiperSlide>{Posts()}</SwiperSlide>
        <SwiperSlide>{Posts()}</SwiperSlide>
        <SwiperSlide>{Posts()}</SwiperSlide>
      </Swiper>

    </section>
  );
}

function Posts() {
    return (
      <div className="grid justify-evenly">
        <div className="images">
          <Link href={"/"}>
            <a>
              <Image src={"/images/img1.jpg"} width={600} height={400} />
            </a>
          </Link>
        </div>
  
        <div className="info flex justify-center flex-col py-4">
          <div className="cat">
            <Link href={"/"}>
              <a className="text-orange-600 hover:text-orange-800">
                Bussiness,Travel
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-gray-800 hover:text-gray-600">- August 8,2022</a>
            </Link>
          </div>
  
          <div className="title">
            <Link href={"/"}>
              <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
                woow this is my first post
              </a>
            </Link>
          </div>
  
          <p className="text-gray-500 py-3 w-5/6">
            hoooly shit this could be the first description without me knowing how
            to dev website even woow holy fucking shit this is soo cool i cant
            wait to finish this blog
          </p>
  
          <Author> </Author>
        </div>
      </div>
    );
  }
