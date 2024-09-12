import Button from "./Button";
import { curve } from "../assets";

import Section from "./Section";

import { BottomLine } from "./design/Hero";
import { useRef } from "react";

const CompanyLogos = ({ className }) => {
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
          <h1 className="h1 mb-6">About Us</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-justify">
            At Byte, our deep-rooted passion for digital transformation sets us
            apart. We are not just another digital marketing agency, we will be
            your growth partner. Our team of digital experts brings fresh
            perspectives and innovative strategies to your business. By
            combining data-driven insights with creative solutions, we deliver
            measurable results.
          </p>
        </div>
      </div>
    </Section>
    // <div>
    //   <Heading className="md:max-w-md lg:max-w-2xl" title="About Us" />

    //   <Heading
    //     className="md:max-w-md lg:max-w-2xl"
    //     title="About Us"
    //     text=" At Byte, our deep-rooted passion for digital transformation sets us
    //     apart. We are not just another digital marketing agency, we will be your
    //     growth partner. Our team of digital experts brings fresh perspectives
    //     and innovative strategies to your business. By combining data-driven
    //     insights with creative solutions, we deliver measurable results."
    //   ></Heading>

    //   <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-justify">
    //     At Byte, our deep-rooted passion for digital transformation sets us
    //     apart. We are not just another digital marketing agency, we will be your
    //     growth partner. Our team of digital experts brings fresh perspectives
    //     and innovative strategies to your business. By combining data-driven
    //     insights with creative solutions, we deliver measurable results.
    //   </p>
    // </div>
  );
};

export default CompanyLogos;
