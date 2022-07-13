import { Box, ButtonBase } from '@mui/material'
import { SearchInput } from '../messages/SearchInput'
import { ClickAwayListener } from '@mui/base'
import React from 'react'
import { Icon } from '../messages/Icon'
import useWindowDimensions from '../../useWindowDimensions'

const styles = {
  mainCont: {
    marginBottom: 24,
    display: "flex",
    flexDirection: "column"
  },
  filterCont: {
    width: "238px",
    height: "40px",
    background: "#fff",
    display: "flex",
    borderRadius: "8px",
    border: "1px solid #ECE9F1",
    justifyContent: "start",
    // position: "relative"
  },
  filterListCont: {
    borderRadius: 8,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "120%",
    right: 0,
    zIndex: 2,
    boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)"
  },
  filterIcon: {
    minWidth: 0,
    minHeight: 0,
    width: "38px",
    height: "38px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid #ECE9F1",
    borderRadius: 0,
    background: "#fff"
  },
  filterIcon2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    transition: "200ms"
  },
  tag: {
    padding: "4px 8px",
    background: "#E8EFFF",
    borderRadius: 4,
    marginRight: 8,
    color: "#4776E6",
    fontSize: 12,
    fontWeight: 600,
    display: "flex",
    marginBottom: 8
  }
};

const TopFilter = ({sortByOpen, setSortByOpen, setSortBy, sortBy, checkedTags, setCheckedTags, setLeftMenuOpen, leftMenuOpen}) => {
  const {width, height} = useWindowDimensions();

  return(
    <Box style={styles.mainCont}>
      <Box sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row"
        }
      }}>
        <Box sx={{
          flexGrow: 1,
          marginRight: {
            sm: "16px",
            xs: 0
          },
          marginBottom: {
            sm: 0,
            xs: "8px"
          }
        }}>
          <SearchInput
            name="search"
            placeholder="Поиск авторов..."
            styles={{
              backgroundColor: "#fff",
              border: "1px solid #ECE9F1",
              borderRadius: 8
            }}
          />
        </Box>

        <Box
          sx={{
            ...styles.filterCont
          }}
        >
          <ButtonBase
            sx={{
              ...styles.filterIcon,
              borderRadius: {
                xs: "50%",
                sm: 0
              },
              borderRight: {
                xs: "0",
                sm: "1px solid #ECE9F1"
              },
              position: {
                xs: "absolute",
                sm: "relative"
              },
              right: {
                xs: "16px",
                sm: 0
              },
              borderTopLeftRadius: {
                sm: "8px"
              },
              borderBottomLeftRadius: {
                sm: "8px"
              }
            }}
            onClick={() => {
              setLeftMenuOpen(!leftMenuOpen)
            }}
          >
            <Icon
              name="filter"
              color={width > 900 ? "#B3B3B3": "#000"}
            />
          </ButtonBase>

          <ButtonBase
            style={{display: "flex", justifyContent: "space-between", flexGrow: 1, paddingLeft: 8, position: "relative"}}
            onClick={() => {
              setSortByOpen(!sortByOpen)
            }}
          >
            {sortByOpen &&
            <ClickAwayListener
              onClickAway={() => {
                setSortByOpen(false)
              }}
            >
              <Box style={styles.filterListCont}>
                <ButtonBase
                  style={{padding: 8, justifyContent: "start"}}
                  onClick={() => {
                    setSortBy("По популярности ⭐")
                    setSortByOpen(!sortByOpen)
                  }}
                >По популярности ⭐</ButtonBase>
                <ButtonBase
                  style={{padding: 8, justifyContent: "start"}}
                  onClick={() => {
                    setSortBy("По количеству фанов 👑")
                    setSortByOpen(!sortByOpen)
                  }}
                >По количеству фанов 👑</ButtonBase>
                <ButtonBase
                  style={{padding: 8, justifyContent: "start"}}
                  onClick={() => {
                    setSortBy("Новенькие 🔥")
                    setSortByOpen(!sortByOpen)
                  }}
                >Новенькие 🔥️</ButtonBase>
                <ButtonBase
                  style={{padding: 8, justifyContent: "start"}}
                  onClick={() => {
                    setSortBy("Возраст: Сначала младше")
                    setSortByOpen(!sortByOpen)
                  }}
                >Возраст: Сначала младше</ButtonBase>
                <ButtonBase
                  style={{padding: 8, justifyContent: "start"}}
                  onClick={() => {
                    setSortBy("Возраст: Сначала старше")
                    setSortByOpen(!sortByOpen)
                  }}
                >Возраст: Сначала старше</ButtonBase>

              </Box>
            </ClickAwayListener>
            }

            <Box style={{fontSize: 12, fontWeight: 700, color: "#5D5E65"}}>
              {sortBy}
            </Box>

            <Box
              style={{
                ...styles.filterIcon2,
                ...sortByOpen ? { transform: "rotate(-180deg)" } : { transform: "rotate(0deg)" }
              }}>
              <Icon
                name="triangle"
              />
            </Box>
          </ButtonBase>
        </Box>
      </Box>

      <Box style={{display: "flex", marginTop: 8, zIndex: 1, flexWrap: "wrap"}}>
        {Object.keys(checkedTags).map((tag) => {
          if(checkedTags[tag]) {
            return (
              <Box style={styles.tag}>
                <span style={{ marginRight: 2 }}>
                  {tag}
                </span>
                <ButtonBase onClick={() => {
                  setCheckedTags({
                    ...checkedTags,
                    [tag]: false
                  });
                }}>
                  <Icon name="x" />
                </ButtonBase>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
}

export {TopFilter};