import React from "react";
import loaderImage from "../assets/output-onlinepngtools.png"; // adjust the path if needed

export default function DesignToCodeLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <img
          src={loaderImage}
          alt="Turning ideas into web"
          className="w-28 h-auto mx-auto animate-pulse"
        />
        <p className="mt-4 text-gray-600 text-base font-semibold animate-pulse tracking-wide">
          Turning ideas into the web
        </p>
      </div>
    </div>
  );
}
