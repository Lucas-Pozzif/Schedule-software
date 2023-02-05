import React from "react";
import { localLanguage } from "../../../../data/language-selector";
import { subtitleHandler } from "../../../../functions/subtitle-handler/subtitle-handler";
import { DetailButton } from "../../detail-button/detail-button";

import './left-block.css';

export function IBLeftBlock({
    image,
    title,
    subtitle,
    selected

}) {

    return (
        <div className='left-block'>
            {image ?
                <img className='image' src={image}></img> :
                null
            }
            <div className={`title-block`}>
                <p className={`title-text ${selected?'secondary-color':'terciary-color'}`}>{title}</p>
                {
                    subtitle ?
                        <DetailButton text={subtitleHandler(subtitle)} status={selected}></DetailButton> :
                        null
                }
            </div>
        </div>
    )
}