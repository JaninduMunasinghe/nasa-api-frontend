import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Apod = () => {
  const [apodData, setApodData] = useState(null);

  //fetch data from nasa api
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Y86ZNmyFVrpKv18hkyWgbRYxIa3rHqCJrffnadbh"
    )
      .then((response) => response.json())
      .then((data) => setApodData(data))
      .catch((error) => console.error("Error fetching APOD data: ", error));
    console.log(apodData);
  }, []);

  const ProjectCard = ({ name, description, image, date, mediaType }) => {
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
          {mediaType === "image" ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <iframe
              src={image}
              title={name}
              className="w-full h-full object-cover rounded-2xl"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
        </Tilt>
        <div className="mt-5">
          <h3 className="text-white text-[20px] font-bold">{name}</h3>
          <p className="mt-1 text-white text-[14px]">{date}</p>
          <p className="mt-3 text-secondary text-[14px]">{description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="apod-container">
      {apodData ? (
        <>
          <motion.h2
            className={styles.sectionHeadText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            Astronomy Picture of the Day
          </motion.h2>
          <div className="mt-20 flex flex-wrap gap-7">
            <ProjectCard
              name={apodData.title}
              description={apodData.explanation}
              image={apodData.url}
              date={apodData.date}
            />
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SectionWrapper(Apod, "");
