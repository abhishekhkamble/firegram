import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function ImageGrid({ uploadedImages, setSelectedImg }) {
  const [docs, setDocs] = useState([]);

  const getImages = async () => {
    try {
      const data = await axios.get("http://localhost:9090/api/v1/image");
      const response = await data.data;
      setDocs(response.result);
      console.log(response.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [uploadedImages]);

  console.log(docs);
  //   console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc._id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded picture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
