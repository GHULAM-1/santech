export type PageHeadingProps= {
    heading: string | undefined;
    description: string | undefined;
    backgroundImage: string; 
    showButton?: boolean; 
    showClients?: boolean; 
  }

  interface AboutUsProps {
    title: string;
    description: string[];
    image: string;
  }

  
interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServicesProps {
  services: Service[];
  heading?:string
}

interface ImageCardProps {
  image: string;
  description?: string;
  extraClass?: string;
}
interface TextCardProps {
  title: string;
  description?: string;
  bgColor?: string;
}
// Props type for individual value cards
type ValueCardProps = {
  number: string;
  title: string;
  bgImage: string;
};

// Props type for the ValuesSection
type ValuesSectionProps = {
  values: ValueCardProps[];
  containerGap?: string;
};

interface GlossaryItem {
  title: string;
  description: string;
}

export type blogCardsDataT = {
  authorName: string;
  bannerImage: string;
  estimatedReadingTime: string;
  mainHeading: string;
  publishedAt: string;
  slug: string;
  tag: string;
};


export type BlogType = {
  image: string;
  mainText: string;
  ownerName: string;
  ownerImage: string;
  date: string;
  timeToRead: string;
  slug: string;
};




interface GlossaryGroup {
  letter: string;
  items: GlossaryItem[];
}