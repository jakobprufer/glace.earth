"use client";
import { Fragment, useState, useEffect, Suspense } from "react";
import Image from "next/image";
import "../sass/main.sass";
import TitleBar from "./components/TitleBar";
import { AnimatePresence, easeInOut, useScroll } from "framer-motion";
import Loading from "./loading";
import { motion, Variants } from "framer-motion";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
// import "../../public/fonts/style.css";

//images
import Glacier from "../../public/glacier.webp";
import Glacier2 from "../../public/glacier2.webp";
import Phone from "../../public/phone.webp";
import PingPong from "../../public/pingpong.webp";
import Bears from "../../public/bearsexp.webp";
import FrameSmall from "../../public/framesmall.webp";
import FrameMed from "../../public/framemed.webp";
import FrameBig from "../../public/framebig.webp";

export default function Home() {
  //scroll tracker normal
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(1 + (scrollY - 2500) / 5000);

  //framer staggered text animations
  const wordVariants: Variants = {
    initial: {
      y: "20vh",
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, 0.23, 0.96],
      },
    },
  };

  const staggeredWordVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const staggeredWordVariants1: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.25,
      },
    },
  };

  const staggeredWordVariants2: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.5,
      },
    },
  };

  //loading animation
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setAllLoaded(true);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  //framer text in view animation
  const fadeInText: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  //react scroll functionality
  const ScrollToElement = () => {
    const scrollToTop = () => {
      scroll.scrollToTop();
    };
  };

  return (
    <main className="main">
      <AnimatePresence>
        {allLoaded ? (
          <div>
            <TitleBar scrollY={scrollY} />
            <AnimatePresence>
              {scrollY == 0 ? (
                <div className="scrollDownCont">
                  <motion.div
                    // onClick={() => {
                    //   window.scrollTo({
                    //     top: 1000,
                    //     behavior: "smooth",
                    //     duration: 2000,
                    //   });
                    // }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      transition: { duration: 0.2, delay: 0 },
                    }}
                    key="scrollDown"
                    className="scrollDown"
                  >
                    <LinkS
                      activeClass="active"
                      to="section1"
                      spy={true}
                      smooth={true}
                      offset={-300} // Offset to adjust scroll position
                      duration={1000} // Scroll duration in milliseconds
                    >
                      ↓ find out
                    </LinkS>
                  </motion.div>
                </div>
              ) : null}
            </AnimatePresence>
            <div className="firstSection">
              <div className="logoContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="logo loadedLogo"
                  width="7052.069"
                  height="7265.272"
                  viewBox="0 0 5289.06 5448.95"
                  style={{ transform: `rotate(${scrollY}deg)` }}
                >
                  <path
                    fill="#f08595"
                    strokeWidth="0"
                    d="M2581.47 3476.87c-43.95-14.75-90.12-18.01-135.36-26.1-34.69-5.24-64.04-30.62-101.12-26.86-31.68-37.2-80.61-44.09-119.78-68.13-23.81-23.87-50.21-44.26-80.2-59.86-27.6-35.24-56.67-69.06-93.02-95.81-14.48-31.86-34.6-59.71-59.83-83.9-14.56-41.54-25.54-84.98-61.2-115.32 10.72-33.78-12.67-61-17.69-91.76-9.87-48.03-9.64-97.8-24.92-144.9 11.31-28.97 8.78-58.97 6.65-88.95 5.98-44.89 11.96-89.77 17.96-134.66 6-30.61 28.09-58.04 18.11-91.79 35.64-30.27 48.41-72.7 61.23-115.1 24.71-24.65 45.52-52.05 59.52-84.26 35.07-26.4 64.69-57.94 88.99-94.48 32.91-13.72 58.68-37.35 84.36-61.08 40.26-22.1 87.72-31.57 119.65-68.26 37.18 3.92 66.58-21.48 101.29-26.88 45.02-11.44 94.43-4.57 135.5-32.5 23.92 17.62 51 4.45 76.46 7.4 12.37 1.43 29.63 6.26 31.82-15.73 23.63 42.68 69.36 16.72 102.04 32.32 9.09 4.34 22.14.39 33.38.25 34.08 14.09 67.03 32.63 106.12 27.09 27.72 41.43 74.13 49.71 116.26 65.61 27.43 24.86 52.48 53.26 91.17 61.35 23.74 40.8 54.11 75 96.64 97.11 6.11 35.99 33.97 58.4 53.65 85.92 24.11 40.3 29.61 91.77 72.53 120.78-14 35.82 2.95 64.99 20.27 94.09-3.85 44.98 9.15 88.55 11.07 133.06-.98 29.28-10.21 59.15 6.3 87.15-10.94 47.58-19.36 95.46-17.47 144.58-20.01 27.53-28.53 58.13-24.52 92.05-34.99 33.96-48.66 78.91-63.57 123.22-27.34 23.07-49.78 49.47-57.94 85.54-42.89 21.8-73.09 56.27-96.89 97.12-39.1 7.28-63.32 36.88-91.3 60.84-42.89 14.72-88.46 24.78-115.83 66.53-39.52-7.25-72.09 13.4-106.51 26.63-45.68 2.57-92.37-.36-133.94 24.6-35.68-17.47-73.22-5.41-109.9-6.88z"
                  ></path>
                  <path
                    fill="#080b0c"
                    strokeWidth="0"
                    d="M2689.9 1957.91c-2.18 22-19.45 17.17-31.82 15.73-25.45-2.95-52.54 10.23-76.46-7.4-35.67-645.99-88.31-1290.9-124.35-1936.87-1.24-19.47 6.26-25.75 23.42-26.46 92.75-3.84 185.48-3.64 278.27-.85 26.66.8 20.47 18.51 19.93 32.75-24.14 641.3-55.63 1282.29-89 1923.09zM2581.47 3476.87c36.69 1.47 74.22-10.59 109.9 6.88 30.68 638.21 64.08 1279.55 88.02 1919.23 2.12 35.74-6.63 45.11-42.95 45.47-81.4.82-162.72.74-244.1-1.03-26.36-.57-36.73-6.46-34.7-37.09 37.98-644.54 87.34-1289.31 123.83-1933.47zM2446.12 1998.74c-34.71 5.4-64.11 30.8-101.29 26.88-61.43-150.66-123-301.27-184.29-452-181.16-445.58-362.02-891.29-543.78-1336.62-10.52-25.77-9.54-36.97 19.8-47.46 77.15-27.58 155-52.86 232.48-79.32 37.85-12.93 52.75-7.09 63.39 32.84 166.68 619.73 332.58 1240.1 513.69 1855.67zM2344.99 3423.91c37.08-3.76 66.42 21.61 101.12 26.86-185.45 618.95-347.31 1244.6-518.45 1867.57-8.79 33.18-23.67 32.38-46.35 24.77-83.02-27.85-165.39-57.67-248.74-84.48-26.4-8.49-26.6-19.18-17.28-41.96 241.23-598.35 489.84-1194.01 729.71-1792.75zM2931.44 2017.56c-39.09 5.55-72.04-13-106.12-27.09 184.13-615.58 327.89-1243.4 491.83-1864.81 8.05-31.95 19.13-33.14 46.3-23.66 74.71 26.1 149.91 51.1 225.95 72.95 39.77 11.43 44.26 29.56 30.12 65.68-227.92 592.82-462.96 1183.13-688.07 1776.91zM2825.31 3459.15c34.42-13.23 66.98-33.88 106.51-26.63 72.86 215.84 165.07 424.22 246.39 636.82 145.54 380.5 293.37 760.13 441.35 1139.7 14.15 36.3 9.05 53.7-30.29 65.65-74.3 22.56-147.55 48.62-221.55 72.33-36.71 11.76-45.56 1.05-53.69-31.08-161.49-619.01-306.77-1243.82-488.72-1856.79zM3047.65 3365.99c27.98-23.96 52.2-53.56 91.3-60.84 400.49 494.64 813.61 979.58 1220.92 1468.85 18.97 22.49 27.17 33.81-3.14 56.45-66.05 49.33-131.67 99.15-198.83 147.07-25.06 17.88-33.16 11.19-47.66-10.93-356.07-531.94-693.02-1078.52-1062.59-1600.59zM3138.87 2144.52c-38.7-8.1-63.74-36.49-91.17-61.35 357.18-504.81 681.84-1033.73 1027.51-1547.04q56.17-85.35 138.31-24.07c51.15 38.41 100.84 78.83 152.87 115.99 17.78 12.7 17.97 18.24 4.23 34.59-408.67 495.52-825.32 984.68-1231.75 1481.89zM2145.02 3295.91c29.98 15.6 56.39 35.99 80.2 59.86-369.98 517.25-704.98 1058.55-1059.08 1586.67-33.91 51.43-35.28 51.62-84.54 17.25-64.16-44.76-127.97-90.02-186.91-141.82-15.99-14.06-18.86-21.78-3.44-39.99 418.35-493.63 833.66-989.84 1253.77-1481.98zM2225.18 2093.89c-25.69 23.73-51.45 47.35-84.36 61.08-409.67-493.88-826.27-982.38-1240.62-1472.47-21.19-24.81-23.91-37.67 2.76-59.1 73.26-58.86 148.91-114.19 229.74-167.75 363.38 547.08 711.1 1104 1092.48 1638.25zM3289.17 2327.55c-19.68-27.52-47.54-49.93-53.65-85.92 511.04-383.26 1002.62-793.31 1505-1187.87 21.24-20.48 32.24-12.97 46.38 6.2 52.25 70.86 100.16 144.45 145.43 219.98 15.05 25.12-5.46 25.38-16.14 32.01-545.58 333.19-1084.6 677.89-1627.01 1015.6zM3235.83 3208.03c8.16-36.07 30.6-62.47 57.94-85.54 540.04 344.94 1083.05 685.31 1630.03 1019.13 13.74 8.03 17.52 12.09 8.33 27.87-44.29 76.13-93.13 149.12-145.13 220.13-13.89 18.97-23.41 24.65-46.33 6.35-501.68-395.44-997.45-800.97-1504.85-1187.95zM2051.83 2249.44c-14 32.21-34.81 59.61-59.52 84.26-534.11-350.16-1084.74-674.56-1626.46-1012.78-23.45-14.42-29.92-24.25-13.35-50.32 50.25-79.05 101.93-156.89 161.24-231.77 512.54 405.5 1012.14 823.15 1538.09 1210.61zM1992.17 3116.2c25.23 24.2 45.35 52.04 59.83 83.9-526.72 385.49-1024.21 808.66-1538.82 1209.96-58.74-74.05-110.27-151.92-160.55-230.87-16.49-25.9-10.36-36.08 13.03-50.41 543.43-335.14 1090.62-666.2 1626.51-1012.58zM3381.97 2542.42c-17.32-29.09-34.27-58.27-20.27-94.09 587.67-200.19 1164.8-431.15 1747.95-644.34 52.61-19.1 54-19.3 69.1 33.29 21.12 73.58 39.78 147.86 60.02 221.69 5.97 21.77 3.22 31.01-23.23 37.12-613.02 141.13-1224.14 290.35-1833.56 446.32zM3357.35 2999.26c-4-33.93 4.51-64.52 24.52-92.05 610.89 156.51 1224.03 303.74 1838.17 446.89 22.63 5.32 23.57 15.18 19.73 32.71-18.55 84.58-43.28 167.43-68.66 250.15-7.03 22.92-17.99 24.68-38.13 17.17-592.6-216.17-1179.44-448.95-1775.64-654.86zM1931.08 2448.81c9.98 33.75-12.11 61.18-18.11 91.79-596.12-149.13-1193.92-291.21-1791.86-432.8-76.19-18.16-77.42-18.82-58.48-96.76 15.34-63.09 35.49-124.99 51.22-187.99 7.59-30.4 20-32.59 47.86-22.22 589.96 215.22 1176.64 441.06 1769.36 647.98zM1913.28 2909.11c5.02 30.76 28.41 57.98 17.69 91.76-116.11 31.82-227.13 78.21-339.82 119.72-470.12 173.2-939.84 347.49-1409.81 521.1-55.77 20.6-57.57 20.28-73.82-35.71-20.84-71.82-38.4-144.59-58.52-216.63-6.24-22.34-3.42-30.86 22.49-36.81 615.15-142.52 1228.96-291.48 1841.78-443.44zM1895.01 2675.26c2.12 29.97 4.65 59.98-6.65 88.95-616.9 27.03-1234.06 48.84-1850.92 76.04-31.05 1.86-38.55-8.33-37.26-37.55 2.24-50.99 2.42-102.24.02-153.22-1.44-30.64 4.69-41.81 39.03-40.16 618.43 20.93 1237.15 61.99 1855.8 65.94zM3399.35 2762.63c-16.51-28-7.28-57.87-6.3-87.15 615.54 1.68 1231.4-37.95 1846.39-66.43 35.81-2.02 55.28 5.72 47.8 43.2-19.72 45.4 35.99 204.99-37.91 188.18-616.51-29.04-1233.31-54.39-1849.97-77.8z"
                  ></path>
                </svg>
              </div>
              <div className="hometext">
                <motion.div
                  variants={staggeredWordVariants}
                  initial="initial"
                  animate="animate"
                  className="largeText aboveLogo"
                >
                  {["W", "h", "a", "t"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  &nbsp;
                  {["o", "n"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  &nbsp;
                  {["e", "a", "r", "t", "h"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  variants={staggeredWordVariants1}
                  initial="initial"
                  animate="animate"
                  className="largeText leftOfLogo"
                >
                  {["i", "s"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  variants={staggeredWordVariants2}
                  initial="initial"
                  animate="animate"
                  className="largeText rightOfLogo"
                >
                  {["G", "l", "a", "c", "e", "?"].map((letter, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariants}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
            <motion.div
              className="secondSection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="glacierShadowBox"></div>
              <Image
                src={Glacier}
                style={{ transform: `translateX(${-scrollY / 200}%)` }}
                alt="Artic ice on ocean water"
                className="glacier"
              />
              <div className="secondSectionText medText" id="section1">
                <motion.p
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  We have all heard that{" "}
                  <span className="lighthigh">arctic ice</span> is melting as a
                  consequence of our actions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: easeInOut }}
                >
                  What most people don’t know is that we can be{" "}
                  <span className="lighthigh">
                    a lot more specific than that
                  </span>
                  .
                </motion.p>
              </div>
            </motion.div>
            <div className="movingSection1">
              <div className="thirdSection">
                <div className="thirdSectionText medText">
                  <motion.p
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                  >
                    One year of{" "}
                    <span className="lighthigh">
                      using a reusable shopping bag
                    </span>{" "}
                    instead of plastic bags for example saves about 150 cm² of
                    arctic ice.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                  >
                    That’s a bit larger than an iPhone Pro Max.
                  </motion.p>
                </div>
                <Image
                  src={Phone}
                  style={{
                    transform: `scale(${70 + scrollY / 30}%) rotate(${0}deg)`,
                  }}
                  alt="A phone made out of ice"
                  className="phone"
                />
              </div>
              <div className="fourthSection">
                <Image
                  src={PingPong}
                  style={{
                    transform: `rotate(${scrollY / 100}deg)`,
                  }}
                  alt="A ping pong table made out of ice"
                  className="pingpong"
                />
                <div className="fourthSectionText medText">
                  <motion.p
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                  >
                    One year of{" "}
                    <span className="lighthigh">eating a plant-based diet</span>{" "}
                    saves about the size of a ping pong table.
                  </motion.p>
                </div>
              </div>
              <div className="fifthSection">
                {/* <div className="bearsShadowBox"></div> */}
                <Image
                  src={Bears}
                  style={{
                    transform: `scale(${1 + (scrollY - 2500) / 5000})`,
                  }}
                  alt="An aereal shot of arctic sea ice with ice bears on it"
                  className="bears"
                />
                <div className="fifthSectionText medText">
                  <motion.p
                    initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeInOut }}
                  >
                    By this we mean the{" "}
                    <span className="lighthigh">surface of ice</span> as seen
                    from a satellite image - we can calculate this based on{" "}
                    <span className="lighthigh">mass of CO2 emissions</span>.
                  </motion.p>
                </div>
                <motion.div className="bearFrames">
                  <Image
                    src={FrameSmall}
                    // style={{
                    //   transform: `scale(${1 + (scrollY - 2500) / 10000})`,
                    // }}
                    alt="Frame to show the area of ice melted for 100kg of Co2"
                    className="frame"
                  />
                  <Image
                    src={FrameMed}
                    // style={{
                    //   transform: `scale(${1 + (scrollY - 2500) / 10000})`,
                    // }}
                    alt="Frame to show the area of ice melted for 100kg of Co2"
                    className="frame"
                  />
                  <Image
                    src={FrameBig}
                    // style={{
                    //   transform: `scale(${1 + (scrollY - 2500) / 10000})`,
                    // }}
                    alt="Frame to show the area of ice melted for 100kg of Co2"
                    className="frame"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </AnimatePresence>
    </main>
  );
}
