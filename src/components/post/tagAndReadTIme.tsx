import Pills from "@/components/ui/pills";
import { PillsProps } from "@/components/ui/pills";
type TagAndReadTimeProps = {
  tag: string;
  readTime: number;
};

export default function TagAndReadTime({ tag, readTime }: TagAndReadTimeProps) {
  return (
    <>
      <div className="flex justify-between mb-8 text-base items-center md:text-3xl TABLET:mb-6 -mt-14 md:-mt-0">
        <Pills
          intent={tag?.split(" ").join("") as PillsProps["intent"]}
          size="regularFilterPills"
          className="bg-primary rounded-full text-white text-base md:text-xl "
        >
          {tag}
        </Pills>
        <div className="">
          {readTime} min read
        </div>
      </div>
    </>
  );
}
