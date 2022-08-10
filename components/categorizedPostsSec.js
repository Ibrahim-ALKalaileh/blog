import Author from "./_child/author";
import Image from "next/image";
import Link from "next/link";
import fetcher from "../lib/fethcer";
import LoadingSpinner from "./_child/loadingSpinner";
import Error from "./_child/error";

export default function categorizedPostsSec() {

  const {data,isLoading,isError}=fetcher('api/posts')
  
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Bussiness</h1>
          <div className="flex flex-col gap-6">
            {/*posts*/}
            {data[1]?<Posts data={data[1]} key={data[1].key}></Posts>:<></>}
            {data[2]?<Posts data={data[2]} key={data[2].key}></Posts>:<></>}
            {data[3]?<Posts data={data[3]} key={data[3].key}></Posts>:<></>}
            
          </div>
        </div>

        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {/*posts*/}
            {data[4]?<Posts data={data[4]} key={data[4].key}></Posts>:<></>}
            {data[5]?<Posts data={data[5]} key={data[5].key}></Posts>:<></>}
            {data[2]?<Posts data={data[2]} key={data[2].key}></Posts>:<></>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Posts({data}) {
  const {id,title,subtitle,category,img,published,author}=data;
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img}
              className="rounded-md"
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title}
            </a>
          </Link>
        </div>

        <Author> </Author>
      </div>
    </div>
  );
}
