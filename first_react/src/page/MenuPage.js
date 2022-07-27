import React, {useState, useRef,useCallback, useMemo, useEffect, useReducer} from "react";

import MenuItem from "../component/MenuItem";
import Menu from "../component/Menu";
import { OpenContext } from "../context/ControlContext";

import useMouseY from '../util/useMouseY';


let menuItemWording = [{id:"0",text:"Like的發問"}, {id:"1",text:"Like的回答"}, {id:"2",text:"Like的文章"}, {id:"3",text:"Like的留言"}];

const MenuPage = () => {
    const mousePosY = useMouseY();
    // const [isOpen, setIsOpen] = useState(true);
   

    const reducer = function(state, action){
        switch(action.type){
            case "SWITCH": 
                return !state; // 只有開/關
            default:
                throw new Error("Unknown action");
        }
    }
    const [isOpen, isOpenDispatch] = useReducer(reducer,true);
    /* 定義counter */
    const renderCounter = useRef(0);
    renderCounter.current++;

    /* 定義列印函式 */
    const handleClick = useCallback(() => {
        console.log("counter is " + renderCounter.current);
    },[renderCounter]);

//   let menuItemArr = menuItemWording.map((wording, index) => (
//     <MenuItem key={index} text={wording} handleClick={handleClick}/>
//   ));

let menuItemArr = useMemo(()=> {
    return menuItemWording.map((wording) => <MenuItem key={wording.id} text={wording.text}/>)
},[]);

useEffect(()=>{
    console.log(mousePosY);
},[mousePosY])

  return (
    <OpenContext.Provider value={{ 
        openContext: isOpen, 
        setOpenContext: isOpenDispatch
    }}>
      <Menu title={"Andy Chang的like"}>{menuItemArr}</Menu>
    </OpenContext.Provider>
  );
};

export default MenuPage;
