/* eslint-disable jsx-a11y/alt-text */
// noinspection HtmlRequiredAltAttribute

import './styles/Carousel.scss';
import {RefObject, useEffect, useRef, useState} from "react";

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
    const currentImg = useRef<HTMLImageElement>(null);
    const nextImg = useRef<HTMLImageElement>(null);

    useEffect(() => {
        [currentImg, nextImg].forEach(ref => ref.current?.style.setProperty('--transition-time', `${transitionTime}s`));

        const toggleRefsActive = () => [currentImg, nextImg].forEach(ref => ref.current?.classList.toggle('active'));
        const interval = setInterval(() => {
            toggleRefsActive();
            setTimeout(() => {
                toggleRefsActive();
                setCurrentSlide(prev => (prev + 1) % images.length);
            }, 1000 * transitionTime);
        }, 1000 * (timePerSlide + transitionTime));
        return () => clearInterval(interval);
    }, [images, timePerSlide, transitionTime]);

    return (
        <section className="Carousel">
            <img ref={currentImg} {...(images[currentSlide])}/>
            <img ref={nextImg} {...(images[(currentSlide + 1) % images.length])}/>
        </section>
    );
}
