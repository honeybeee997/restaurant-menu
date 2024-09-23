"use client";
import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Button from "../ui/button";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const [currentScroll, setCurrentScroll] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => setCurrentScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`bg-color4 p-3 shadow-2xl fixed top-0 left-0 w-full z-50 transition-all ${
          !isHome && "flex justify-between items-center"
        }`}
      >
        {!isHome && (
          <Link href="/" className="text-xl transition-all">
            <FaHome />
          </Link>
        )}
        <Link href="/">
          <Image
            src="/assets/brand/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className={`h-10 w-auto mx-auto invert`}
            priority
          />
        </Link>
      </header>
      <section className="container pt-32 pb-4 px-4">{children}</section>
      <AnimatePresence>
        {currentScroll > 200 && (
          <motion.div
            className="h-12 w-12 flex items-center justify-center bg-color3 rounded-full fixed bottom-4 left-4 z-50 transition-all shadow-lg"
            key="back-to-top"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
            role="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowRight className="-rotate-90 text-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.footer
        className="bg-color4 pt-10 pb-5 px-4 mt-20 leading-loose"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container flex flex-col items-center">
          <p className="text-center">
            استمتع بتناول طعام رائع مع مجموعة متنوعة من الأطباق في أجواء المطعم
            الفاخرة
          </p>
          <Button>مقعد احتياطي</Button>
        </div>
        <hr className="border-color2 my-10" />
        <div className="container flex flex-col items-center">
          <strong className="block mb-2 underline underline-offset-4">
            : اتصل بنا :
          </strong>
          <div className="flex  items-center justify-center gap-2 sm:gap-5 flex-wrap">
            <p className="font-[circular] text-xl flex items-center gap-2">
              <FaEnvelope /> puzzlingsheep@gmail.com
            </p>
            <p className="font-[circular] text-xl flex items-center gap-2">
              <FaPhone /> +1234567890
            </p>
          </div>
        </div>
        <div className="container mt-20 flex flex-col items-center">
          <strong className="block mb-2 text-center underline underline-offset-4">
            : انضم إلى نشرتنا الإخبارية :
          </strong>
          <input
            type="email"
            placeholder="Please enter your email"
            className="w-full mt-4 mb-6 font-[circular] py-2 px-4 rounded-lg text-color6 outline-none"
          />
          <Button className="mt-0 mx-auto">اشتراك</Button>
        </div>
        <div className="container flex flex-col items-center mt-20">
          <small className="font-[circular] text-center">
            © {new Date().getFullYear()} All rights reserved. Made with ❤️ by{" "}
            <a href="mailto:puzzlingsheep@gmail.com" className="underline">
              Puzzling Sheep
            </a>
          </small>
        </div>
      </motion.footer>
    </>
  );
};

export default Layout;
