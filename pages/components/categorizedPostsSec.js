import Author from "./_child/author";
import Image from "next/image";
import Link from "next/link";

export default function categorizedPostsSec() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Bussiness</h1>
          <div className="flex flex-col gap-6">
            {/*posts*/}
            {Posts()}
            {Posts()}
            {Posts()}
            {Posts()}
            </div>
        </div>

        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {/*posts*/}
            {Posts()}
            {Posts()}
            {Posts()}
            {Posts()}
            </div>
        </div>
      </div>
    </section>
  );
}

function Posts() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              className="rounded"
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="info flex justify-center flex-col py-4">
          <div className="cat">
            <Link href={"/"}>
              <a className="text-orange-600 hover:text-orange-800">
                Bussiness,Travel
              </a>
            </Link>
            <Link href={"/"}>
              <a className="text-gray-800 hover:text-gray-600">
                - August 8,2022
              </a>
            </Link>
          </div>

          <div className="title">
            <Link href={"/"}>
              <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
                woow this is my first post
              </a>
            </Link>
          </div>

          <Author> </Author>
        </div>
      </div>
    </div>
  );
}
