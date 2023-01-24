import React from "react";
import AboutImage from '../../assets/images/AboutSection/AboutImage.png'
import Face1 from '../../assets/images/AboutSection/Face1.png'
import styled from "styled-components";
import {SecondaryLightButton} from "../buttons/SecondaryLightButton";
import AnimatedNumber from "../CustomHooks/AnimatedNumber";

export const AboutExperience = () => {
    return (
        <section className='mt-[101px] mx-[135px]'>
            <div className='flex'>
                <div className='relative  max-w-xl mx-auto '>
                    <img src={AboutImage} alt=""/>
                    <div className="rounded-full bg-[#EF6D58] w-52 h-auto overflow-hidden absolute top-[52%] left-2 ">
                        <img className=' h-auto mx-auto' src={Face1} alt=""/>
                    </div>
                </div>
                <div className='max-w-md mx-auto mb-[285px]'>
                    <H5>about</H5>
                    <H2>An Experience Design Agency</H2>
                    <H3>Provides a full service range</H3>
                    <Paragraph>Ability to put themselves in the merchant's shoes. It is meant to partner on the long
                        run, and work as an extension of the merchant's team.</Paragraph>
                    <SecondaryLightButton name={'about us'}/>
                </div>
            </div>
            <div className="flex flex-wrap ">
                <div className="w-full md:w-1/3 p-4 col-border border border-[#F3D1BF] rounded-l-md h-[176px]">
                    <p className='font-normal font-extrabold leading-[48px] text-[40px] text-[#391400]'><AnimatedNumber
                        end={42}/>% </p>
                    <span className='font-normal text-[20px] leading-[32px] text-[#391400]'>Years of experience</span>
                </div>
                <div className="w-full md:w-1/3 p-4 col-border border-y border-[#F3D1BF] h-[176px]"><p
                    className='font-normal font-extrabold leading-[48px] text-[40px] text-[#391400]'><AnimatedNumber
                    end={73}/>+ </p>
                    <span className='font-normal text-[20px] leading-[32px] text-[#391400]'>Agency members</span>
                </div>
                <div className="w-full md:w-1/3 p-4 col-border border border-[#F3D1BF] rounded-r-md h-[176px]"><p
                    className='font-normal font-extrabold leading-[48px] text-[40px] text-[#391400]'><AnimatedNumber
                    end={5000}/> </p>
                    <span className='font-normal text-[20px] leading-[32px] text-[#391400]'>Projects complete</span>
                </div>
            </div>

        </section>
    )
}

const H5 = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 20px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #EF6D58;

`

const H2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 64px;
  inline-size: 400px;
  letter-spacing: -1px;
  margin-bottom: 26px;
  color: #391400;

`

const H3 = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 24px;
  color: #391400;

`
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  inline-size: 450px;
  margin-bottom: 34px;
  color: rgba(57, 20, 0, 0.64);

`
