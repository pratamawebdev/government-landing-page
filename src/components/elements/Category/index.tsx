import Image from "next/image";
import React, { FC, MouseEventHandler } from "react";

interface CategoryPropsType {
  imgUrl: string;
  imgAlt: string;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Category: FC<CategoryPropsType> = (props) => {
  const { imgUrl, imgAlt, text, onClick } = props;
  return (
    <button className="flex flex-col items-center gap-4" onClick={onClick}>
      <div className="w-[105.58px] h-[101px] rounded-[57px] border border-solid border-black p-4">
        <div className="w-full h-full relative">
          <Image
            src={imgUrl}
            alt={imgAlt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      </div>
      <p>{text}</p>
    </button>
  );
};

export default Category;
