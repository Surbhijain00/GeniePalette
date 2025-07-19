import React from "react";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 px-4 sm:px-12 lg:px-36 py-3 border-t border-t-gray-300 z-[999]">
      <div className="flex flex-col items-center gap-2 opacity-85">
        <p className="flex items-center gap-1">
          Made with <FaHeart /> by{" "}
          <a
            href="https://geeteshdalal.vercel.app"
            target="_blank"
            className="text-lg underline"
          >
            @Surbhi jain
          </a>
        </p>
        <p className="opacity-75 text-sm">Copyright &copy; 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;