import Button from "@/components/elements/Button";
import { navbarData } from "@/utils/staticVariables";
import Image from "next/image";
import React, { FC } from "react";

interface NavbarPropsType {}

const Navbar: FC<NavbarPropsType> = (props) => {
  return (
    <nav className="h-[87px] px-20 fixed w-screen bg-white flex justify-between py-4 z-50">
      <div className="flex items-center gap-1 w-[200px]">
        <Image
          src="/images/logo.png"
          height={63}
          width={51}
          alt="logo"
          className="object-cover"
        />
        <div className="font-medium text-base">PEMERINTAH LOMBOK BARAT</div>
      </div>
      <div className="flex gap-10 items-center">
        {navbarData &&
          navbarData.length > 0 &&
          navbarData.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => (window.location.href = item.url)}
              >
                {item.name}
              </button>
            );
          })}
      </div>
      <Button
        text="Pengaduan"
        type="secondary"
        onClick={() => console.log("test")}
        className="w-[145px]"
      />
    </nav>
  );
};

export default Navbar;
