import Image from "next/image";

export const Avatar = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        src={src}
        alt="alt"
        width={60}
        height={60}
        className={"avatar"}
      ></Image>
    </div>
  );
};
