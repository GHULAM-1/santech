import Glossary from "@/components/glossary";
import Hero from "@/components/hero";

export default function GlossaryPage() {
  return (

    <div>
      <div className="w-full">
        <Hero backgroundImage="/glossaryHero.png" heading="Glossary" description="Clear Definitions for All Key Terms and Concepts You Need to Know"/>
        </div>
      <Glossary />
    </div>
  );
}
