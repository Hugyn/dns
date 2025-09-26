import { useScroll, motion, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export default function MyNavbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 0);
  });
  return (
    <motion.header
      className="fixed top-0 z-30 w-full text-white"
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: "#30287b69",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      whileHover={{ background: "#31297d" }}
    >
      <div className="mx-auto flex gap-8 px-4 py-2 sm:px-6 lg:px-8">
        <a className="block" href="#">
          <span className="sr-only">Home</span>
          <motion.img
            alt="Logo"
            animate={{ height: scrolled ? 60 : 80 }}
            className="h-14 w-auto md:h-20"
            src="logo.svg"
          />
        </a>
        <div className="flex flex-1 flex-col justify-end md:justify-between">
          <ul className="font-gilroy mb-2 hidden items-center gap-6 text-[13px] md:flex">
            <li>
              <a
                className="transition hover:text-gray-100/75"
                href="tel:08450340895"
              >
                0845 034 0895
              </a>
            </li>
            <li>
              <a className="transition hover:text-gray-100/75" href="#">
                About us
              </a>
            </li>
            <li>
              <a className="transition hover:text-gray-100/75" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="transition hover:text-gray-100/75" href="#">
                About
              </a>
            </li>
            <li className="ml-auto">
              <a className="ms-auto transition hover:text-gray-100/75" href="#">
                Request Support
              </a>
            </li>
          </ul>
          <div className="flex items-end justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="font-gilroy flex items-center gap-6 text-lg font-bold">
                <li>
                  <a
                    className="text-white transition hover:text-gray-100/75"
                    href="#services"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-100/75"
                    href="#case-studies"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-gray-100/75"
                    href="#insights"
                  >
                    Insights
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-gray-100/75"
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4 md:gap-0">
              <CallMeButton />
              {/* Mobile menu button */}
              <div className="dropdown">
                <button
                  tabIndex={0}
                  role="button"
                  className="btn block rounded-sm bg-gray-100 p-2.5 text-gray-600 shadow-none transition hover:text-gray-600/75 md:hidden"
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 translate-0 translate-x-[-80%] translate-y-[15%] p-2 shadow-sm"
                >
                  <li>
                    <a className="font-bold text-[#31297d] transition" href="#">
                      Services
                    </a>
                  </li>

                  <li>
                    <a className="font-bold text-[#31297d] transition" href="#">
                      Case Studies
                    </a>
                  </li>
                  <li>
                    <a className="font-bold text-[#31297d] transition" href="#">
                      Insights
                    </a>
                  </li>

                  <li>
                    <a className="font-bold text-[#31297d] transition" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

const CallMeButton = () => {
  return (
    <div className="group relative inline-flex items-center justify-center">
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-500 via-[#53247c] to-[#39247c] opacity-10 blur-md filter transition-all duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <a
        role="button"
        className="group font-gilroy-bold relative inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-normal text-[#39247c] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-600/30"
        title="payment"
        href="#contact"
      >
        Call Me Back
      </a>
    </div>
  );
};
