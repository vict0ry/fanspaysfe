import React from "react";

export const Arrow = ({isArrowClicked, setIsArrowClicked}) => {
    const style = {
        width: 24,
        height: 24,
        transform: "rotate(0deg)",
        transition: "300ms",
        cursor: "pointer",
        transformOrigin: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    if(isArrowClicked){
        style.transform = "rotate(180deg)"
    } else {
        style.transform = "rotate(0deg)"
    }

    return(
        <div 
            style={style}
            onClick={() => {
                setIsArrowClicked(!isArrowClicked);
            }}
        >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 7L7 1L1 7" stroke="#5D5E65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}