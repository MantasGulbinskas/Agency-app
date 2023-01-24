import React from "react";
import styled from "styled-components";
import {HrLine} from "../components/HorizontalLine/HrLine";
import {CompanyLogo} from "../components/CompanyLogo/CompanyLogo";
import {AboutExperience} from "../components/AboutExperience/AboutExperience";

export const SectionAbout = () => {

    return (
        <AboutSection>
            <CompanyLogo/>
            <HrLine/>
            <AboutExperience />
        </AboutSection>)
}

const AboutSection = styled.section`
  background: #FDF0E9;
`