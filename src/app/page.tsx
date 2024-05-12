"use client";

import Banner from "@/components/constructs/Banner";
import Navbar from "@/components/constructs/Navbar";
import Category from "@/components/elements/Category";
import { categoryData } from "@/utils/staticVariables";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Banner text="Bangkit dan Produktif Untuk Lombok Barat Mantap" />
      <div className="p-20 flex items-center justify-between">
        {categoryData && categoryData.length > 0 ? (
          categoryData.map((item, index) => {
            return (
              <Category
                key={index}
                imgUrl={item.image}
                imgAlt={item.label}
                text={item.label}
                onClick={() => (window.location.href = item.permalink)}
              />
            );
          })
        ) : (
          <p></p>
        )}
      </div>
    </main>
  );
}
