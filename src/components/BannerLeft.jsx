import React from 'react';
import meditationicon from '../assets/icons/meditation.svg';
import swimicon from '../assets/icons/swim.svg';
import bicycleicon  from '../assets/icons/bicycle.svg';
import poundsicon from '../assets/icons/pounds.svg';

/**
 * BannerLeft who represents the banner at the left, used as footer
 * @component react
 * @returns {JsxElement} 
 */

const BannerLeft = () => {
    return (
        <footer>
            <div className="footerElt">
                <div className="footerElt-icons">
                    <ol className='footerElt-ol'>
                        <li className='footerElt-li'><img src={meditationicon} alt="altable"/></li>
                        <li className='footerElt-li'><img src={swimicon} alt="altable"/></li>
                        <li className='footerElt-li'><img src={bicycleicon} alt="altable"/></li>
                        <li className='footerElt-li'><img src={poundsicon} alt="altable"/></li>
                    </ol>
                </div>
                <div className="footerElt-copyright">
                    <p>Copyright, SportSee 2020</p>
                </div>
            </div>
        </footer>
    );
};

export default BannerLeft;