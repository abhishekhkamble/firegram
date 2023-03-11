import React, { useEffect, useState } from "react";
// import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  // const {docs} = useFirestore('images')
  const [docs, setDocs] = useState([]);
  const getImages = async () => {
    try {
      const data = await fetch("http://localhost:9090/api/v1/image", {
        method: "GET",
      });

      const response = await data.json();
      setDocs(response.result);
      console.log(response.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImages();
  }, [setSelectedImg]);
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
