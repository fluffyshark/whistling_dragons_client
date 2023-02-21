import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import imageCompression from 'browser-image-compression';
import icon_upload_image from "../assets/misc/icon_upload_image.png"
import { createCampaignThumbnail } from '../../redux/CreateCampaignReducer';

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


    const handleFileInputChange = () => {
        const imageFile = fileInputRef.current?.files?.[0];
        if (imageFile) {
            setOrigImage(URL.createObjectURL(imageFile));
            setOrigImageFile(imageFile);

        }
    };

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


    const handleFileButtonClick = () => {
        fileInputRef.current?.click();
        setTimeout(() => {
            handleCompressImage()
        }, 500)
    };


    useEffect(() => {
        if (origImageFile !== null) {
            handleCompressImage();
        }
    }, [origImageFile]);



    // Dispatch image to createCampaignReducer if parent component is CardCreator
    useEffect(() => {
        console.log("compressedImage", compressedImage)
        if (parentComponent === "CardCreator") {
            setTimeout(() => { dispatch(createCampaignThumbnail({ thumbnail: compressedImage })) }, 1000)
        }
    }, [compressedImage])



     // Dispatch image to createCampaignReducer if parent component is CardCreator
     useEffect(() => {
        console.log("compressedImage", origImage)
        if (parentComponent === "MapCreator") {
            setTimeout(() => { dispatch(createCampaignThumbnail({ thumbnail: compressedImage })) }, 1000)
        }
    }, [origImage])


    useEffect(() => {
        console.log("createCampaign", createCampaign)
    }, [createCampaign])



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
                <div style={{height:"205px", width:"300px", objectFit:"cover"}}>
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