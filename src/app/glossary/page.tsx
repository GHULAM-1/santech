import Glossary from "@/components/glossary";
import Hero from "@/components/hero";

export default function GlossaryPage() {
  return (

    <div>
        <Hero backgroundImage="/glossaryHero.png" heading="Glossary" description="Clear Definitions for All Key Terms and Concepts You Need to Know"/>
      <h1 className="text-center text-3xl font-bold mb-8">Glossary</h1>
      <Glossary />
    </div>
  );
}
