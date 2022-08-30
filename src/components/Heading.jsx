import React from 'react';

const Heading = (userGeneralInfos) => {
    console.log(userGeneralInfos)
    return (
        <div>
            <h2 className='heading-user'>Bonjour <span className='user-name'>{userGeneralInfos.name} {userGeneralInfos.calorieCount}</span></h2>
        </div>
    );
};

export default Heading;