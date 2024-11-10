export type PageHeadingProps= {
    heading: string | undefined;
    description: string | undefined;
    backgroundImage: string; 
    showButton?: boolean; 
    showClients?: boolean; 
  }

  export type  AboutUsProps =  {
    title: string;
    description: string[];
    image: string;
  }

  
export type  Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export type  ServicesProps = {
  services: Service[];
  heading?:string
}

export type  ImageCardProps = {
  image: string;
  description?: string;
  extraClass?: string;
}
export type  TextCardProps = {
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


export type ValuesSectionProps = {
  values: ValueCardProps[];
  containerGap?: string;
};

export type  GlossaryItem = {
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




export type  GlossaryGroup = {
  letter: string;
  items: GlossaryItem[];
}