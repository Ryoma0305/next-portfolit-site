import type { NextPage } from "next";
// type
import PostType from "../types/PostType";
// service
import PostService from "../services/PostService";
// hooks
import usePostListSwr from "../hooks/swr/usePostListSwr";
// component
import Image from "next/image";

const Home: NextPage<{
  staticPostList: PostType[];
}> = ({ staticPostList }) => {
  const postList = usePostListSwr(staticPostList);
  return (
    <section className="mainvisual bg-main bg-center bg-no-repeat pt-[80px]">
      <div className="header-main relative mt-[5.6rem] mb-[1rem] flex flex-nowrap items-center px-5 sm:mx-auto sm:mt-[56px] sm:mb-0 sm:w-[86%] sm:px-0">
        <div className="header-main-text text-white">
          <h2 className="mainvisual-ttl font-accent text-[4rem] font-bold leading-[1.2] after:mt-4 after:mb-4 after:block after:h-[4px] after:w-[80%] after:bg-accent sm:text-[6rem] sm:after:w-[50%]">
            WELCOME<span className="block">TO THE</span>
            <span className="block">WORLD OF</span>
            <span className="block">ARIMURA RYOMA</span>
          </h2>
          <p className="mainvisual-text font-accent text-[2rem] leading-[1.4] sm:text-[3rem]">
            I'm Ryoma <span className="block">a web developer</span> based in
            Osaka, Japan.
          </p>
        </div>
      </div>
      <div className="scroll-arrow-wrap pb-16 text-center sm:pb-10">
        <a
          href="#about"
          className="scroll-arrow relative inline-block pt-[70px] text-white"
        >
          <span className="absolute top-0 left-1/2 -ml-3 box-border h-6 w-6 -rotate-45 animate-sdb border-l border-b border-b-white border-l-white"></span>
          Scroll
        </a>
      </div>
    </section>
    // <div className="flex">
    //   {postList!.map((post) => {
    //     return (
    //       <div key={post.id} className="w-1/3 p-4">
    //         <article className="shadow-sm shadow-gray-200">
    //           <div>
    //             <img
    //               className="w-full h-56 object-cover"
    //               src={post.featuredImage.url}
    //               alt=""
    //             />
    //           </div>
    //           <div className="py-4 px-5">
    //             <h1 className="font-bold">{post.title}</h1>
    //             <p>{post.excerpt}</p>
    //             <span>{post.date}</span>
    //           </div>
    //         </article>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export async function getStaticProps() {
  const staticPostList = await PostService.getList();
  return {
    props: {
      staticPostList: staticPostList,
    },
    revalidate: 10,
  };
}

export default Home;
