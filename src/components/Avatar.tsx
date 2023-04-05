import Image from "next/image";

export const Avatar = ({
  src,
  hasBorder,
}: {
  src: string;
  hasBorder: boolean;
}) => {
  return (
    <div>
      <Image
        src={src}
        alt="alt"
        width={60}
        height={60}
        className={"avatar"}
        style={hasBorder ? { border: "white 3px solid" } : { border: "none" }}
      ></Image>
    </div>
  );
};
