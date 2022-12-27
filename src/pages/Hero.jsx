import React from "react";
import styled from "styled-components";
import {HeroImage} from "../components/Hero/HeroImage";
import star from '../assets/images/svg/Star.svg';
import bitmap from '../assets/images/HeroSection/Bitmap.png'
import {PrimaryLightButton} from "../components/buttons/PrimaryLightButton";
import {PrimaryDarkIcon} from "../components/buttons/PrimaryDarkIcon";

export const Hero = () => {
    return(
        <>
            <HeroSection className='flex justify-between'>
                <div >
                    <H5>modern studio</H5>
                    <H1>We’re Help
                        To Build Your
                        Dream Project</H1>
                    <Paragraph>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </Paragraph>
                    <Star>
                        <img src={star} alt="Star"/>
                    </Star>
                    <div className='flex items-center'>
                    <PrimaryLightButton  name={'how we work'} />
                        <ContactUs>contact us</ContactUs>
                    </div>
                    <div className='flex items-end'>
                    <PrimaryDarkIcon img={bitmap}/>

                    <MetaDescription>"Put themselves in the merchant's shoes" <MetaParagraph>Meta Inc.</MetaParagraph></MetaDescription>

                    </div>
                </div>

                <HeroImage />
            </HeroSection>
        </>
    )
}
const H5 = styled.h5`
  margin-bottom: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #EF6D58;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const H1 = styled.h1`
  position: relative;
  z-index: 1;
  inline-size: 482px;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 80px;
  letter-spacing: -2px;
  color: #FFFFFF;
`
const Paragraph = styled.p`
  margin-top: 24px;
  margin-bottom: 34px;
  inline-size: 400px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.64);
`

const HeroSection = styled.div`
  margin-top:114px;
  margin-left: 135px;
  margin-right: 135px;
    `

const Star = styled.div`
    position: absolute;
  left: 413px;
  top: 210px;
  z-index: 0;
    `

const ContactUs = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-transform: capitalize;
  margin-left: 46px;
  color: #FFFFFF;
    `

const MetaDescription = styled.p`
  margin-left: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.64);
`
const MetaParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #FFFFFF;

`