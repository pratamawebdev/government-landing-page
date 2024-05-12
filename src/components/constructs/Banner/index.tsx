import Button from "@/components/elements/Button";
import Image from "next/image";
import { FC } from "react";

interface BannerPropsType {
  text: string;
}

const Banner: FC<BannerPropsType> = (props) => {
  const { text } = props;
  return (
    <div className="h-[735px] relative w-screen flex flex-col gap-8 items-center justify-center">
      <Image
        src="/images/banner.png"
        alt="banner-image"
        fill
        className="z-[-1]"
        priority
      />
      <p className="text-[64px] font-bold text-white text-center max-w-[888px]">
        {text}
      </p>
      <div className="flex items-center gap-3">
        <Button
          className="w-[203px]"
          text="Jelajah"
          type="primary"
          onClick={() => console.log("test")}
        />
        <Button
          className="w-[203px]"
          type="transparent"
          text="Informasi & Layanan"
          onClick={() => console.log("test")}
        />
      </div>
    </div>
  );
};

export default Banner;
