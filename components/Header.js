import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [hover, setHover] = useState("0");
  const links = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/" },
    { name: "Service", link: "/" },
    { name: "Package", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ borderBottom: 0 }}
      animate={{ borderBottom: 1, transition: { duration: 1, delay: 0.5 } }}
      className="relative lg:p-6 py-4 px-6 lg:px-24 "
    >
      <div className=" flex justify-between  items-center">
        <p className="font-Aboreto font-bold text-xl lg:text-3xl text-white  ">
          Tokyo Travel
        </p>

        <div
          className={`absolute lg:z-50 lg:static bg-white font-semibold w-full lg:w-auto lg:flex-row z-[-1] lg:bg-transparent lg:text-white left-0  py-6 text-black lg:space-x-20 flex flex-col items-center space-y-5 lg:space-y-0  text-center lg:p-6 lg:text-lg transition-all duration-500 ease-in-out ${
            burgerIsOpen ? "top-16" : "top-[-490px]"
          }
          `}
        >
          {links.map((link, key) => (
            <motion.a
              className="cursor-pointer relative  "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              onMouseEnter={() => setHover(key)}
              onMouseLeave={() => setHover(key)}
              key={key}
              href={link.link}
            >
              {link.name}
              {hover === key && (
                <motion.div
                  layoutId="border"
                  className="absolute w-full h-5   border-t-2"
                ></motion.div>
              )}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.4, duration: 1 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className=" bg-white p-2  rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="black"
              className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer text-white pathbl"
            >
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  transition: { delay: 2, duration: 2 },
                }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </motion.div>
          <MenuIcon
            onClick={() => setBurgerIsOpen(!burgerIsOpen)}
            className="h-8 w-8 lg:h-10 lg:w-10 lg:hidden"
            color="white"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
