import Header from "@/components/Header";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="">
        <Header />
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
