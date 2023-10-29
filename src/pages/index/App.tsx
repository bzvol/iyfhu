import React from 'react';
import './styles/App.scss';
import AppFrame from "../../shared/AppFrame";
import Carousel from "./Carousel";
import {cdnAsset} from "../../utils";

function App() {
    return (
        <AppFrame>
            <Carousel
                images={[
                    {
                        src: cdnAsset('old-gallery/old_gallery_1.jpg'),
                        alt: 'A beautiful landscape',
                    },
                    {
                        src: cdnAsset('old-gallery/old_gallery_2.jpg'),
                        alt: 'A beautiful landscape',
                    },
                    {
                        src: cdnAsset('old-gallery/old_gallery_4.jpg'),
                        alt: 'A beautiful landscape',
                    },
                ]}
            />
        </AppFrame>
    );
}

export default App;
