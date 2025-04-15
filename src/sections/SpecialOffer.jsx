import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-centermax-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>
          Offer{" "}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover the latest stylish Nike arrivals that seamlessly blend
          cutting-edge innovation, premium comfort, and trend-forward
          design—perfectly crafted to support your active lifestyle, elevate
          your performance, and keep you looking fresh both in and out of the
          gym.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover the latest stylish Nike arrivals that seamlessly blend
          cutting-edge innovation, premium comfort, and trend-forward
          design—perfectly crafted to support your active lifestyle, elevate
          your performance, and keep you looking fresh both in and out of the
          gym.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button label="View Details" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="bg-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
