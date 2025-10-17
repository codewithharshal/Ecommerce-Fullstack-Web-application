import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            excepturi error quos fugiat, eaque tempore quo maiores cumque sequi!
            Expedita ipsum impedit iste ullam recusandae esse quis hic sequi
            nemo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            qui fugit, culpa voluptates ipsam voluptatem quam sed quia, ratione
            magni, exercitationem eius eos eaque iure quis nostrum molestiae
            doloribus debitis!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptatibus, et quos eaque quibusdam, vitae totam odio dolor
            nostrum facere velit possimus. Odit accusantium tenetur nobis ex,
            neque voluptate error?
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            libero sunt est voluptas sed quos dicta vero dolorem ipsam. Aut
            corporis repudiandae numquam consequuntur itaque laudantium eaque
            corrupti, minus distinctio!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            libero sunt est voluptas sed quos dicta vero dolorem ipsam. Aut
            corporis repudiandae numquam consequuntur itaque laudantium eaque
            corrupti, minus distinctio!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            libero sunt est voluptas sed quos dicta vero dolorem ipsam. Aut
            corporis repudiandae numquam consequuntur itaque laudantium eaque
            corrupti, minus distinctio!
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
