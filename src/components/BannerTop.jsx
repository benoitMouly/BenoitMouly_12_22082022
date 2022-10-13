import React from 'react';
import logo from '../assets/logo.svg'

/**
 * BannerTop who represents the banner at the top, used as header
 * @component react
 * @returns {JsxElement} 
 */

const BannerTop = () => {
    return (
        <header>
                <div className="headerElt">
                    <nav className="headerElt-nav">
                    <div className="logo"><img src={logo} alt="altable"/></div>
                        <ol className='headerElt-nav-ol'>
                            <li className="headerElt-nav-li"><a href="unclickable">Accueil</a></li>
                            <li className="headerElt-nav-li"><a href="unclickable">Profil</a></li>
                            <li className="headerElt-nav-li"><a href="unclickable">Réglage</a></li>
                            <li className="headerElt-nav-li"><a href="unclickable">Communauté</a></li>
                        </ol>
                    </nav>
                </div>
        </header>
    );
};

export default BannerTop;