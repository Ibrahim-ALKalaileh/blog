import Link from "next/link";
import Image from "next/image";
import Author from "./author";
import LoadingSpinner from "./loadingSpinner";
import Error from "./error";
import fetcher
 from "../../lib/fethcer";
export default function RelatedPosts() {

  const {data,isLoading,isError}=fetcher('api/posts')
  
  if(isLoading) return <LoadingSpinner></LoadingSpinner>
  if(isError) return <Error></Error>

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
        {data.map((value)=>(
          <Posts data={value} key={value.id}></Posts>
        ))}
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
              className="rounded"
              width={300}
              height={200}
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
