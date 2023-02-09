import React from "react";
import { subtitleHandler } from "../../../../functions/subtitle-handler/subtitle-handler";
import { DetailButton } from "../../detail-button/detail-button";

import "./left-block.css";

function Image({ image }) {
  return <>{image ? <img className='image' src={image}></img> : null}</>;
}

function Title({ title, selected }) {
  return (
    <>
      <p
        className={`title-text ${
          selected ? "secondary-color" : "terciary-color"
        }`}>
        {title}
      </p>
    </>
  );
}

function Subtitle({ subtitle, selected }) {
  return (
    <>
      {subtitle ? (
        <DetailButton
          text={subtitleHandler(subtitle)}
          status={selected}></DetailButton>
      ) : null}
    </>
  );
}

function IBLeftBlock({ image, title, subtitle, selected }) {
  return (
    <div className='left-block'>
      <Image image={image} />
      <div className={`title-block`}>
        <Title title={title} selected={selected} />
        <Subtitle subtitle={subtitle} selected={selected} />
      </div>
    </div>
  );
}
export {IBLeftBlock}