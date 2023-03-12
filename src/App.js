import { useState } from "react";
import "./App.css";
import ImageGrid from "./Component/ImageGrid";
import Modal from "./Component/Modal";
import Title from "./Component/Title";
import UploadForm from "./Component/UploadForm";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageUpload = (newImage) => {
    setUploadedImages([...uploadedImages, newImage]);
  };

  return (
    <div className="App">
      <Title />
      <UploadForm onImageUpload={handleImageUpload} />
      <ImageGrid
        uploadedImages={uploadedImages}
        setSelectedImg={setSelectedImg}
      />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
