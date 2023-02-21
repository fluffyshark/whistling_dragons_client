import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import imageCompression from 'browser-image-compression';
import icon_upload_image from "../assets/misc/icon_upload_image.png"
import { createCampaignThumbnail, createMap } from '../../redux/CreateCampaignReducer';
import { createEncounterThumbnail } from '../../redux/CreateEncounterReducer';

type ImageUploadCompressProps = {
    parentComponent:string
}


const ImageUploadCompress = ({parentComponent}:ImageUploadCompressProps) => {
    
    const [origImage, setOrigImage] = useState('');
    const [origImageFile, setOrigImageFile] = useState<File | null>(null);
    const [compressedImage, setCompressedImage] = useState('');

    const fileInputRef = useRef<HTMLInputElement>(null);


    const dispatch = useDispatch()
    // Accessing global store for createCampaignData object
    const createCampaign = useSelector((state:any) => state.createcampaign.value)


    // Save uploaded image to local storage
    const handleFileInputChange = () => {
        const imageFile = fileInputRef.current?.files?.[0];
        if (imageFile) {
            setOrigImage(URL.createObjectURL(imageFile));
            setOrigImageFile(imageFile);
        }
    };


    // Handling compression
    const handleCompressImage = () => {
    
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 500,
            useWebWorker: true,
        };

        if (!origImageFile) {
        
        return;
        }

        if (options.maxSizeMB >= origImageFile.size / 1024) {
        alert("Image is too small, can't be compressed");
        return;
        }

        imageCompression(origImageFile, options).then((output) => {
        const downloadLink = URL.createObjectURL(output);
        setCompressedImage(downloadLink);
        });
    };



    // Triggering uploading window (input tag is also needed)
    const handleFileButtonClick = () => {
        fileInputRef.current?.click();
    };



    // Start image compression if the image has been uploaded as origImageFile 
    useEffect(() => {
        if (origImageFile !== null) {
            handleCompressImage();
        }
    }, [origImageFile]);



    // Dispatch image to createCampaignReducer if parent component is CardCreator or CreateCampaignEncounters
    useEffect(() => {
        console.log("compressedImage", compressedImage)
        if (parentComponent === "CardCreator") {
            setTimeout(() => { dispatch(createCampaignThumbnail({ thumbnail: compressedImage })) }, 1000)
        }
        if (parentComponent === "EncounterCreator") {
            setTimeout(() => { dispatch(createEncounterThumbnail({ thumbnail: compressedImage })) }, 1000)
        }
    }, [compressedImage])



     // Dispatch image to createCampaignReducer if parent component is MapCreator
     useEffect(() => {
        console.log("origImage", origImage)
        if (parentComponent === "MapCreator" && origImage !== "") {
            setTimeout(() => { dispatch(createMap({ maps: [origImage] })) }, 1000)
        }
    }, [origImage])



    // Differ between if image is meant to be used as thumbnail or map, no compression for maps
    function onlyUploadOrAlsoCompress() {
        let image = ""

        if (parentComponent === "CardCreator" || parentComponent === "EncounterCreator") {
            image = compressedImage
        }
        else if (parentComponent === "MapCreator") {
            image = origImage
        }
        
        return image
    }



  return (
    <div >
        
        {onlyUploadOrAlsoCompress() ? (
                <div style={{height:"205px", width:"300px", objectFit:"cover", overflow:"hidden"}}>
                <img style={{height:"205px", width:"300px", objectFit:"cover"}} src={compressedImage} alt="Compressed Image" onClick={handleFileButtonClick} />
                <input style={{opacity:0}} type="file" accept="image/*" ref={fileInputRef}  onChange={handleFileInputChange} />
                </div>  
        ) : (
                <div style={{width:"55px", height:"60px"}}>
                    <img src={icon_upload_image} alt="Original Image" onClick={handleFileButtonClick} />
                    <input style={{opacity:0}} type="file" accept="image/*" ref={fileInputRef}  onChange={handleFileInputChange} />
                </div>
        )}

    </div>
  );
};

export default ImageUploadCompress;