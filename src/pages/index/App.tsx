import React from 'react';
import './styles/App.scss';
import AppFrame from "../../shared/AppFrame";
import Carousel from "./Carousel";

function App() {
    return (
        <AppFrame>
            <Carousel
                images={[
                    {
                        src: 'http://34.128.168.249/old-gallery/old_gallery_1.jpg',
                        alt: 'A beautiful landscape',
                    },
                    {
                        src: 'http://34.128.168.249/old-gallery/old_gallery_2.jpg',
                        alt: 'A beautiful landscape',
                    },
                    {
                        src: 'http://34.128.168.249/old-gallery/old_gallery_4.jpg',
                        alt: 'A beautiful landscape',
                    },
                ]}
            />
        </AppFrame>
    );
}

export default App;
