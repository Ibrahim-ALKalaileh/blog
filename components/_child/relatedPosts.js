import Link from "next/link";
import Image from "next/image";
import Author from "./author";
export default function RelatedPosts() {
  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>

      <div className="flex flex-col gap-10">
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
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={"/images/img1.jpg"}
              className="rounded"
              width={300}
              height={200}
            />
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
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              woow this is my first post
            </a>
          </Link>
        </div>

        <Author> </Author>
      </div>
    </div>
  );
}
