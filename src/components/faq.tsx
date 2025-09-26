const Faqs = [
  {
    question: "Do you offer 24hr support?",
    answer:
      "Yes, we offer 24hr support through our dedicated support team. You can reach us via phone, email, or live chat at any time.",
  },
  {
    question: "Do you sell Xerox printers?",
    answer: "Yes, we sell a variety of Xerox printers to meet your needs.",
  },
  {
    question: "Can I upgrade my support package?",
    answer:
      "Yes, you can upgrade your support package at any time. Please contact our sales team for more information.",
  },
  {
    question: "Do you offer 24hr support?",
    answer:
      "Yes, we offer 24hr support through our dedicated support team. You can reach us via phone, email, or live chat at any time.",
  },
  {
    question: "Do you sell Xerox printers?",
    answer: "Yes, we sell a variety of Xerox printers to meet your needs.",
  },
  {
    question: "Do you sell Xerox printers?",
    answer: "Yes, we sell a variety of Xerox printers to meet your needs.",
  },
  {
    question: "Do you sell Xerox printers?",
    answer: "Yes, we sell a variety of Xerox printers to meet your needs.",
  },
  {
    question: "Do you sell Xerox printers?",
    answer: "Yes, we sell a variety of Xerox printers to meet your needs.",
  },
  {
    question: "Do you sell Xerox printers?",
    answer: "Yes, we sell a variety of Xerox printers to meet your needs.",
  },
];

export default function FAQs() {
  return (
    <>
      <div className="mb-5">
        {Faqs.map((faq, index) => (
          <div
            key={index}
            className={`collapse-plus collapse rounded-none border-b-[1px] border-gray-200/45 ${index === 0 ? "border-t-[1px]" : ""}`}
          >
            <input type="radio" name="my-accordion-3" className="px-0" />
            <div className="collapse-title px-0 py-5 text-xl after:top-[32%]!">
              {faq.question}
            </div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
      <a href="#" className="text-white underline">
        View all FAQs
      </a>
    </>
  );
}
