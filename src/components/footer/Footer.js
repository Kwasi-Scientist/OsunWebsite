import React from 'react';
import { FooterContainer, FooterSubHeading, FooterSubText, FooterSubscription, Form, FormInput } from './Footer.elements';
import { Button } from '../../globalstyles'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership and be awesome
                </FooterSubHeading>
                <FooterSubText>
                    You can be lame at any time
                </FooterSubText>
                <Form>
                    <FormInput name ='email' type='email' placeholder=' Your Email' />
                        <Button fontBig> Subscribe</Button>
                </Form>
            </FooterSubscription>

        </FooterContainer>
    )
}

export default Footer;