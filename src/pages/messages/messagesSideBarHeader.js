import React from "react";
import { Arrow } from "./arrowIcon";
import { SearchInput } from "./SearchInput";
import { Icon } from './Icon'
import { create } from "@mui/material/styles/createTransitions";
import { Button } from "@mui/material";
import { textTransform } from "@mui/system";
import Box from '@mui/material/Box';

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
            marginBottom: 16,
            textTransform: "none"
        }
    }

    const [isArrowClicked, setIsArrowClicked] = React.useState(false);

    return (
        <Box style={styles.main}>
            <Box style={{...styles.header, ...{marginBottom: 16}}}>
                <Box style={styles.flex}>
                    <Box style={styles.title}> Messages </Box>
                    <Button style={styles.amountMessages}>{amountMessages}</Button>
                </Box>
                <Button 
                onClick={() => {
                    setIsArrowClicked(!isArrowClicked);
                }}>
                    <Arrow 
                        isArrowClicked={isArrowClicked}
                        setIsArrowClicked={setIsArrowClicked}
                    />
                </Button>
            </Box>

            <div style={styles.header}>
                <SearchInput />
            </div>

            {/*buttons for creating group and mailing*/}
            {isArrowClicked && 
                <Button style={{...styles.header, ...styles.create, ...styles.createGroup}}>
                    <Box style={{...styles.flex}}>
                        <Box style={{marginRight: 10}}>
                            <Icon name="createGroup" />
                        </Box>
                        <Box>Создать группу</Box>
                    </Box>
                    
                    <Button style={{minWidth: 0}}>
                        <Icon name="plus" color="#4776E6" />
                    </Button>
                </Button>
            }

            {isArrowClicked &&
                <Button style={{...styles.header, ...styles.create, ...styles.createMailing}}>
                    <Box style={{...styles.flex}}>
                        <Box style={{marginRight: 10}}>
                            <Icon name="createMailing" />
                        </Box>
                        <Box>Создать рассылку</Box>
                    </Box>

                    <Button style={{minWidth: 0}}>
                        <Icon name="plus" color="#FFB800" />
                    </Button>
                </Button>
            }

        </Box>
    );
}