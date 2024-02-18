import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  // MotionValue,
} from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

export const Parallax = ({ products, isAnchorDate, isDark }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="min-h-[330vh] md:min-h-[200vh] 2xl:min-h-[200vh] pb-30 pt-40 md:pt-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header isAnchorDate={isAnchorDate} isDark={isDark} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ isAnchorDate, isDark }) => {
  return (
    <div
      id="hero"
      className="max-w-7xl relative mx-auto py-20 md:py-20 px-4 w-full  left-0 top-0"
    >
      <h1 className="font-sec text-6xl md:text-8xl lg:text-9xl font-bold dark:text-white">
        Lê Minh <br /> <span style={{ color: "#D63484" }}>&</span> Hồng Anh
      </h1>
      <p className="opacity-75 font-hand text-3xl max-w-5xl md:text-5xl mt-8 dark:text-neutral-200">
        Bắt đầu từ hôm nay chúng ta sẽ viết nên một chương mới của cuộc đời.
        <br /> Bằng tình thương yêu và hạnh phúc đong đầy.
      </p>
      {/* <div className="static">
        <div className={`transition-all mt-20 pt-20 duration-300 font-hand z-50 text-center inset-x-0 bottom-2 md:bottom-20 text-4xl md:text-5xl${isDark ? ' text-white' : ''}${isAnchorDate ? ' opacity-0' : ' opacity-90'}`}>
          25/02/2025 (16/01 Âm lịch)
        </div>
      </div> */}
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return (
    <motion.div
      // initial={{
      //   rotate: 0
      // }}
      style={{
        x: translate,
      }}
      // whileHover={{
      //   y: -20,
      //   rotate: randomNumberInRange(-6, 6)
      // }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div> */}
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
