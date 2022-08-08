import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
export default function latest_posts() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/*grid columns*/}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Posts()}
        {Posts()}
        {Posts()}
        {Posts()}
        {Posts()}
        {Posts()}

      </div>
    </section>
  );
}

function Posts() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} className="rounded-md" width={500} height={350} />
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
