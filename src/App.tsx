import InfoCards from "./components/info-cards";
import OurClients from "./components/our-clients";
import MyNavbar from "./components/navbar";
import CompanyDesc from "./components/company-desc";
import CompanyInfo from "./components/company-info";
import { Support } from "./components/support";
import Footer from "./components/footer";
import Geometry from "./components/geometry";

export default function App() {
  return (
    <>
      <MyNavbar />
      <main>
        <Hero />
        <InfoCards />
        <OurClients />
        <CompanyDesc />
        <CompanyInfo />
        <Support />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#31297d]">
      <div className="fixed right-0 h-[110%]">
        <Geometry />
      </div>
      <div className="container mx-auto grid grid-cols-12 gap-4 px-4 py-32 sm:px-6 lg:h-screen lg:items-center lg:px-8">
        <div className="col-span-12 max-w-[567px] text-center text-white sm:text-left md:col-span-6">
          <h1 className="font-gilroy-bold text-[40px] leading-none lg:text-[50px] xl:text-[70px]">
            We make your
            <br /> IT work easy.
          </h1>
          <p className="font-ibm-plex-mono mt-5 text-sm leading-[30px] xl:text-base">
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding a
            solution to overcome them.
          </p>
        </div>
        <div className="col-span-12 mb-12 flex justify-center md:col-span-6 md:mb-0">
          <div>
            <div className="absolute translate-x-[-65%] -translate-y-[10%]">
              <img
                className="w-[120px] xl:w-full"
                src="hero-modem.png"
                alt="Hero Image"
              />
              <span className="absolute left-0 -z-10 block h-[52px] w-[180px] translate-x-[-18%] translate-y-[-50%] rounded-[50%] bg-[#0A151B] p-2 blur-xl xl:h-[82px] xl:w-[208px]"></span>
            </div>
            <div className="relative z-20">
              <img
                className="h-[250px] xl:h-[347px]"
                src="hero-laptop.png"
                height=""
                alt="Hero Image"
              />
              <span className="absolute left-0 -z-10 block h-[100px] w-[240px] translate-y-[-50%] rounded-[50%] bg-[#0A151B] p-2 blur-xl xl:h-[121px] xl:w-[305px]"></span>
            </div>
          </div>
        </div>
      </div>
      <div id="services"></div>
    </section>
  );
}
