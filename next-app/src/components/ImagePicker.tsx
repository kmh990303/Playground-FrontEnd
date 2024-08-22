"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import React from "react";

const ImagePicker: React.FC<{ label: string; name: string }> = ({
  label,
  name,
}) => {
  const [pickedImage, setPickedImage] = useState<string | undefined>(undefined);
  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div>
      <h1>ImagePicker page!!!</h1>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        accept="image/*"
        id={name}
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <div className="border-2 border-blue-400 w-[35rem] h-[25rem] relative">
        {pickedImage ? (
          <Image
            src={pickedImage}
            alt="image selected by user"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <p>No image selected</p>
        )}
      </div>
      <button type="button" onClick={handlePickClick}>
        Pick an image
      </button>
    </div>
  );
};

export default ImagePicker;
