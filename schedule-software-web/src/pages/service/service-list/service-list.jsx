import { useState } from "react";
import { ItemButton } from "../../../components/buttons/item-button/item-button";
import { Input } from "../../../components/input/input";
import { langData, servData } from "../../../data/data management/database-management";
import { SLHeader } from "./service-list-header/service-list-header";

function arrayToTime(array) {
  const isArray = Array.isArray(array[0]);
  var time = array.length * 15
  if (isArray) {
    time = array.map(subArray => {
      return subArray.length * 15
    })
  }
  console.log(time)
  return time
}

export function ServiceList() {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(servData.map(serv => { try { return serv.stages.map(() => false) } catch { return false } }))

  return (
    <div className='professional-list-page'>
      <SLHeader />
      <div className='pl-search-bar-div'>
        <Input placeholder={langData.input.search} value={text} setValue={setText} />
      </div>
      <div className='pl-professional-list'>
        {servData.map((serv) => {
          const index = servData.indexOf(serv)
          if (serv.name.toLowerCase().includes(text.toLowerCase())) {
            return <ItemButton image={serv.photo} title={serv.name} from={serv.from} value={serv.value} duration={arrayToTime(serv.time)} stages={serv.stages} selected={selected[index]} />;
          }
        })}
      </div>
    </div>
  );
}
