"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import Grid from "../layout/Grid";

const Pricing = ({ items }) => {
  return (
    <Grid>
      {items.map((item, i) => {
        return (
          <motion.div
            key={i}
            className="bg-white text-color6 p-2 rounded-lg flex sm:flex-col"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex-1">
              <Image
                src="/assets/menu/menu-1.jpg"
                alt="Logo"
                width={300}
                height={300}
                className="h-full w-full min-h-[175px] object-cover rounded-tl-lg rounded-bl-lg"
                priority
              />
            </div>
            <div className="flex-1 pl-2 py-2 flex flex-col">
              <strong>{item.name}</strong>
              <p className="text-[12px] my-2 font-sans">{item.description}</p>
              <div className="flex justify-between items-baseline mt-auto font-[circular]">
                <span>🔥 30 min</span>
                <strong className="text-2xl">$270</strong>
              </div>
            </div>
          </motion.div>
        );
      })}
    </Grid>
  );
};

export default Pricing;
