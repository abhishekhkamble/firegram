import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";
import { motion } from "framer-motion";

function ProgressBar({ file, setFile }) {
  const { url, progress } = useStorage(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  console.log(progress, url);
  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}

export default ProgressBar;
