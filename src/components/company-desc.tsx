export default function CompanyDesc() {
  return (
    <section className="relative grid h-[651px] grid-cols-2 bg-[#C92C93] text-white">
      <div className="col-span-2 md:col-span-1">
        <img
          src="company-img.png"
          alt="Company"
          className="h-[320px] w-full rounded-tr-xl rounded-br-xl object-cover md:h-full md:w-auto"
        />
      </div>
      <div className="col-span-2 flex items-center justify-center p-4 md:col-span-1 md:p-10">
        <div className="max-w-135">
          <h2 className="font-gilroy-bold mb-4 text-2xl leading-none md:mb-10 md:text-[38px] lg:text-[50px]">
            Turning process frustration into progress since 1996
          </h2>
          <p className="font-ibm-plex-mono text-sm md:text-base">
            Recognising your frustrations with your print environment, IT
            services, document management & communications and finding a
            solution to overcome them.  Recognising your frustrations with your
            print environment, IT services, document management & communications
            and finding a solution to overcome them. 
          </p>
        </div>
      </div>
    </section>
  );
}
