import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const MarsRover = () => {
  const navigate = useNavigate();
  const [marsData, setMarsData] = useState(null);

  //fetch data mars rover photos from nasa api
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Y86ZNmyFVrpKv18hkyWgbRYxIa3rHqCJrffnadbh"
    )
      .then((response) => response.json())
      .then((data) => setMarsData(data.photos[0]))
      .catch((error) =>
        console.error("Error fetching Mars Rover data: ", error)
      );
    console.log(marsData);
  }, []);

  const ProjectCard = ({ name, description, image, date }) => {
    return (
      <motion.div
        className="bg-tertiary rounded-2xl sm:w-[1100px] w-full p-5"
        whileHover={{ scale: 1 }}>
        <Tilt
          options={{
            max: 25,
            scale: 0.5,
            speed: 450,
          }}
          className="relative w-full h-[500px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </Tilt>
        <div className="mt-5">
          <h3 className="text-white text-[20px] font-bold">
            Explorer Mars Rover Photos
          </h3>
          <p className="mt-1 text-white text-[14px]">
            The Mars Rover missions have revolutionized our understanding of the
            Red Planet by capturing stunning images of its surface. Equipped
            with advanced cameras, these rovers traverse the Martian terrain,
            documenting geological features, potential habitats, and atmospheric
            phenomena. These photos provide invaluable insights into Mars past,
            present, and potential for future exploration, offering tantalizing
            glimpses of a world that continues to captivate scientists and space
            enthusiasts alike.
          </p>

          <div className="mt-4 text-green-400 hover:text-green-600">
            <Link to="/mars-rover">Explore More</Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="apod-container">
      {marsData ? (
        <>
          <motion.h2
            className={styles.sectionHeadText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            Mars Rover Photos
          </motion.h2>
          <div className="mt-20 flex flex-wrap gap-7">
            <ProjectCard image={marsData.img_src} />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SectionWrapper(MarsRover, "");
