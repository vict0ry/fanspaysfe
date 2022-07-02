import React from "react";
import { Arrow } from "./arrowIcon";
import { SearchInput } from "./SearchInput";
import { Icon } from './Icon'
import { create } from "@mui/material/styles/createTransitions";

export const HeaderSideBar = ({amountMessages}) => {

    if(!amountMessages){
        amountMessages = 40;
    }

    const styles = {
        flex: {
            display: "flex", 
            justifyContent:"center", 
            alignItems: "center"
        },
        main: {
            display: "flex",
            flexDirection: "column",
            width: "100%"
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        },
        title: {
            fontSize: 20,
            fontWeight: 700
        },
        amountMessages: {
            marginLeft: 8,
            padding: "0 3px",
            borderRadius: 8,
            background: "#E8EFFF",
            fontSize: 16,
            fontWeight: 700,
            color: "#4776E6"
        },
        createGroup: {
            background: "#E8EFFF", 
            color: "#4776E6",
            marginTop: 16
        },
        createMailing: {
            background: "#FFF9F1", 
            color: "#FFB800",
            marginBottom: 8,
            paddingBottom: 8
        },
        create: {
            padding: "8px 8px 8px 16px", 
            width: "100%", borderRadius: 8, 
            fontSize: 16, 
            fontWeight: 600,
            marginBottom: 16
        }
    }

    const [isArrowClicked, setIsArrowClicked] = React.useState(false);

    return (
        <div style={styles.main}>
            <div style={{...styles.header, ...{marginBottom: 16}}}>
                <div style={styles.flex}>
                    <div style={styles.title}> Messages </div>
                    <div style={styles.amountMessages}>{amountMessages}</div>
                </div>
                <Arrow 
                    isArrowClicked={isArrowClicked}
                    setIsArrowClicked={setIsArrowClicked}
                />
            </div>

            <div style={styles.header}>
                <SearchInput />
            </div>

            {isArrowClicked && <div style={{...styles.header, ...styles.create, ...styles.createGroup}}>
                <div style={{...styles.flex}}>
                    <div style={{marginRight: 10}}>
                        <Icon name="createGroup" />
                    </div>
                    <div>Создать группу</div>
                </div>
                
                <div>
                    <Icon name="plus" color="#4776E6" />
                </div>
            </div>}

            {isArrowClicked && <div style={{...styles.header, ...styles.create, ...styles.createMailing}}>
                <div style={{...styles.flex}}>
                    <div style={{marginRight: 10}}>
                        <Icon name="createMailing" />
                    </div>
                    <div>Создать рассылку</div>
                </div>
                
                <div>
                    <Icon name="plus" color="#FFB800" />
                </div>
            </div>}

        </div>
    );
}