import { StaticImageData } from "next/image";
import Image from "next/image";
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

export function USP({ heading, desc }: { heading: string; desc: string }) {
  return (
    <div className="p-5 border-white border-solid rounded-md max-md:border-0 border-2 max-sm:w-fit sm:w-4/12 md:w-3/12">
      <h2 className="text-xl font-bold">{heading}</h2>
      <div className="max-sm:hidden">{desc}</div>
    </div>
  );
}

export function Portrait({
  pb,
  name,
  desc,
}: {
  pb: StaticImageData;
  name: string;
  desc: string;
}) {
  return (
    <div className="max-sm:p-2 p-5 w-4/12 flex flex-col justify-center items-center">
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
  );
}
