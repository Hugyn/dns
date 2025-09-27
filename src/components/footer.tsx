import { Button, Spinner } from "flowbite-react";
import { FooterGeometry } from "./footer-geometry";
import React from "react";

export default function Footer() {
  const [loading, setLoading] = React.useState(false);
  const [buttonState, setButtonState] = React.useState("Submit now");
  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setButtonState("Submitted!");
    }, 2000);
  };
  return (
    <footer id="contact" className="relative bg-[#FF3A7A] pt-28">
      <div className="absolute bottom-0 left-[-7%] h-[83%] w-auto">
        <FooterGeometry />
      </div>
      <div className="container mx-auto px-4 text-white">
        <div className="col-span-1 mb-28 grid md:grid-cols-2">
          <div className="mb-12 text-center md:col-span-1 md:mb-0 md:text-left">
            <h2 className="font-gilroy-bold mb-8 text-4xl lg:text-6xl">
              We’re <span className="font-outline-2 text-[#FF3A7A]">your</span>{" "}
              IT Services problem solvers
            </h2>
            <div className="mx-auto max-w-full md:mx-0 md:max-w-[280px] lg:max-w-[596px]">
              <p className="font-ibm-plex-mono mb-10 lg:leading-[30px]">
                Recognising your frustrations with your print environment, IT
                services, document management & communications and finding.
              </p>
              <a href="#" className="font-ibm-plex-mono text-white">
                Get in touch today!
              </a>
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-1">
            <form
              onSubmit={formSubmit}
              className="font-ibm-plex-mono max-w-[488px] space-y-7"
            >
              <input
                disabled={loading}
                type="text"
                placeholder="Name"
                className="input h-[55px] w-full rounded-none border-white bg-transparent text-[16px] text-white placeholder-white focus:border-white focus:ring-0"
              />
              <input
                disabled={loading}
                type="text"
                placeholder="Email"
                className="input h-[55px] w-full rounded-none border-white bg-transparent text-[16px] text-white placeholder-white focus:border-white focus:ring-0"
              />
              <input
                disabled={loading}
                type="text"
                placeholder="Telephone"
                className="input h-[55px] w-full rounded-none border-white bg-transparent text-[16px] text-white placeholder-white focus:border-white focus:ring-0"
              />
              <input
                disabled={loading}
                type="text"
                placeholder="Company"
                className="input h-[55px] w-full rounded-none border-white bg-transparent text-[16px] text-white placeholder-white focus:border-white focus:ring-0"
              />
              <input
                disabled={loading}
                type="text"
                placeholder="I need help with..."
                className="input h-[55px] w-full rounded-none border-white bg-transparent text-[16px] text-white placeholder-white focus:border-white focus:ring-0"
              />
              <Button
                type="submit"
                className="btn font-ibm-plex-mono ml-auto h-[55px] rounded-none border-1 bg-white px-14 text-[#3C2A7D] shadow-none"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-xl"></span>
                ) : (
                  buttonState
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="font-ibm-plex-mono mb-14 grid grid-cols-12 gap-4 gap-y-10 text-sm sm:gap-y-0">
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <img className="h-[57px] w-auto" src="logo.svg" alt="DNS Logo" />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <h3 className="mb-2">Contact us</h3>
            <ul className="space-y-2">
              <li>
                <span className="me-4">E</span>
                <a href="mailto:info@dns.com">info@dnslimited.co.uk</a>
              </li>
              <li>
                <span className="me-4">P</span>
                <a href="tel:08450340895">0845 034 0895</a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <h3 className="mb-2">Address</h3>
            <p className="leading-6">
              Unit 9 <br /> Royal Scot Road, <br /> Pride Park, Derby <br />{" "}
              DE24 8AJ
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <h3 className="mb-2">Opening hours</h3>
            <p className="leading-6">
              Mon - Fri:
              <br /> 9 am - 5:30 pm
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <h3 className="mb-2">About us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#csr">CSR</a>
              </li>
              <li>
                <a href="#environment">Environment & Sustainability</a>
              </li>
              <li>
                <a href="#meet-the-team">Meet the team</a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-2">
            <h3 className="mb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#csr">IT Services</a>
              </li>
              <li>
                <a href="#environment">Communications</a>
              </li>
              <li>
                <a href="#meet-the-team">Managed Print Services</a>
              </li>
              <li>
                <a href="#meet-the-team">Document Management</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <hr className="border-t border-white/20" />
        <div className="font-ibm-plex-mono flex flex-wrap justify-center px-8 py-6 text-sm text-white sm:justify-between">
          <p className="mb-2 sm:mb-0">Design & build by Alt</p>
          <p>© Document Network Services Ltd {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
