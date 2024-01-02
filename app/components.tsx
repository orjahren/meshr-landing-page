import { StaticImageData } from "next/image";
import Image from "next/image";
import AnimationOnScroll from "./animateonscroll";
import { Children } from "react";
export function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="h-screen snap-start" id={id ? id : ""}>
      {children}
    </div>
  );
}

export function USP({
  heading,
  desc,
  className,
}: {
  heading: string;
  desc: string;
  className: string;
}) {
  return (
    <AnimationOnScroll
      classNameInView={
        "vis p-5 border-black dark:border-white border-solid rounded-md max-md:border-0 border-2 max-sm:w-fit sm:w-4/12 md:w-3/12 2xl:w-2/12 " +
        className
      }
      classNameNotInView={
        "hid p-5 border-white border-solid rounded-md max-md:border-0 border-2 max-sm:w-fit sm:w-4/12 md:w-3/12 2xl:w-2/12 "
      }
    >
      <div>
        <h2 className="text-xl font-bold">{heading}</h2>
        <div className="max-sm:hidden">{desc}</div>
      </div>
    </AnimationOnScroll>
  );
}

export function Portrait({
  pb,
  name,
  desc,
  className,
}: {
  pb: StaticImageData;
  name: string;
  desc: string;
  className: string;
}) {
  return (
    <AnimationOnScroll
      classNameInView={
        "vis max-sm:p-2 p-5 w-4/12 flex flex-col justify-center items-center " +
        className
      }
      classNameNotInView={
        "hid max-sm:p-2 p-5 w-4/12 flex flex-col justify-center items-center "
      }
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          className="rounded-3xl"
          width="50"
          height="50"
          alt={name}
          src={pb}
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="text-center">{desc}</div>
      </div>
    </AnimationOnScroll>
  );
}
export function Contact({
  children,
  heading,
  desc,
  className,
}: {
  children?: React.ReactNode
  heading: string;
  desc: string;
  className: string;
}) {
  return (
    <AnimationOnScroll
      classNameInView={
        "vis p-5 rounded-md max-sm:w-fit sm:w-4/12 md:w-3/12 " +
        className
      }
      classNameNotInView={
        "hid p-5 rounded-md max-sm:w-fit sm:w-4/12 md:w-3/12"
      }
    >
      <div>
        <h2 className="text-xl font-bold">{heading}</h2>
        <div className="max-sm:hidden">{desc}</div>
        {children}
      </div>
    </AnimationOnScroll>
  );
}