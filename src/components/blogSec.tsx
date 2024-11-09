"use client";
import SectionDivider from "./secDivider";
import { blogCardsDataT, BlogType } from "@/types/all-types";
// import { blogsDummyData } from "@/data/all-blog-data";
import BlogCard from "./blogCard";
export default function BlogSec({ data }: { data: blogCardsDataT[] }) {
  return (
    <>
      <div className="max-w-[1365px] w-full flex flex-col justify-center items-center mb-2 mt-8 md:mt-0 md:mb-24">
        <SectionDivider text="Our Blogs" />
        <div className="text-white flex justify-start w-full gap-12 flex-wrap ">
          {data.map((blog: blogCardsDataT, index) => {
            return (
              <div className=" flex flex-row gap-0 md:gap-12">
                <BlogCard
                  authorName={blog.authorName}
                  bannerImage={blog.bannerImage}
                  estimatedReadingTime={blog.estimatedReadingTime}
                  mainHeading={blog.mainHeading}
                  publishedAt={blog.publishedAt}
                  slug={blog.slug}
                  tag={blog.tag}
                  key={index}
                />
                {index !== data.length - 1 ? (
                  <div className="border-[1px] h-full border-neutral-400 border-opacity-20"></div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
