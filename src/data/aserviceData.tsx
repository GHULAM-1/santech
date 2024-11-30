import { aserviceType } from "@/types/all-types";
import {
  CodeXml,
  MonitorSmartphone,
  Activity,
  EarthLock,
  SendToBack,
  Network,
  Dock,
} from "lucide-react";

// Define your services with multiple cards
const appDev: aserviceType = {
  id: 1,
  serviceName: "App Dev",
  heroTitle: "Turn Your Idea into an MVP with Tailored App Development",
  heroDescription:
    "From concept to launch, we create apps designed to meet your business needs, delivering seamless functionality, exceptional user experience, and full platform support.",
  featureHeading:
    "Empowering Businesses with Scalable and High-Performance Applications",
  cards: [
    {
      icon: <CodeXml size={30} />, // Example icon
      heading: "Custom Solutions",
      description:
        "Tailored applications designed to meet the specific demands of your sector.",
    },
    {
      icon: <SendToBack size={30} />, // Example icon
      heading: "User-Centric Design",
      description: "Creating intuitive and engaging user experiences.",
    },
    {
      icon: <Network size={30} />, // Example icon
      heading: "End-to-End Development",
      description:
        "From planning and design to testing and deployment, we have got you covered.",
    },
    {
      icon: <Dock size={30} />, // Example icon
      heading: "Post-Launch Support",
      description:
        "Continuous monitoring, updates, and maintenance to keep your app running smoothly.",
    },
  ],
  outcomeheading: "Key Outcomes of Our App Development Services",
  outcomes: [
    "Improved Operational Efficiency:Automate tasks and streamline workflows for better productivity.",
    "Scalable and high-performance applications",
    "Enhanced Customer Engagement:Deliver intuitive and engaging user experiences to boost customer satisfaction and retention.",
    "Scalable Architecture:Develop applications that grow with your business, accommodating increased user demand and functionality.",
    "Secure and Reliable Performance:Ensure data protection and app stability with cutting-edge security measures and rigorous testing.",
    "Faster Time-to-Market:Accelerate your app’s launch with agile development processes and efficient project management.",
    "Cross-Platform Compatibility:Build apps that perform seamlessly across different devices and platforms, maximizing your reach.",
    "Data-Driven Insights:Integrate analytical tools to gain actionable insights, helping you make informed business decisions.",
    "Cost Efficiency:Reduce development and operational costs through optimized coding practices and resource management.",
  ],
};

const webDev: aserviceType = {
  id: 2,
  serviceName: "Web Dev",
  heroTitle: "Build Your Digital Presence with Cutting-Edge Web Development",
  heroDescription:
    "We design and develop high-performing, user-friendly websites tailored to your business goals, ensuring a seamless online experience.",
  featureHeading: "Innovative Web Solutions to Drive Your Business Forward",
  cards: [
    {
      icon: <CodeXml size={30} />, // Example icon
      heading: "Custom Website Development",
      description:
        "Fully tailored websites that reflect your brand and cater to your unique needs",
    },
    {
      icon: <MonitorSmartphone size={30} />, // Example icon
      heading: "Responsive Websites",
      description:
        "Optimized for all devices to deliver a consistent user experience.",
    },
    {
      icon: <Activity size={30} />, // Example icon
      heading: "SEO Optimization",
      description:
        " Built with best practices to improve search engine rankings and drive traffic.",
    },
    {
      icon: <EarthLock size={30} />, // Example icon
      heading: "Robust Security Measures",
      description:
        "  Protect your site with state-of-the-art security solutions.",
    },
  ],
  outcomeheading: "Key Outcomes of Our Web Development Services",
  outcomes: [
    "Enhanced User Experience:Design intuitive interfaces and seamless navigation to engage visitors.",
    "Improved Performance and Speed:Fast-loading websites that enhance user satisfaction and reduce bounce rates.",
    "Scalable Solutions for Growing Businesses:Websites built to handle increased traffic and expanded functionality as your business grows.",
    "Search Engine Visibility:Drive more traffic with optimized content and technical SEO, boosting your online presence.",
    "Cross-Browser and Cross-Device Compatibility:Ensure consistent functionality and aesthetics across all major browsers and devices.",
    "Integrated Analytics and Tracking:Gain actionable insights to monitor website performance and user behavior.",
    "Secure and Reliable Platforms:Protect your site from cyber threats with advanced security protocols.",
    "Streamlined Content Management:Easily update and manage your website’s content with user-friendly CMS solutions.",
    "Faster Deployment and Time-to-Market:Efficient development processes that get your website live quickly.",
  ],
};
const propType: aserviceType = {
  id: 3,
  serviceName: "PropTech",
  heroTitle: "Innovate and Transform Real Estate with PropTech Solutions",
  heroDescription:
    "From property management to smart building solutions, we empower the real estate industry with cutting-edge technology designed to streamline operations and enhance decision-making.",
  featureHeading:
    "Revolutionizing Real Estate with Technology-Driven Solutions.",
  cards: [
    {
      icon: <CodeXml size={30} />, // Example icon
      heading: "Smart Building Management",
      description:
        "IoT-enabled solutions for real-time monitoring and optimization of building performance.",
    },
    {
      icon: <MonitorSmartphone size={30} />, // Example icon
      heading: "Data-Driven Insights",
      description:
        "Advanced analytics tools to help make informed investment and management decisions.",
    },
    {
      icon: <Activity size={30} />, // Example icon
      heading: "Automated Property Management",
      description:
        "Simplify operations with automated rent collection, maintenance requests, and tenant communication.",
    },
    {
      icon: <EarthLock size={30} />, // Example icon
      heading: "Enhanced Customer Experience",
      description:
        "Provide tenants and buyers with seamless digital experiences, including virtual tours and online portals.",
    },
  ],
  outcomeheading:
    "Key Outcomes of Our PropTech Services: Driving Innovation in Real Estate",
  outcomes: [
    "Streamlined Property Operations:Automate administrative tasks, reducing workload and improving efficiency.  ",
    "Smart Building Insights:Use IoT technology to monitor energy usage, security, and maintenance needs in real-time.",
    "Enhanced Tenant Engagement:Provide tenants with self-service tools for communication, payments, and support.      ",
    "Data-Driven Decision-Making:Leverage big data analytics to identify trends and make more strategic property investments.",
    "Virtual and Augmented Reality Integration:Offer immersive virtual tours and augmented reality experiences for potential buyers and tenants.",
    "Sustainability and Energy Efficiency:Implement green technologies to reduce environmental impact and optimize resource usage.",
    "Improved Asset Management:Track property performance and maximize ROI with real-time analytics and reporting.      ",
    "Scalable Solutions for Growing Portfolios:Whether managing a single building or an expansive portfolio, our solutions scale to meet your needs.",
  ],
};

const consultansy: aserviceType = {
  id: 4,
  serviceName: "Consultancy",
  heroTitle: "Unlock Your Business Potential with Expert Consultancy",
  heroDescription:
    "Providing tailored strategies and insights to drive growth, streamline operations, and maximize efficiency across all areas of your business.",
  featureHeading: "Strategic Guidance for Sustainable Growth and Innovation.",
  cards: [
    {
      icon: <CodeXml size={30} />, // Example icon
      heading: "Tailored Business Strategy",
      description:
        "Develop a roadmap aligned with your unique goals, market, and challenges.",
    },
    {
      icon: <MonitorSmartphone size={30} />, // Example icon
      heading: "Operational Excellence",
      description:
        "Identify and implement improvements to optimize workflow, productivity, and cost efficiency..",
    },
    {
      icon: <Activity size={30} />, // Example icon
      heading: "Market Analysis & Competitive Positioning",
      description:
        "Gain insights into industry trends and refine your competitive edge.",
    },
    {
      icon: <EarthLock size={30} />, // Example icon
      heading: "Scalable Solutions for Growth",
      description:
        "Design flexible strategies that grow with your business and adapt to changing demands.",
    },
  ],
  outcomeheading:
    "Key Outcomes of Our Consultancy Services: Transformative Strategies for Long-Term Success",
  outcomes: [
    "Enhanced Operational Efficiency:Streamline processes and reduce costs to maximize productivity across departments.",
    "Data-Driven Decision Making:Use data and analytics to inform strategies, enabling smarter, faster business decisions",
    "Improved Financial Performance:Identify cost-saving opportunities and improve budget allocation for better financial outcomes.",
    "Effective Change Management:Implement sustainable change to enhance adaptability and resilience.",
    "Comprehensive Risk Management:Identify potential risks and develop mitigation strategies to protect your business",
    "Enhanced Customer Experience:Improve customer satisfaction and loyalty with strategic initiatives that cater to client needs/",
    "Leadership and Team Development:Build strong leadership and empowered teams to drive company growth and innovation.",
    "Scalable Business Models:Create business models that allow for flexible expansion and scalability as your company grows.",
  ],
};
const marketing: aserviceType = {
  id: 5,
  serviceName: "Marketing",
  heroTitle: "Drive Growth and Engagement with Strategic Marketing Solutions ",
  heroDescription:
    "From brand strategy to digital campaigns, we provide tailored marketing solutions designed to elevate your brand, reach your target audience, and drive measurable results.  ",
  featureHeading: "Elevate Your Brand with Proven Marketing Strategies.  ",
  cards: [
    {
      icon: <CodeXml size={30} />, // Example icon
      heading: "Comprehensive Brand Strategy",
      description:
        "Define and position your brand with a unique identity that resonates with your audience.      ",
    },
    {
      icon: <MonitorSmartphone size={30} />, // Example icon
      heading: "Data-Driven Campaigns",
      description:
        "Use analytics and insights to optimize every marketing initiative for maximum impact.",
    },
    {
      icon: <Activity size={30} />, // Example icon
      heading: "Multi-Channel Approach",
      description:
        "Engage customers across digital, social, and traditional channels to maximize reach.      ",
    },
    {
      icon: <EarthLock size={30} />, // Example icon
      heading: "Customized Content Creation",
      description:
        "Develop high-quality, engaging content that builds trust and loyalty with your audience.      ",
    },
  ],
  outcomeheading:
    "Key Outcomes of Our Marketing Services: Creating Lasting Impact and Business Growth",
  outcomes: [
    "Enhanced Brand Visibility:Increase brand awareness and recognition through targeted campaigns and strategic positioning.      ",
    "Improved Customer Engagement:Build stronger connections with your audience through interactive and relevant content.      ",
    "Higher Conversion Rates:Drive more leads and convert them into loyal customers with personalized marketing approaches.      ",
    "Data-Driven Insights and Reporting:Track performance metrics to make informed decisions and continuously optimize campaigns.      ",
    "Consistent Brand Messaging:Ensure a cohesive brand voice across all channels to strengthen brand identity.      ",
    "Social Media Growth and Influence:Leverage social platforms to increase engagement, build community, and expand your reach.      ",
    "SEO and Content Marketing:Improve organic visibility with SEO-optimized content that attracts and engages your target audience.      ",
    "Cost-Effective Advertising:Maximize your marketing budget with carefully planned and executed advertising strategies.      ",
  ],
};

const staffing: aserviceType = {
  id: 6,
  serviceName: "Staffing",
  heroTitle: "Build Your Dream Team with Top Talent Staffing Solutions",
  heroDescription:
    "Providing skilled professionals tailored to your business needs, from short-term projects to long-term roles, ensuring the right fit for every position",
  featureHeading: "Reliable Staffing Solutions to Strengthen Your Workforce",
  cards: [
    {
      icon: <CodeXml size={30} />, // Example icon
      heading: "Expert Talent Matching:",
      description:
        "We carefully match candidates based on skills, experience, and cultural fit.",
    },
    {
      icon: <MonitorSmartphone size={30} />, // Example icon
      heading: "Flexible Staffing Options",
      description:
        "Offering temporary, contract, and permanent staffing solutions tailored to your needs.",
    },
    {
      icon: <Activity size={30} />, // Example icon
      heading: "Industry-Specific Expertise",
      description:
        "Access professionals with specialized knowledge in your sector",
    },
    {
      icon: <EarthLock size={30} />, // Example icon
      heading: "End-to-End Recruitment Support",
      description:
        "From sourcing to onboarding, we handle every step of the hiring process",
    },
  ],
  outcomeheading:
    "Key Outcomes of Our Consultancy Services: Transformative Strategies for Long-Term Success",
  outcomes: [
    "Enhanced Operational Efficiency:Streamline processes and reduce costs to maximize productivity across departments.",
    "Data-Driven Decision Making:Use data and analytics to inform strategies, enabling smarter, faster business decisions",
    "Improved Financial Performance:Identify cost-saving opportunities and improve budget allocation for better financial outcomes.",
    "Effective Change Management:Implement sustainable change to enhance adaptability and resilience.",
    "Comprehensive Risk Management:Identify potential risks and develop mitigation strategies to protect your business",
    "Enhanced Customer Experience:Improve customer satisfaction and loyalty with strategic initiatives that cater to client needs/",
    "Leadership and Team Development:Build strong leadership and empowered teams to drive company growth and innovation.",
    "Scalable Business Models:Create business models that allow for flexible expansion and scalability as your company grows.",
  ],
};

export const aserviceData: aserviceType[] = [
  appDev,
  webDev,
  propType,
  consultansy,
  marketing,
  staffing,
];
