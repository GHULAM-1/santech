type BlogTitleProps = {
  title: string;
};
export default function BlogTitle({ title }: BlogTitleProps) {
  return (
    <>
      <div className=" mb-6 text-2xl md:text-7xl leading-[2.8rem] md:leading-[6.7rem]">
        {title}
      </div>
    </>
  );
}
