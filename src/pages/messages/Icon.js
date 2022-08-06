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
                    <path d="M15.8333 9.16667C15.8333 11.0076 15.0871 12.6743 13.8807 13.8807C12.6743 15.0871 11.0076 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.4999 17.5001L13.8806 13.8809" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "createGroup":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15C10.7614 15 13 12.7614 13 10C13 7.23858 10.7614 5 8 5C5.23858 5 3 7.23858 3 10C3 12.7614 5.23858 15 8 15Z" stroke="#4776E6" strokeWidth="2" strokeMiterlimit="10"/>
                    <path d="M1 19C1.78955 17.7644 2.83773 16.7559 4.05604 16.0597C5.27435 15.3635 6.62702 15.0001 7.99986 15C9.3727 14.9999 10.7254 15.3633 11.9438 16.0594C13.1621 16.7555 14.2104 17.7639 15 18.9994" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 15C18.7614 15 21 12.7614 21 10C21 7.23858 18.7614 5 16 5" stroke="#4776E6" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.9999 15C17.3727 14.9999 18.7254 15.3633 19.9438 16.0594C21.1621 16.7555 22.2104 17.7639 23 18.9994" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "createMailing":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 20H21V4H3" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 4L12 13L3 4" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 11H1" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16H1" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "plus":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12L18 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "attachment":
            image =
                <svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 9V13.5C10 14.8807 11.1193 16 12.5 16C13.8807 16 15 14.8807 15 13.5V8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8V13.5C5 17.6421 8.35786 21 12.5 21C16.6421 21 20 17.6421 20 13.5V5" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "emoji":
            image = 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9H9.01" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 9H15.01" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 13H8M8 13C8 14.0609 8.42143 15.0783 9.17157 15.8284C9.92172 16.5786 10.9391 17 12 17C13.0609 17 14.0783 16.5786 14.8284 15.8284C15.5786 15.0783 16 14.0609 16 13H8Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "voice":
            image = 
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25195 12C5.14004 15.4505 8.27224 18 11.9999 18C15.7276 18 18.8598 15.4505 19.7479 12" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22V18" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2C9.79086 2 8 3.79086 8 6V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V6C16 3.79086 14.2091 2 12 2Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "bell":
            image =
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.33333 13.0004V7.66706C4.33333 6.71938 4.61582 5.83768 5.10117 5.10156M4.33333 13.0004H3M4.33333 13.0004H13" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.66675 15.667H10.3334" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.66675 1.66699L5.10125 5.1015L13.0001 13.0003L16.3334 16.3337" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.85449 3.52129C7.4968 3.18819 8.22636 3 8.99987 3C11.5772 3 13.6665 5.08934 13.6665 7.66667V10.3333" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "block":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="6" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.66675 5.66699L10.3334 10.3337" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "flag":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66675 14.0003V2.66699" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.66675 2.66699H8.33341L9.00008 4.00033H13.3334V11.3337H9.00008L8.33341 10.0003H2.66675" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "imagePhoto":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.33329" cy="5.99967" r="0.666667" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="2.66699" width="12" height="10.6667" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 13.3333L9.33333 7L14 11.6667" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "file":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66663 14V2H9.99996L13.3333 5.33333V14H2.66663Z" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 2V5.33333H13.3333" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "camera":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8.33301" r="3" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 13.3337V4.00033H5L6.33333 2.66699H9.66667L11 4.00033H14V13.3337H2Z" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "tips":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.33337 7.99967L8.00004 5.33301L10.6667 7.99967L8.00004 10.6663L5.33337 7.99967Z" stroke="url(#paint0_linear_522_2585)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8" cy="8" r="6" stroke="url(#paint1_linear_522_2585)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_522_2585" x1="5.77016" y1="7.56386" x2="9.58096" y2="7.83312" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4776E6"/>
                            <stop offset="1" stopColor="#8E54E9"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_522_2585" x1="2.98277" y1="7.01942" x2="11.5571" y2="7.62526" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4776E6"/>
                            <stop offset="1" stopColor="#8E54E9"/>
                        </linearGradient>
                    </defs>
                </svg>
            break;
        case "gift":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4C4 5.10457 4.89543 6 6 6H8V4C8 2.89543 7.10457 2 6 2C4.89543 2 4 2.89543 4 4Z" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 4C12 5.10457 11.1046 6 10 6H8V4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4Z" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.33337 6H14.6667" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3333 6V13.3333H2.66663V6" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6V13.3333" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "crown":
            image =
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.3335V5.3335H7V2.3335L5.66667 3.3335L4 1.3335L2.33333 3.3335L1 2.3335Z" stroke="url(#paint0_linear_843_5731)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 6.6665H7" stroke="url(#paint1_linear_843_5731)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_843_5731" x1="1.49138" y1="3.00664" x2="5.75208" y2="3.45821" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4776E6"/>
                            <stop offset="1" stopColor="#8E54E9"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_843_5731" x1="1.49138" y1="7.08479" x2="5.14354" y2="8.6331" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4776E6"/>
                            <stop offset="1" stopColor="#8E54E9"/>
                        </linearGradient>
                    </defs>
                </svg>
            break;
        case "check":
            image =
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6203 0.568826C6.87873 0.310391 7.29774 0.310391 7.55617 0.568826C7.81461 0.827262 7.81461 1.24627 7.55617 1.5047L3.58559 5.47529C3.32715 5.73373 2.90814 5.73373 2.64971 5.47529L0.443826 3.26941C0.185391 3.01097 0.185391 2.59197 0.443826 2.33353C0.702262 2.0751 1.12127 2.0751 1.3797 2.33353L3.11765 4.07148L6.6203 0.568826Z" fill="#4776E6"/>
                </svg>
            break;
        case "at":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex: 1}}>
                    <circle cx="12" cy="12" r="4" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 9V12C16 14.2091 17.1193 16 18.5 16C19.8807 16 21 14.2091 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.4368 21 14.795 20.6633 16 20.0645" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "delete":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.6665H14" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.33337 4.66667V2H10.6667V4.66667" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.33337 4.6665V13.9998H12.6667V4.99984" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.66663 8V10.6667" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33337 8V10.6667" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
        break;
        case "filter":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66675 3.3335H13.3334" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 3.3335L6.66667 8.66683V14.0002H9.33333V8.66683L13 3.3335" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "triangle":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.17422 5C3.31987 5 2.85896 6.00212 3.41496 6.65079L7.24074 11.1142C7.63984 11.5798 8.36016 11.5798 8.75926 11.1142L12.585 6.65079C13.141 6.00212 12.6801 5 11.8258 5H4.17422Z" fill="#5D5E65"/>
                </svg>
            break;
        case "x":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7661 4.23395C11.454 3.92202 10.9482 3.92202 10.6362 4.23395L8.005 6.86516L5.37379 4.23395C5.06026 3.93113 4.5619 3.93547 4.25369 4.24368C3.94547 4.55189 3.94114 5.05026 4.24396 5.36378L6.87517 7.995L4.24396 10.6262C4.03624 10.8268 3.95294 11.1239 4.02606 11.4033C4.09919 11.6826 4.31736 11.9008 4.59672 11.9739C4.87609 12.0471 5.17317 11.9638 5.37379 11.756L8.005 9.12483L10.6362 11.756C10.9497 12.0589 11.4481 12.0545 11.7563 11.7463C12.0645 11.4381 12.0689 10.9397 11.7661 10.6262L9.13484 7.995L11.7661 5.36378C12.078 5.05176 12.078 4.54597 11.7661 4.23395Z" fill="#4776E6"/>
                </svg>
            break;
        case "arrowLeft":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "arrowRight":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "X":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 7L17 17" stroke="#1A051D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 7L7 17" stroke="#1A051D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "X_Small":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.6665 4.66699L11.3332 11.3337" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.3335 4.66699L4.66683 11.3337" stroke="#5D5E65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "hashtag":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4L8 20" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 4L14 20" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 9H19" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 15H19" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "basket":
            image =
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 16.667H35" stroke="#4776E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M33.3334 16.667L31.6667 33.3337H8.33341L6.66675 16.667" stroke="#4776E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.3335 23.333V26.6663" stroke="#4776E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 23.333V26.6663" stroke="#4776E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M26.6665 23.333V26.6663" stroke="#4776E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M28.3332 16.6667V13.3333C28.3332 8.73096 24.6022 5 19.9998 5C15.3975 5 11.6665 8.73096 11.6665 13.3333V16.6667" stroke="#4776E6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "refresh":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11.0002C19.7554 9.24041 18.9391 7.60985 17.6766 6.35969C16.4142 5.10953 14.7758 4.30911 13.0137 4.08175C11.2516 3.85438 9.46362 4.21268 7.9252 5.10144C6.38678 5.9902 5.18325 7.36013 4.5 9.00019" stroke="#5D5E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 5V9H8" stroke="#5D5E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 13C4.24456 14.7598 5.06093 16.3903 6.32336 17.6405C7.58579 18.8907 9.22424 19.6911 10.9863 19.9184C12.7484 20.1458 14.5364 19.7875 16.0748 18.8988C17.6132 18.01 18.8168 16.6401 19.5 15" stroke="#5D5E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 19V15H16" stroke="#5D5E65" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "chevronRight":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "chevronLeft":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "location":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 9.69231C20 16.6154 12 22 12 22C12 22 4 16.6154 4 9.69231C4 7.65218 4.84285 5.69561 6.34315 4.25302C7.84344 2.81044 9.87827 2 12 2C14.1217 2 16.1566 2.81044 17.6569 4.25302C19.1571 5.69561 20 7.65218 20 9.69231V9.69231Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "Female":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12.0071" cy="8.5" r="6.5" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V23" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 19H17" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "Male":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 14.5C17 18.0899 14.0899 21 10.5 21C6.91015 21 4 18.0899 4 14.5C4 10.9101 6.91015 8 10.5 8C12.2949 8 13.9199 8.72754 15.0962 9.90381C16.2725 11.0801 17 12.7051 17 14.5Z" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 4L15.0962 9.90381" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 4H21V10" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "Other":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "female":
            image =
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.00472" cy="5.66732" r="4.33333" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 10V15.3333" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.66675 12.666H11.3334" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "male":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3334 9.66732C11.3334 12.0606 9.39332 14.0007 7.00008 14.0007C4.60685 14.0007 2.66675 12.0606 2.66675 9.66732C2.66675 7.27408 4.60685 5.33398 7.00008 5.33398C8.1967 5.33398 9.28003 5.81901 10.0642 6.60319C10.8484 7.38737 11.3334 8.4707 11.3334 9.66732Z" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.0001 2.66602L10.0642 6.60189" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 2.66602H14V6.66602" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "other":
            image =
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.33333" cy="8.33333" r="4.33333" stroke="#1A051D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "edit":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 20H20" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 20V17L17 4L20 7L7 20H4Z" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 10L14 7" stroke="#4776E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "dollar":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7 8C16.501 7.43524 16.1374 6.94297 15.6563 6.58654C15.1751 6.23011 14.5983 6.02583 14 6H10C9.20435 6 8.44129 6.31607 7.87868 6.87868C7.31607 7.44129 7 8.20435 7 9C7 9.79565 7.31607 10.5587 7.87868 11.1213C8.44129 11.6839 9.20435 12 10 12H14C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15C17 15.7956 16.6839 16.5587 16.1213 17.1213C15.5587 17.6839 14.7956 18 14 18H10C9.40175 17.9742 8.82491 17.7699 8.34373 17.4135C7.86255 17.057 7.49905 16.5648 7.3 16" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V6" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V21" stroke="#B3B3B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;
        case "Basket":
            image =
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 10L19 20H5L4 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 14V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 14V16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            break;

      default:
            image = <svg></svg>
    }

    return image;
}