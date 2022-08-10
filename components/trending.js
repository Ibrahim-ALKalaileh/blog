import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fethcer";
import LoadingSpinner from "./_child/loadingSpinner";
import Error from "./_child/error";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function trending() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <Error></Error>;

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
          data.map((value) => (
            <SwiperSlide key={value.id}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </section>
  );
}

function Slide({data}) {
  const {id,title,description,category,img,published,author}=data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || '/'} width={600} height={600} />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">{category||'unknown'}</a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">- {published||'unknown'}</a>
          </Link>
        </div>

        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>

        <p className="text-gray-500 py-3 w-5/6">{description||'unknown'}</p>

        <Author> </Author>
      </div>
    </div>
  );
}
