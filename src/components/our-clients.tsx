import client1 from "../images/client-1.png";
import client2 from "../images/client-2.png";
import client3 from "../images/client-3.png";
import client4 from "../images/client-4.png";
import client5 from "../images/client-5.png";
import client6 from "../images/client-6.png";

export default function OurClients() {
  return (
    <section className="container mx-auto px-4 text-center">
      <h2 className="font-ibm-plex-mono text-md">Our Clients Include</h2>
      <div className="container mb-28 px-30">
        <div className="mt-8 flex flex-wrap items-center justify-around">
          <img src={client5} alt="Client 5" className="m-4" />
          <img src={client2} alt="Client 2" className="m-4" />
          <img src={client3} alt="Client 3" className="m-4" />
          <img src={client1} alt="Client 1" className="m-4" />
          <img src={client6} alt="Client 6" className="m-4" />
          <img src={client4} alt="Client 4" className="m-4" />
        </div>
      </div>
    </section>
  );
}
