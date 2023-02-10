import { langData } from "../../../../data/data management/database-management";
import { timeFormatter } from "../../../../functions/time-formatter/time-formatter";

import "./right-block.css";

function Selected({ selected, expanded }) {
  const selectedItems = selected.filter(Boolean).length;

  const displayMessage =
    selectedItems > 0
      ? expanded
        ? null
        : `${selectedItems} ${selectedItems == 1 ? `${langData.selected.masculine.singular}` : `${langData.selected.masculine.plural}`}
      `
      : null;
  return <p className={`selection-text terciary-color`}>{displayMessage}</p>;
}
function From({ from, selected }) {
  return <>{from ? <p className={`from-text ${selected ? "secondary-color" : "terciary-color"}`}>{langData.fromText}</p> : null}</>;
}
function ValueButton({ value, selected }) {
  const displayValue = value ? value : selected ? langData.selected.masculine.singular : langData.select;
  return (
    <div className={`value-button ${selected ? "secondary-color-background" : "terciary-color-background"}`}>
      <p className={`value-text ${selected ? "terciary-color" : "secondary-color"}`}>{displayValue}</p>
    </div>
  );
}
function Duration({ duration, selected }) {
  const durationRange = timeFormatter(duration);
  return <p className={`duration-text ${selected ? "secondary-color" : "terciary-color"}`}>{durationRange}</p>;
}

function ExpansibleBlock({ expanded, setExpanded, selected }) {
  const value = expanded ? langData.see.less : langData.see.more;
  return (
    <div className={`right-block`}>
      <div
        className={`value-block`}
        onClick={() => {
          setExpanded(!expanded);
        }}>
        <ValueButton value={value} />
        <Selected selected={selected} expanded={expanded} />
      </div>
    </div>
  );
}
function UnexpansibleBlock({ from, value, duration, selected, setSelected }) {
  return (
    <div className={`right-block`}>
      <From from={from} selected={selected} />
      <div
        className={`value-block`}
        onClick={() => {
          try {
            setSelected(!selected);
          } catch {}
        }}>
        <ValueButton value={value} selected={selected} />
        <Duration duration={duration} selected={selected} />
      </div>
    </div>
  );
}

function IBRightBlock({ from, value, duration, isExpansible, expanded, setExpanded, selected, setSelected }) {
  return (
    <>
      {isExpansible ? (
        <ExpansibleBlock expanded={expanded} setExpanded={setExpanded} selected={selected} />
      ) : (
        <UnexpansibleBlock from={from} value={value} duration={duration} selected={selected} setSelected={setSelected} />
      )}
    </>
  );
}
export { IBRightBlock };
