import './styles/Header.scss';
import Navbar from "./Navbar";
import {Menu as MenuIcon} from "@mui/icons-material";
import {useState} from "react";
import {useMediaQuery} from "@mui/material";
import { publicAsset } from '../utils';

export default function Header() {
    const isDesktop = useMediaQuery('screen and (min-width: 768px)');
    const [navbarOpen, setNavbarOpen] = useState(isDesktop);

    return (
        <header className="Header">
            <div className="Header-content-wrapper">
                <img src={publicAsset("images/iyfhu_logo_white.png")} alt="IYF logo"
                     className="logo"/>
                <MenuIcon className="navbar__toggle" onClick={() => setNavbarOpen(prev => !prev)}/>
                {navbarOpen && <Navbar/>}
            </div>
        </header>
    );
}