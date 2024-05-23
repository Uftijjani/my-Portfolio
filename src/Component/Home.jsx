import React from "react";
import Hero from "./Hero";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <Hero>
        <article className="w-full flex items-center justify-center">
          <section className="container  flex flex-col md:grid md:grid-cols-3 md:gap-4 justify-center items-center w-full">
            <Profile profile={"hero-profile"} />
            <article className="col-span-2 flex items-center flex-col p-7 md:p-0 md:items-start">
              <h4 className="text-sm tracking-wider relative w-fit text-gray-600 font-bold">
                Software Engineer
                <span className="bg-gray-500 w-3 block h-3 rounded-full absolute top-1 right-[-20px]"></span>
                <span className="bg-blue-300 w-3 block h-3 rounded-full absolute top-0 right-[-30px]"></span>
                <span className="bg-yellow-500 w-3 block h-3 rounded-full absolute top-1 right-[-40px]"></span>
              </h4>
              <h1 className="text-4xl font-bold  text-blue-600 mb-1 ">
                Umar Faruq
              </h1>
              <p className="w-[100%] my-2 text-center md:text-left text-sm">
                I began my career at Tech Solutions as a junior developer, where
                I contributed to various web development projects. Currently,
                I'm a senior software engineer at InnovateX, leading a team of
                developers to build scalable and efficient software solutions
                for the healthcare sector
              </p>

              <div className="flex items-center gap-4 my-2">
                <a className="btn border-blue-400 border-2 px-5 py-3 hover:bg-blue-400 transition-all hover:text-white duration-500">
                  Download CV
                </a>
                <a
                  className="btn border-gray-600 border-2 px-5 py-3 hover:bg-gray-600 transition-all hover:text-white duration-500"
                  href="https://www.linkedin.com/in/uftijjani/"
                >
                  Contact
                </a>
              </div>
            </article>
          </section>
        </article>
      </Hero>
    </>
  );
};

export default Home;
