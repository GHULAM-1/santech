import { blogCardsDataT, BlogType } from "@/types/all-types";
import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
export default function BlogCard({
  authorName,
  bannerImage,
  estimatedReadingTime,
  mainHeading,
  publishedAt,
  slug,
  tag,
}: blogCardsDataT) {

  console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("Sanity Token (Server Only):", process.env.SANITY_API_TOKEN);

  return (
    <>
      <a href={`/blog/${slug}`} className="w-[180px] md:w-[365px] flex flex-col gap-5">
        
        <div className="flex justify-between w-full">
          <div className="flex w-full gap-3 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{authorName}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-[13px]">
              <div>{authorName}</div>
              <div className="text-[#FFFFFF9A] font-light">Editor</div>
            </div>
          </div>
          <div className="flex gap-5 whitespace-nowrap items-center justify-center">
            <Clock className="text-[#FFFFFF9A] font-light w-[13px] h-[13px]" />
            <span className="text-[#FFFFFF9A] font-light text-[13px]">
              {estimatedReadingTime}
            </span>
          </div>
        </div>

        <Image
          width={365}
          height={255}
          src={bannerImage}
          alt=""
          className="rounded-2xl"
        />
        <div className="text-[22px]  font-semibold">{mainHeading}</div>
      </a>
    </>
  );
}
