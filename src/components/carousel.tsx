import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/forest-image.jpg",
  "/forest-image.jpg",
  "/forest-image.jpg",
  "/forest-image.jpg",
];

export default function MotionCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative mx-auto h-full w-full overflow-hidden rounded-[10px] bg-gray-200 p-10 md:h-[596px] lg:p-18">
      <AnimatePresence initial={false} mode="wait">
        <div className="relative z-10 max-w-[742px] text-white">
          <h2 className="font-gilroy-bold mb-4 text-xl leading-7 font-normal md:text-[33px] md:leading-10">
            “We have been delighted with our DNS partnership. The club now has
            direction & delivery on all document processes with a clear road map
            for the foreseeable future. ”
          </h2>
          <p className="font-ibm-plex-mono text-xs">
            Paul Johnson, Director
            <br /> Nottingham Forest Football Club
          </p>
        </div>
        <motion.img
          key={index}
          src={images[index]}
          alt={`Slide ${index}`}
          className="absolute top-0 left-0 h-full w-full object-cover filter-[brightness(0.7)]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Controls */}
      {/* <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
      >
        ▶
      </button> */}

      {/* Indicators */}
      <div className="absolute bottom-20 z-20 flex w-fit items-center gap-2">
        {images.map((_, i) => (
          <div
            onClick={() => setIndex(i)}
            key={i}
            className={`h-4 w-4 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
