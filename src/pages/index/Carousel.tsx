/* eslint-disable jsx-a11y/alt-text */
// noinspection HtmlRequiredAltAttribute

import './styles/Carousel.scss';
import {useEffect, useState} from "react";

interface CarouselProps {
    images: Array<{
        src: string;
        alt: string;
        [key: string]: string | number | boolean | undefined;
    }>;
    timePerSlide?: number;
    transitionTime?: number;
}

export default function Carousel({images, timePerSlide = 5., transitionTime = 2.}: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const nextSlide = () => setCurrentSlide(prev => (prev + 1) % images.length);
        
        const interval = setInterval(nextSlide, timePerSlide * 1000);
        return () => clearInterval(interval);
    }, [images, timePerSlide]);

    return (
        <section className="Carousel">
            <img className="Carousel__img current" {...(images[currentSlide])}/>
            <img className="Carousel__img next" {...(images[(currentSlide + 1) % images.length])}/>
        </section>
    );
}
