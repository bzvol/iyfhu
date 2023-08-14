import './styles/Header.scss';
import Navbar from "./Navbar";
import {publicAsset} from "./utils";
import {Menu as MenuIcon} from "@mui/icons-material";
import {useState} from "react";
import {useMediaQuery} from "@mui/material";

export default function Header() {
    const isDesktop = useMediaQuery('screen and (min-width: 768px)');
    const [navbarOpen, setNavbarOpen] = useState(isDesktop);

    return (
        <header className="Header">
            <img src={publicAsset("/images/iyfhu_logo.png")} alt="IYF logo" className="logo" />
            <MenuIcon className="navbar__toggle" onClick={() => setNavbarOpen(prev => !prev)}/>
            {navbarOpen && <Navbar/>}
        </header>
    );
}