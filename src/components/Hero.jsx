import ScrollIndicator from "../../ui/ScrollIndicator";
import homeIllustrator from "../assets/home-illustrator.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 pt-[84px] flex-col relative flex min-h-screen w-full items-center justify-center"
    >
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left Side (Text) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }} // Increased duration and delay
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400">
              <span className="">Shivam Yadav</span>
            </h1>
            <h2 className="text-2xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:text-3xl lg:text-4xl mt-3">
              <p>Web Developer</p>
            </h2>
            <p className="mt-4 text-gray-500 text-[12px] sm:text-xs md:text-sm lg:text-base max-w-md sm:max-w-lg md:max-w-xl leading-tight sm:leading-normal">
              I'm a passionate Front-End Web Developer skilled in C++, HTML, CSS, JavaScript, Bootstrap, ReactJS, Redux, Tailwind CSS, and GSAP. I specialize in building modern, responsive, and high-performance web applications with smooth animations and seamless user interactions. Dedicated to crafting clean, intuitive UIs, I'm always eager to learn and apply the latest technologies to create impactful digital experiences.
            </p>

            <a href="#contact">
              <button className="mt-6 cursor-pointer border border-blue-800 px-7 py-3 sm:px-8 sm:py-3 bg-transparent text-white rounded-xl shadow-sm shadow-blue-600 hover:shadow-purple-800 transition-all duration-300 transform text-xs sm:text-sm md:text-base">
                Contact Me
              </button>
            </a>
          </motion.div>

          {/* Right Side (Illustrator) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }} // Increased duration and delay
            className="md:w-1/2 flex justify-center items-center"
          >
            <motion.img
              src={homeIllustrator}
              alt="Developer Illustration"
              className="w-full max-w-[500px]"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6, // Increased floating animation duration
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
        <div>
          <ScrollIndicator target="#skills" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
