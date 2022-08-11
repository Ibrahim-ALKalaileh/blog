import Author from "../../components/_child/author";
import Format from "../../layout/format";
import Image from "next/image";
import RelatedPosts from "../../components/_child/relatedPosts";
import getPosts from "../../lib/helper";
import fetcher from "../../lib/fethcer";
import LoadingSpinner from "../../components/_child/loadingSpinner";
import Error from "../../components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function Page({fallback}) {
  const router = useRouter();
  const {postId}=router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (isError) return <Error></Error>;

  return <SWRConfig value={{fallback}}>
    <Article {...data}></Article>
  </SWRConfig>;
}

function Article({ title, img, description, subtile }) {
  return (
    <Format>
      <section className="max-w-md mx-auto py-16 md:max-w-4xl">
        <div className="flex justify-center">
          <Author></Author>
        </div>

        <div className="post py-10">
          <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>

          <p className="text-gray-500 text-xl text-center">{subtile}</p>

          <div className="py-10 ">
            <Image src={img} width={900} height={600} className="rounded-md"/>
          </div>

          <div className="content tect-gray-600 text-lg flex flex-col gap-4">
            <p>{description}</p>
            <p>{description}</p>
            <p>{description}</p>
            <p>{description}</p>
          </div>
        </div>
        <RelatedPosts></RelatedPosts>
      </section>
    </Format>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPosts(params.postId);
  return {
    props: {
      fallback:{
        '/api/posts':posts
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
