import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

const MarsRoverExplorer = () => {
  const navigate = useNavigate();
  const [marsData, setMarsData] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState("");

  // Fetch data function
  const fetchData = (cameraType) => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&camera=${cameraType}&api_key=Y86ZNmyFVrpKv18hkyWgbRYxIa3rHqCJrffnadbh`
    )
      .then((response) => response.json())
      .then((data) => setMarsData(data.photos))
      .catch((error) =>
        console.error("Error fetching Mars Rover data: ", error)
      );
  };

  // useEffect to fetch data when the component mounts or selectedCamera changes
  useEffect(() => {
    fetchData(selectedCamera);
  }, [selectedCamera]);

  const ProjectCard = ({ name, image, date, rover, status }) => {
    return (
      <motion.div
        className="bg-tertiary rounded-2xl sm:w-[1100px] w-full p-5"
        whileHover={{ scale: 1 }}>
        <div className="relative w-full h-[500px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white text-[15px]">Earth Date : {date}</h3>
          <h3 className="text-white text-[15px]">Rover Name : {rover}</h3>
          <h3 className="text-white text-[15px]">Status : {status}</h3>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="apod-container">
      <div className="flex flex-row items-center justify-center mt-7">
        <label htmlFor="cameraType" className="mr-2">
          Select Camera:
        </label>
        <select
          id="cameraType"
          className="p-2 border border-primary rounded-md hover:border-secondary focus:border-primary transition-colors duration-300 ease-in-out cursor-pointer mb-3 min-w-7"
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}>
          <option value="FHAZ">Front Hazard Avoidance Camera (FHAZ)</option>
          <option value="RHAZ">Rear Hazard Avoidance Camera (RHAZ)</option>
          <option value="MAST">Mast Camera (MAST)</option>
          <option value="CHEMCAM">
            Chemistry and Camera Complex (CHEMCAM)
          </option>
          <option value="MAHLI">Mars Hand Lens Imager (MAHLI)</option>
          <option value="MARDI">Mars Descent Imager (MARDI)</option>
          <option value="NAVCAM">Navigation Camera (NAVCAM)</option>
          <option value="PANCAM">Panoramic Camera (PANCAM)</option>
          <option value="MINITES">
            Miniature Thermal Emission Spectrometer (MINITES)
          </option>
        </select>
      </div>

      {marsData.length > 0 ? ( // Check if photos are available
        <>
          <motion.h2
            className={styles.sectionHeadText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}>
            Mars Rover Photos
          </motion.h2>
          <div className="mt-20 flex flex-wrap gap-7">
            {marsData.map((photo) => (
              <ProjectCard
                key={photo.id}
                name={photo.rover.name}
                image={photo.img_src}
                date={photo.earth_date}
                rover={photo.rover.name}
                status={photo.rover.status}
              />
            ))}
          </div>
        </>
      ) : (
        <p className="text-center mt-52 text-[20px] font-bold">
          No photos available. Please select a camera.
        </p>
      )}
    </div>
  );
};

export default SectionWrapper(MarsRoverExplorer, "");
