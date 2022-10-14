import energyicon from '../assets/icons/energy.svg';
import chickenicon from '../assets/icons/chicken.svg';
import appleicon  from '../assets/icons/apple.svg';
import cheeseburgericon from '../assets/icons/cheeseburger.svg';
import './graph/graphcss/BannerRight.css';
import propTypes from 'prop-types';

/**
 * BannerRight who represents the banner at the right, used as aside right
 * @component react
 *  @param {Object} datas props
 * @returns {JsxElement} 
 */

const BannerRight = (datas) => {
    const dataKcal = datas.generalInfoDatas.userGeneral.calorieCount
    const dataProteins = datas.generalInfoDatas.userGeneral.proteinCount
    const dataGlucides = datas.generalInfoDatas.userGeneral.carbohydrateCount
    const dataLipides = datas.generalInfoDatas.userGeneral.lipidCount


    return (
            <div className="sidebarRight" >
                    <ol className='sidebarRight-ol' style={truc}>
                        <li className='sidebarRight-li'><img src={energyicon} className='energy' alt="altable"/><div style={marged}>{dataKcal.toLocaleString('en-US')}kCal<br/><span className='dataName'>Calories</span></div></li>
                        <li className='sidebarRight-li'><img src={chickenicon} className='proteins' alt="altable" /><div style={marged}>{dataProteins}g<br/><span className='dataName'>Proteines</span></div></li>
                        <li className='sidebarRight-li'><img src={appleicon} className="glucides" alt="altable"/> <div style={marged}>{dataGlucides}g<br/><span className='dataName'>Glucides</span></div></li>
                        <li className='sidebarRight-li'><img src={cheeseburgericon} className="lipids" alt="altable"/><div style={marged}>{dataLipides}g<br/><span className='dataName'>Lipides</span></div></li>
                    </ol>
            </div>
    );
};
const truc = {
    'display': 'flex',
    'flexDirection': 'column'
}

const marged = {
    'marginLeft': '1rem',
    'fontWeight': '700',
    'fontSize': '16px'
}

/* propTypes */ 

BannerRight.propTypes = {
    datas: propTypes.array
  }


export default BannerRight;