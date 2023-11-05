import './styles/App.scss';
import AppFrame from "../../shared/AppFrame";
import Carousel from "./Carousel";
import Donation from "./Donation";
import { publicAsset } from '../../utils';

function App() {
    return (
        <AppFrame>
            <Carousel
                images={[
                    {
                        src: publicAsset('images/old-gallery/old_gallery_1.jpg'),
                        alt: 'A beautiful landscape',
                    },
                    {
                        src: publicAsset('images/old-gallery/old_gallery_2.jpg'),
                        alt: 'A beautiful landscape',
                    },
                    {
                        src: publicAsset('images/old-gallery/old_gallery_4.jpg'),
                        alt: 'A beautiful landscape',
                    },
                ]}
            />
            <Donation 
                availableAmounts={[1000, 2000, 5000, 10000, null]}
            />
        </AppFrame>
    );
}

export default App;
