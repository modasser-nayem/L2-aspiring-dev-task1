import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

interface Props {
   children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
   return (
      <div>
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default MainLayout;
