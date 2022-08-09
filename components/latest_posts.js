import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import getPosts from "../lib/helper";
import fetcher from "../lib/fethcer";
export default function latest_posts() {

  //getPosts(2).then(res=>console.log(res))

  const {data,isLoading,isError}=fetcher('api/posts')
  
  if(isLoading) return <div>Is Loading..</div>
  if(isError) return <div>Error</div>
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/*grid columns*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data.map((value)=>(
            <Posts data={value} key={value.id}></Posts>
          ))
        }

      </div>
    </section>
  );
}

function Posts({data}) {
  const {id,title,subtitle,category,img,published,author}=data;
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={img || '/'} className="rounded-md" width={500} height={350} />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
              {category||'unknown'}
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">- {published||'unknown'}</a>
          </Link>
        </div>

        <div className="title">
          <Link href={"/"}>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title||'Unknown'}
            </a>
          </Link>
        </div>

        <p className="text-gray-500 py-3 w-5/6">
          {subtitle||'Subtitle'}
        </p>

        {author?<Author></Author>:<></>}
      </div>
    </div>
  );
}
