import React from "react";
import Header from "./components/Header";

const Loading = () => {
  return (
    <main>
      <Header />
      <div className="flex justify-center">
        <div className="py-3 max-w-5xl  mt-10 flex flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <div
              key={num}
              className="animate-pulse bg-slate-200 w-full sm:w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;
