import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
export default function section1() {
    const bg={
        background:"url('/images/banner.png') no-repeat",
        backgroundPosition:"right"
    }
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        {Slide()}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={"/"}>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>

      <div className="info flex justify-center flex-col">
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
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              woow this is my first post
            </a>
          </Link>
        </div>

        <p className="text-gray-500 py-3">
          hoooly shit this could be the first description without me knowing how
          to dev website even woow holy fucking shit this is soo cool i cant
          wait to finish this blog
        </p>

        <Author> </Author>
      </div>
    </div>
  );
}
