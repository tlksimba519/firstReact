import {useState, useEffect, useCallback} from 'react';

function useMouseY(props){
    const [mousePosY, setMousePosY] = useState(0);
    
    // 由於useState給的setMousePosY的ref不會變，所以此函式不會改變
    const mouseListener = useCallback((event)=>{
        setMousePosY(event.pageY);
    },[setMousePosY]);

    useEffect(()=>{
        window.addEventListener('mousemove',mouseListener);
        return ()=>{
            window.removeEventListener('mousemove',mouseListener);
        }
    },[])

   return mousePosY;
}

export default useMouseY;