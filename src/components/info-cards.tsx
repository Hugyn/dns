import { motion } from "framer-motion";

const cardsArray = [
  {
    icon: "icon-1.svg",
    title: "IT Services",
    description:
      "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
  },
  {
    icon: "icon-2.svg",
    title: "Managed Print Services",
    description:
      "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
  },
  {
    icon: "icon-3.svg",
    title: "Document Management",
    description:
      "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
  },
  {
    icon: "icon-4.svg",
    title: "Communications",
    description:
      "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
  },
];

export default function InfoCards() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-10 px-4">
      {cardsArray.map((card, index) => (
        <motion.div
          key={index}
          className="group flex w-71 min-w-[284px] translate-y-[-28%] flex-col items-center rounded-lg bg-white px-4 py-10 text-[#F4207B] shadow-xl hover:scale-[1.03]"
          custom={index}
          transition={{
            y: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
          }}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            backgroundColor: "#F4207B",
            color: "#FFFFFF",
            transition: { duration: 0.1 },
          }}
          viewport={{ once: true, amount: 0.3, margin: "-100px" }}
          variants={cardVariants}
        >
          <img
            src={card.icon}
            alt={card.title}
            className="mb-4 h-[45px] w-auto group-hover:filter-[brightness(20)]"
          />
          <h2 className="font-gilroy-bold mb-4 text-center text-[21px] text-nowrap">
            {card.title}
          </h2>
          <p className="mb-4 text-center">{card.description}</p>
          <a>Learn more</a>
        </motion.div>
      ))}
    </div>
  );
}
