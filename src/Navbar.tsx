import './styles/Navbar.css'
import {useTranslation} from "react-i18next";
import * as nbd from "./navbarData";
import {ArrowDropDown} from "@mui/icons-material";

export default function Navbar() {
    const {i18n, t} = useTranslation();


    return (
        <nav className="Nav">
            <ul className="navbar">{nbd.data.navItems.map(item => (
                <li className="navbar-item" key={item.key}>
                    {t(nbd.getTitleTranslationKey(item.key))}
                    {item.dropdownKeys && (
                        <ul className="navbar__dropdown">{item.dropdownKeys.map(subItem => (
                            <li className="navbar__dropdown-item"
                                key={subItem}>{t(nbd.getDropdownTranslationKey(item.key, subItem))}</li>
                        ))}</ul>
                    )}
                </li>
            ))}</ul>

            <div className="navbar__lng">
                <img className="navbar__lng-img" src={nbd.getLanguageImageUri(i18n.language)}
                     alt={t(nbd.getLanguageTranslationKey(i18n.language))}/>
                <ArrowDropDown className="navbar__lng__dropdown-icon"/>
                <ul className="navbar__lng__dropdown">
                    {nbd.data.availableLngs.map((lng: string) => (
                        <li className="navbar__lng__dropdown-item" key={lng}
                            onClick={() => i18n.changeLanguage(lng)}>
                            {t(nbd.getLanguageTranslationKey(lng))}
                            <div className="navbar__lng__dropdown-item-img">
                                <img src={nbd.getLanguageImageUri(lng)}
                                     alt={t(nbd.getLanguageTranslationKey(lng))}/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}