import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <br />
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover the latest stylish Nike arrivals that seamlessly blend
          cutting-edge innovation, premium comfort, and trend-forward
          design—perfectly crafted to support your active lifestyle, elevate
          your performance, and keep you looking fresh both in and out of the
          gym.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          {" "}
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
