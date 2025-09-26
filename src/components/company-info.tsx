import FAQs from "./faq";
import MotionCarousel from "./carousel";

export default function CompanyInfo() {
  return (
    <section id="case-studies" className="relative z-10">
      <div className="relative py-[10%] before:absolute before:top-0 before:left-0 before:-z-10 before:block before:h-[50%] before:w-full before:bg-white before:content-[''] after:absolute after:bottom-0 after:left-0 after:-z-10 after:block after:h-[50%] after:w-full after:bg-black after:content-['']">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="h-[596px]">
            <MotionCarousel />
          </div>
        </div>
      </div>
      <div className="relative bg-black pb-20 text-white">
        <div className="absolute right-0 bottom-0 h-full">
          <img src="/faq-geometric.png" alt="FAQ Geometry" />
        </div>
        <div className="container mx-auto mb-20 max-w-7xl px-4">
          <div className="mx-auto">
            <h2 className="font-gilroy-bold mb-10 text-center text-2xl font-normal md:text-[40px]">
              The business process problem solvers.
            </h2>
            <div className="max-w-c mb-42 justify-center lg:flex">
              <div className="mb-8 w-full md:mx-4 lg:mb-0 lg:max-w-[50%]">
                <p className="font-ibm-plex-mono leading-[30px] lg:max-w-[470px]">
                  Recognising your frustrations with your print environment, IT
                  services, document management & communications and finding a
                  solution to overcome them.  Recognising your frustrations with
                  your print environment, IT services, document management &
                  communications and finding a solution to overcome them. 
                </p>
              </div>
              <div className="w-full md:mx-4 lg:max-w-[50%]">
                <p className="font-ibm-plex-mono leading-[30px] lg:max-w-[470px]">
                  Recognising your frustrations with your print environment, IT
                  services, document management & communications and finding a
                  solution to overcome them.  Recognising your frustrations with
                  your print environment, IT services, document management &
                  communications and finding a solution to overcome them. 
                </p>
              </div>
            </div>
          </div>

          <div id="insights" className="grid grid-cols-2 gap-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-gilroy-bold mb-10 text-[40px]">
                Insights & News
              </h3>
              <div className="grid grid-cols-2 grid-rows-2 gap-8 gap-y-8">
                <div className="col-span-2">
                  <img
                    className="mb-6 aspect-3/1 w-full rounded-[10px] object-cover"
                    src="insight.jpg"
                    alt="Insight"
                  />
                  <span className="font-ibm-plex-mono">15/06/2024</span>
                  <p className="font-gilroy-bold text-xl">
                    What is Microsoft Loop and how does it work
                  </p>
                </div>
                <div className="col-span-1">
                  <img
                    className="mb-6 aspect-3/2 w-full rounded-[10px] object-cover"
                    src="xerox.jpg"
                    alt="xerox"
                  />
                  <span className="font-ibm-plex-mono">15/06/2024</span>
                  <p className="font-gilroy-bold text-xl">
                    Boost productivity within your law firm with xerox
                    technology
                  </p>
                </div>
                <div className="col-span-1">
                  <img
                    className="mb-6 aspect-3/2 w-full rounded-[10px] object-cover"
                    src="insight.jpg"
                    alt="Insight"
                  />
                  <span className="font-ibm-plex-mono">15/06/2024</span>
                  <p className="font-gilroy-bold text-xl">
                    What is Microsoft Loop and how does it work
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-gilroy-bold mb-10 text-[40px]">FAQ's</h3>
              <div>
                <FAQs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
