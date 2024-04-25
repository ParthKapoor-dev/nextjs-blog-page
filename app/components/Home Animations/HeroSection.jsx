"use client";

// Images
import Hero1 from "@/public/images/hero1.jpg";
import Hero2 from "@/public/images/hero2.jpg";
import Hero3 from "@/public/images/hero3.jpg";
const HeroImg = [Hero1, Hero2, Hero3];

import Jump from "@/public/gifs/jump.gif"

// Hooks
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const scrollMotionSlow = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scrollMotionFast = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const scrollMotionMedi = useTransform(scrollYProgress, [0, 1], [0, -450]);



  return (
    <div className="flex flex-col justify-center items-center mb-[100vh] ">
      <div className="text-6xl font-bold mb-20 mt-10">
        Hero Section
      </div>

      <div className="text-4xl font-semibold mb-80 flex justify-center items-center gap-20">
        Welcome To Next JS Blog Page !!! <br /> Enjoy yourself here

        <Image src={Jump} className="h-[35vh] w-fit object-cover mt-10 rounded" />
      </div>

      <motion.div style={{ y: scrollMotionFast }} className="text-4xl font-semibold mb-20">
        Parallax Effect
      </motion.div>

      <div ref={container} className="flex justify-center items-center mt-20">
        <motion.div style={{ y: scrollMotionSlow, position: 'absolute' }}>
          <Image src={Hero1} className="hero-img" style={{
            height: '50vh'
          }} />
        </motion.div>

        <motion.div style={{ y: scrollMotionFast, position: 'absolute' }}>
          <Image src={Hero3} className="hero-img" style={{
            left: '20vw'
          }} />
        </motion.div>

        <motion.div style={{ y: scrollMotionMedi, position: 'absolute' }}>
          <Image src={Hero2} className="hero-img" style={{
            height: '25vh', left: '-20vw', top: '20vh'
          }} />
        </motion.div>
      </div>
    </div>
  )
}