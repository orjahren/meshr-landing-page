import Link from "next/link";
import placeholder from "../public/placeholder.webp";
import { Contact, Portrait, Section, USP } from "./components";
import AnimationOnScroll from "./animateonscroll";
import "./globals.css";
import graph from "../public/graph.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden snap-proximity snap-y">
      <div className="flex w-screen justify-around fixed top-0 left-0 items-center justify-center p-5 bg-white dark:bg-black z-50">
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
      <Section className=" flex flex-col justify-items-center">
        <div className="pt-32 px-10 z-50">
          <AnimationOnScroll classNameInView={"vis"} classNameNotInView={"hid"}>
            <h1 className="max-sm:text-6xl sm:text-8xl drop-shadow-xl-d dark:drop-shadow-xl antialiazed font-bold">
              THE
              <br />
              MESHR
            </h1>
            <div className="text-2xl drop-shadow-xl-d dark:drop-shadow-xl">
              Making Law Accessible
            </div>
          </AnimationOnScroll>
        </div>
        <Image
          className="max-lg:h-[60%] lg:h-[80%] w-[100%] object-contain max-lg:self-center lg:fixed lg:inset-x-2/4 lg:inset-y-2/4 lg:translate-x-[-45%] lg:translate-y-[-50%] pointer-events-none"
          alt="graph"
          width="700"
          height="700"
          src={graph}
        />
      </Section>
      <Section id="mission">
        <div className="pt-32 px-10">
          <AnimationOnScroll classNameInView={"vis"} classNameNotInView={"hid"}>
            <h1 className="max-sm:text-4xl sm:text-6xl drop-shadow-xl-d dark:drop-shadow-xl antialiazed font-bold">
              Our Mission
            </h1>
            <div className="text-xl max-sm:w-11/12 sm:w-8/12 lg:w-6/12 xl:w-4/12">
              Elevate your impact with us as we empower professionals and
              enthusiasts alike, providing enhanced accessibility for informed
              decisions and deeper understanding within the realm of human
              rights.
            </div>
          </AnimationOnScroll>
        </div>

        <div className="flex max-sm:mt-5 mt-20 md:mt-32 lg:mt-52 xl:mt-64 max-sm:flex-col sm:flex-row sm:justify-between md:justify-around p-5 usps">
          <USP
            heading="🧠 AI Indexing"
            desc="We use an advanced AI System to systematically understand the
              context of the documents. We are then able to map them to
              Keywords."
            className="li-el1"
          />

          <USP
            heading="✨ Graph Visualization"
            desc="Our indexing results are saved in a Graph Database which is later
              used to generate a visualization. By having a two-dimensional
              representation, it gets easier to understand large Datasets."
            className="li-el2"
          />

          <USP
            heading="🔍 Advanced Search"
            desc="Any ambiguous query from free-text to whole documents can be
              performed. The returned sub-graph helps to explore similar
              documents"
            className="li-el3"
          />
        </div>
      </Section>
      <Section id="team">
        <div className="pt-32 px-10">
          <AnimationOnScroll classNameInView={"vis"} classNameNotInView={"hid"}>
            <h1 className="max-sm:text-4xl sm:text-6xl drop-shadow-xl-d dark:drop-shadow-xl antialiazed font-bold">
              Our Team
            </h1>
            <div className="text-xl max-sm:w-11/12 sm:w-8/12 lg:w-6/12 xl:w-5/12">
              Explore the vibrant personalities that drive our youthful and
              highly motivated team, united by a shared passion for making a
              positive impact. Get to know the faces behind the mission:
            </div>
          </AnimationOnScroll>
        </div>
        <div className="flex flex-wrap max-sm:mt-5 mt-20 md:mt-32 lg:mt-52 xl:mt-64 justify-around max-sm:p-5 p-10 space-y-1 w-screen">
          <Portrait
            pb={placeholder}
            name="Inger"
            desc="UI/UX"
            className="li-el1"
          />
          <Portrait
            pb={placeholder}
            name="Lorenz"
            desc="Code"
            className="li-el2"
          />
          <Portrait
            pb={placeholder}
            name="Oliver"
            desc="Code"
            className="li-el3"
          />
          <Portrait
            pb={placeholder}
            name="Nasjida"
            desc="Law"
            className="li-el1"
          />
          <Portrait pb={placeholder} name="Dan" desc="KIS" className="li-el2" />
        </div>
      </Section>
      <Section id="contact">
        <div className="pt-32 px-10">
          <AnimationOnScroll classNameInView={"vis"} classNameNotInView={"hid"}>
            <h1 className="max-sm:text-4xl sm:text-6xl drop-shadow-xl-d dark:drop-shadow-xl antialiazed font-bold">
              Contact
            </h1>
            <div className="text-xl max-sm:w-11/12 sm:w-8/12 lg:w-6/12 xl:w-5/12">
              Please contact us if you are interested in our product, for
              collaboration or anything else. We are always eager to talk about
              the project
            </div>
          </AnimationOnScroll>
        </div>
        <div className="flex max-sm:mt-5 mt-20 md:mt-32 lg:mt-52 xl:mt-64 max-sm:flex-col sm:flex-row sm:justify-between md:justify-around p-5 usps">
          <Contact
            heading="☎️ Telephone"
            desc="Feel free to call us at"
            className="li-el1"
          >
            <a href="tel:+123456789">
              <b>+123456789</b>
            </a>
          </Contact>

          <Contact
            heading="📧 Email"
            desc="Send us a quick message to this inbox"
            className="li-el2"
          >
            <a href="mailto:support@meshr.io">
              <b>support@meshr.io</b>
            </a>
          </Contact>
        </div>
      </Section>
    </main>
  );
}
