import { useEffect } from "react";
import { useRef, useState } from "react";
import { LuTrash, LuFileImage } from "react-icons/lu";

const CoverImageSelector = ({ image, setImage, preview, setPreview }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Sync parent preview with local state if it exists
  useEffect(() => {
    if (typeof preview === "string") {
      setPreviewUrl(preview);
    } 
  }, [preview]);


  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const url = URL.createObjectURL(file);
      // Update parent preview if function exists
      if (setPreview) {
        setPreview(url);
      }
      // Always update local preview
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = () => {
    // Mark cover image as removed
    setImage(null);
    if (setPreview) {
      setPreview(null);
    }
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="mb-6">
      <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
      />

      {/* {!image && !preview ? ( */}
      {!image && !previewUrl ? (  
        <div
            className="w-full h-56 flex flex-col items-center justify-center gap-2
             bg-gray-50/50 rounded-md border border-dashed border-gray-300 cursor-pointer relative"
            onClick={onChooseFile}
        >
          <div className="w-14 h-14 flex items-center justify-center bg-sky-50 rounded-full">
            <LuFileImage className="text-xl text-sky-600" />
          </div>
          <p className="text-sm text-gray-700">Click to upload a cover image</p>
        </div>
      ) : (
        <div className="relative w-full h-56
         group
         ">
          <img
            // src={preview || previewUrl}
            src={previewUrl}
            alt="Cover"
            className="w-full h-full object-cover rounded-md"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full 
            shadow-md cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity
            "
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  )
};

export default CoverImageSelector;