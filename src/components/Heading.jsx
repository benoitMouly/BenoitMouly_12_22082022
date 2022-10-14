import React from 'react';
import propTypes from 'prop-types';


/**
 * Heading who represents the header of the graphs
 * @component react
 *  @param {Object} userGeneralInfos props
 * @returns {JsxElement} 
 */

const Heading = (userGeneralInfos) => {
    return (
        <div>
            <h2 className='heading-user' style={headerTextStyle}>Bonjour <span className='user-name' style={nameStyle}>{userGeneralInfos.generalInfos.name} </span></h2>
            <p style={introStyle}> Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

const nameStyle = {
    color: "#FF0101"
}
const headerTextStyle = {
    fontSize: '38px',
    fontWeight: '500',
    fontFamily: 'Roboto',
    marginBottom: '1rem'
}
const introStyle = {
    fontSize: '15px',
    fontWeight: '300',
    fontFamily: 'Roboto',
    marginBottom: '0',
    marginTop: '0'
}

/* propTypes */ 

Heading.propTypes = {
    userGeneralInfos: propTypes.array
  }

export default Heading;