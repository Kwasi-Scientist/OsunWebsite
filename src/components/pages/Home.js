import React from 'react';

import Info from '../InfoSection/Info';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data'



const Home = () => {
    return (
        <>
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Info {...homeObjThree}/>
            <Info {...homeObjFour}/>
        
        </>
    );
};

export default Home;