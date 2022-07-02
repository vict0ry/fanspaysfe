import * as React from 'react';

const style = {
    zIndex: 1,
}

export const Icon = ({name, color}) => {
    let image;
    switch(name){
        case "search":
            image = 
                <svg style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8333 9.16667C15.8333 11.0076 15.0871 12.6743 13.8807 13.8807C12.6743 15.0871 11.0076 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#5D5E65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.4999 17.5001L13.8806 13.8809" stroke="#5D5E65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
        case "createGroup":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15C10.7614 15 13 12.7614 13 10C13 7.23858 10.7614 5 8 5C5.23858 5 3 7.23858 3 10C3 12.7614 5.23858 15 8 15Z" stroke="#4776E6" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M1 19C1.78955 17.7644 2.83773 16.7559 4.05604 16.0597C5.27435 15.3635 6.62702 15.0001 7.99986 15C9.3727 14.9999 10.7254 15.3633 11.9438 16.0594C13.1621 16.7555 14.2104 17.7639 15 18.9994" stroke="#4776E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 15C18.7614 15 21 12.7614 21 10C21 7.23858 18.7614 5 16 5" stroke="#4776E6" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15.9999 15C17.3727 14.9999 18.7254 15.3633 19.9438 16.0594C21.1621 16.7555 22.2104 17.7639 23 18.9994" stroke="#4776E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
        case "createMailing":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20H21V4H3" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 4L12 13L3 4" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 11H1" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 16H1" stroke="#FFB800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
        case "plus":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 12L18 12" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
        case "attachment":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9V13.5C10 14.8807 11.1193 16 12.5 16C13.8807 16 15 14.8807 15 13.5V8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8V13.5C5 17.6421 8.35786 21 12.5 21C16.6421 21 20 17.6421 20 13.5V5" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
        case "emodji":
            image = 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 9H9.01" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 9H15.01" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16 13H8M8 13C8 14.0609 8.42143 15.0783 9.17157 15.8284C9.92172 16.5786 10.9391 17 12 17C13.0609 17 14.0783 16.5786 14.8284 15.8284C15.5786 15.0783 16 14.0609 16 13H8Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
        case "voice":
            image = 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25195 12C5.14004 15.4505 8.27224 18 11.9999 18C15.7276 18 18.8598 15.4505 19.7479 12" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 22V18" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 2C9.79086 2 8 3.79086 8 6V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V6C16 3.79086 14.2091 2 12 2Z" stroke="#B3B3B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            break;
            

        default:
            image = <svg></svg>
    }

    return image;
}