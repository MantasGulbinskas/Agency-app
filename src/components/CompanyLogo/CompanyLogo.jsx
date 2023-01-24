import React from "react";
import data from "../../Data.json";

export const CompanyLogo = () => {
    const info = data.company

    return (
        <div className="flex justify-around px-[60px] py-[73px] 2xl:justify-between 2xl:mx-[75px] ">
            {info.map((index) => {
                return (
                    <img key={index.id} src={require('../../assets/images/svg/CompanyIcon/' + index.image + '.svg')}
                         alt={index.name}/>)
            })}
        </div>
    )
}