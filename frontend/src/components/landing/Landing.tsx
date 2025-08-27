"use client";

import { postApi } from "@/services";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LandingPage = () => {
   const [data, setData] = useState();

   useEffect(() => {
      loadData();
   });

   const loadData = async () => {
      const result = await postApi.testPostApi();

      if (result.data && result.data.success === true) {
         setData(result.data.data);
      } else {
         toast("Something Wrong!");
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center">
         <div>
            <h2 className="text-2xl font-semibold">Welcome To Blogger</h2>
            {data && (
               <p className="text-sm text-center font-semibold">{data}</p>
            )}
         </div>
      </div>
   );
};

export default LandingPage;
