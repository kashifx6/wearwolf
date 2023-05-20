import Image from "next/image";
import React from "react";

const Images = (props) => {
  return (
    <Image
      src={`/assets/images/${props.src}`}
      width={props.width}
      height={props.height}
      alt={props.alt}
      quality={80}
      priority={false}
      loading="lazy"
      className="w-full"
    />
  );
};

export default Images;
