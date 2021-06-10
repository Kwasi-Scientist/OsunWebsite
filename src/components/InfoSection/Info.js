import React from 'react';
import { Link } from 'react-router-dom';
//import { Button } from "../components/Button";
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img, 
 } from './InfoSection.elements'
import { Container, Button } from '../../globalstyles';

const Info = ({ lightBg, imgStart, lightTopLine, lightTextDesc, lightText, buttonLabel, description, headline, topLine, img, alt, start}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine = {lightTopLine}>{topLine}</TopLine>
                                <Heading lightText = {lightText}>{headline}</Heading>
                                <Subtitle lightTextDec={lightTextDesc}>{description}</Subtitle>
                                <Link to ='/signup'>
                                    <Button big fontBig primary>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                                {/* test Home page */}
                            </TextWrapper>
                        </InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default Info;