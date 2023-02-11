import React, { useState } from "react";
import { IBLeftBlock } from "./left-block/left-block";
import { IBRightBlock } from "./right-block/right-block";
import { IBExpandedMenu } from "./expanded-menu/expanded-menu";

import "./item-button.css";

export function ItemButton({
  image,
  title,
  subtitle,
  from = false,
  value,
  duration,
  stages,

  selected,
  setSelected,
}) {
  const [expanded, setExpanded] = useState(false);


  function isArray(data) {
    return Array.isArray(data);
  }

  return (
    <div className='item-button-group'>
      <div
        className={`item-button ${selected && !isArray(selected)
          ? "terciary-color-background"
          : "secondary-color-background"
          }`}>
        <IBLeftBlock
          image={image}
          title={title}
          subtitle={subtitle}
          selected={selected && !isArray(selected)}
        />
        <IBRightBlock
          from={from}
          value={value}
          duration={duration}
          isExpansible={isArray(stages)}
          expanded={expanded}
          setExpanded={setExpanded}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      {expanded ? (
        <IBExpandedMenu
          stages={stages}
          from={from}
          value={value}
          duration={duration}
          selected={selected}
          setSelected={setSelected}
        />
      ) : null}
    </div>
  );
}
