const supportItems = [
  {
    icon: "/support-icons/calendar.svg",
    title: "business years",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
  },
  {
    icon: "/support-icons/float.svg",
    title: "On-site support",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
  },
  {
    icon: "/support-icons/hand.svg",
    title: "Expert team members",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
  },
  {
    icon: "/support-icons/paper.svg",
    title: "Live contracts",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
  },
  {
    icon: "/support-icons/bubble.svg",
    title: "Guided trainings",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
  },
  {
    icon: "/support-icons/trophy.svg",
    title: "Accreditations & awards",
    text: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus.",
  },
];

export const Support = () => {
  return (
    <section>
      <div className="relative py-26">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="">
            <h2 className="font-gilroy-bold mb-10 text-center text-[32px] leading-12 font-normal md:text-[40px]">
              A team of accredited experts <br /> that support you
            </h2>
            <div className="grid grid-cols-6 place-items-center gap-8">
              {supportItems.map((item, index) => (
                <SupportCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SupportCard = ({ item }: { item: (typeof supportItems)[number] }) => {
  return (
    <div className="col-span-6 flex max-w-[275px] flex-col items-center text-center md:col-span-3 lg:col-span-2">
      <div className="mb-4 flex h-full w-full grow items-center justify-center">
        <img src={item.icon} alt={item.title} />
      </div>
      <h3 className="font-gilroy mb-4 text-[20px] font-semibold">
        {item.title}
      </h3>
      <p>{item.text}</p>
    </div>
  );
};
