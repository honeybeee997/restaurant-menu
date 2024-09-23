"use client";
import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = ({ dish }) => {
  return (
    <motion.div
      className="h-72 md:h-80 w-full relative overflow-hidden rounded-2xl"
      initial={{ filter: "blur(5px)", y: 50, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.01 }}
      transition={{ delay: 0.2 }}
    >
      <Link href={`/menu/${dish.id}`}>
        <Image
          src={dish.image}
          alt={dish.name}
          width={400}
          height={400}
          className="h-full w-full object-cover absolute top-0 left-0"
          priority
        />
        <div className="bg-gradient-to-t from-black absolute bottom-[-1px] z-10 p-4 right-[-1px] w-[101%]">
          <motion.h3
            className="text-white text-2xl"
            initial={{ y: 47 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {dish.name}
          </motion.h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default MenuItem;
