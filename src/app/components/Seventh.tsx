import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, easeInOut, AnimatePresence } from "framer-motion";

//images
import IntroLogo from "../../../public/intrologo.webp";
import Screen1 from "../../../public/screen1.webp";
import Screen2 from "../../../public/screen2.webp";
import Screen3 from "../../../public/screen3.webp";
import Screen4 from "../../../public/screen4.webp";

export default function Seventh() {
  //seventh distance from top
  const divRef = useRef<HTMLInputElement>(null);
  const [distanceToTop, setDistanceToTop] = useState(0);

  const calculateDistanceToTop = () => {
    if (divRef.current) {
      const rect = divRef?.current?.getBoundingClientRect();
      setDistanceToTop(rect.top + window.scrollY);
    }
  };

  useEffect(() => {
    // Initial calculation on mount
    calculateDistanceToTop();

    // Event listener for window resize
    const handleResize = () => {
      calculateDistanceToTop();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  //get viewport height
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    // Function to update the viewport height
    function handleResize() {
      setViewportHeight(window.innerHeight);
    }

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(viewportHeight);
  console.log(scrollY);
  console.log(distanceToTop);

  return (
    <div className="seventhSection" ref={divRef}>
      <div
        className={`seventhLeft ${
          distanceToTop + 1 * viewportHeight >= scrollY ? null : "withBg"
        }`}
      >
        <div className="screens">
          <AnimatePresence>
            {distanceToTop + 1.3 * viewportHeight >= scrollY ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="screen1"
                key="screen1"
              >
                <Image
                  src={Screen1}
                  alt="Screen showing the Glace App"
                  className="screen"
                />
              </motion.div>
            ) : null}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`screen2 ${
                distanceToTop + 1.3 * viewportHeight <= scrollY &&
                distanceToTop + 2.1 * viewportHeight >= scrollY
                  ? "exp"
                  : distanceToTop + 2.1 * viewportHeight <= scrollY
                  ? "exp2"
                  : null
              }`}
              key="screen2"
            >
              <Image
                src={
                  distanceToTop + 1.3 * viewportHeight >= scrollY
                    ? Screen2
                    : Screen4
                }
                alt="Screen showing the Glace App"
                className="screen"
              />
            </motion.div>
            {distanceToTop + 1.3 * viewportHeight >= scrollY ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="screen3"
                // key="screen3"
              >
                <Image
                  src={Screen3}
                  alt="Screen showing the Glace App"
                  className="screen"
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      <div className="seventhRight">
        <div className="introducingCont">
          <div className="introducingGroup">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
              className="smallText introducingText"
            >
              Introducing:
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: easeInOut }}
            >
              <Image
                src={IntroLogo}
                alt="Logo of the app Glace with it's slogan 'The sustainable vault'"
                className="introLogo"
              />
            </motion.div>
          </div>
        </div>
        <div className="featureCont medText">
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            Moving 200€ from your bank to Glace already saves as much arctic ice
            as using a reusable bag all year.
          </motion.p>
        </div>
        <div className="featureCont medText">
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            That‘s because most banks invest only for maximum profits, while we
            invest in green funds - with an estimated return of 3% on your
            money.
          </motion.p>
        </div>
        <div className="featureCont medText">
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            Pick which areas you want to focus on and we will take care of the
            rest.
          </motion.p>
        </div>
        <div className="featureCont medText">
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            Add more money every month, or share the app to friends, and see not
            just your balance, but also your impact grow.
          </motion.p>
        </div>
        <div className="featureCont medText">
          <motion.p
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
          >
            Get a feeling of your impact with an augmented ice sheet of you
            impact.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
