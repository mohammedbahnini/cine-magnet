import ProgressiveImage from "react-progressive-image";
import { ImageLoader } from "./ImageLoader";
import { useState } from "react";

export default function MovieImage({ src , alt , className }){

    return (
        <ProgressiveImage src={src} delay={1000}  >
            {(src, loading ) => {
                return loading ? <ImageLoader /> : <img src={src} alt={alt} 
                className={className} 
                 />;
            }}
        </ProgressiveImage>
    )
}