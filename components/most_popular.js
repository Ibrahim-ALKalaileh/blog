import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fethcer";
import LoadingSpinner from "./_child/loadingSpinner";
import Error from "./_child/error";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination, Navigation } from "swiper";

export default function most_popular() {

  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <Error></Error>;

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
        {
          data.map((value) => (
            <SwiperSlide key={value.id}>
              <Posts data={value}></Posts>
            </SwiperSlide>
          ))
          }
        
      </Swiper>

    </section>
  );
}

function Posts({data}) {
  const {id,title,description,category,img,published,subtitle,author}=data;
    return (
      <div className="grid justify-evenly">
        <div className="images">
          <Link href={`/posts/${id}`}>
            <a>
              <Image src={img} width={600} height={400} />
            </a>
          </Link>
        </div>
  
        <div className="info flex justify-center flex-col py-4">
          <div className="cat">
            <Link href={`/posts/${id}`}>
              <a className="text-orange-600 hover:text-orange-800">
                {category}
              </a>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className="text-gray-800 hover:text-gray-600">- {published}</a>
            </Link>
          </div>
  
          <div className="title">
            <Link href={`/posts/${id}`}>
              <a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
                {title}
              </a>
            </Link>
          </div>
  
          <p className="text-gray-500 py-3 w-5/6">
            {description}
          </p>
  
          <Author> </Author>
        </div>
      </div>
    );
  }
