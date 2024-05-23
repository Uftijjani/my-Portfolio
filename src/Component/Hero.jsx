import React from "react";

export default function Hero({ hero, children }) {
  return (
    <div className={` min-h-screen w-full flex justify-center items-center`}>
      {children}
    </div>
  );
}
