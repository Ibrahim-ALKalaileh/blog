import Head from "next/head";
import Image from "next/image";
import Format from "./layout/format";
// components
import Trending from "./components/trending";
import Latest_posts from "./components/latest_posts";
import Most_popular from "./components/most_popular";
export default function Home() {
  return (
    <Format>
      <Trending></Trending>
      <Latest_posts></Latest_posts>
      <Most_popular></Most_popular>
    </Format>
  );
}


