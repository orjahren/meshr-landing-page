import Link from "next/link";
import placeholder from "../public/placeholder.webp";
import { Portrait, Section, USP } from "./components";
import NeoVis from "./neovis";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden snap-mandatory snap-y">
      <div className="flex w-screen justify-around fixed top-0 left-0 items-center justify-center p-5 bg-black z-50">
        <div className="font-bold cursor-pointer">
          <Link href="#mission" className="" scroll={true}>
            Mission
          </Link>
        </div>
        <div className="font-bold cursor-pointer">
          <Link href="#team" className="" scroll={true}>
            Team
          </Link>
        </div>
        <div className="font-bold cursor-pointer">
          <Link href="#contact" className="" scroll={true}>
            Contact
          </Link>
        </div>
      </div>
      <Section>
        <div className="pt-32 px-10">
          <h1 className="max-sm:text-6xl sm:text-8xl antialiazed font-bold">
            THE
            <br />
            MESHR
          </h1>
          <div className="text-2xl">Making Law Accessible</div>
         
        </div>
         <NeoVis />
      </Section>
      <Section id="mission">
        <div className="pt-32 px-10">
          <h1 className="max-sm:text-4xl sm:text-6xl antialiazed font-bold">
            Our Mission
          </h1>
          <div className="text-xl max-sm:w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12">
            Elevate your impact with us as we empower professionals and
            enthusiasts alike, providing enhanced accessibility for informed
            decisions and deeper understanding within the realm of human rights.
          </div>
        </div>
        <div className="flex max-sm:mt-5 mt-20 max-sm:flex-col sm:flex-row sm:justify-between md:justify-around p-5">
          <USP
            heading="🧠 AI Indexing"
            desc="We use an advanced AI System to systematically understand the
              context of the documents. We are then able to map them to
              Keywords."
          />
          <USP
            heading="✨ Graph Visualization"
            desc="Our indexing results are saved in a Graph Database which is later
              used to generate a visualization. By having a two-dimensional
              representation, it gets easier to understand large Datasets."
          />
          <USP
            heading="🔍 Advanced Search"
            desc="Any ambiguous query from free-text to whole documents can be
              performed. The returned sub-graph helps to explore similar
              documents"
          />
        </div>
      </Section>
      <Section id="team">
        <div className="pt-32 px-10">
          <h1 className="max-sm:text-4xl sm:text-6xl antialiazed font-bold">
            Our Team
          </h1>
          <div className="text-xl max-sm:w-11/12 sm:w-8/12 lg:w-6/12 xl:w-5/12">
            Explore the vibrant personalities that drive our youthful and highly
            motivated team, united by a shared passion for making a positive
            impact. Get to know the faces behind the mission:
          </div>
        </div>
        <div className="flex flex-wrap max-sm:mt-5 mt-20 justify-around max-sm:p-5 p-10 space-y-1 w-screen">
          <Portrait pb={placeholder} name="Inger" desc="UI/UX" />
          <Portrait pb={placeholder} name="Lorenz" desc="Code" />
          <Portrait pb={placeholder} name="Oliver" desc="Code" />
          <Portrait pb={placeholder} name="Nasjida" desc="Law" />
          <Portrait pb={placeholder} name="Dan" desc="KIS" />
        </div>
      </Section>
    </main>
  );
}
