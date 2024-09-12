import { useRef } from "react";

import Section from "./Section";

const Collaboration = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">Why Byte</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-justify">
            Our team of experts blends data-driven insights with creative
            solutions to deliver impactful results. Trust Byte to unleash your
            full potential and guide you on your path to digital success.
            Partner with us today and experience the transformation.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
