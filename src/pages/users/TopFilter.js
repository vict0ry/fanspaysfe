import { Box, ButtonBase } from '@mui/material'
import { SearchInput } from '../messages/SearchInput'
import { ClickAwayListener } from '@mui/base'
import React from 'react'
import { Icon } from '../messages/Icon'

const styles = {
  mainCont: {
    marginBottom: 24,
    display: "flex",
    flexDirection: "column"
  },
  filterCont: {
    width: 238,
    height: 40,
    background: "#fff",
    display: "flex",
    borderRadius: 8,
    border: "1px solid #ECE9F1",
    justifyContent: "start",
    position: "relative"
  },
  filterListCont: {
    borderRadius: 8,
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "120%",
    right: 0,
    zIndex: 1,
    boxShadow: "0px 2px 8px rgba(26, 5, 29, 0.1)"
  },
  filterIcon: {
    minWidth: 0,
    minHeight: 0,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid #ECE9F1",
    borderRadius: 0,
    marginRight: 8
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
    display: "flex"
  },


};

const TopFilter = ({sortByOpen, setSortByOpen, setSortBy, sortBy, checkedTags, setCheckedTags}) => {
  return(
    <Box style={styles.mainCont}>
      <Box style={{display: "flex"}}>
        <Box style={{flexGrow: 1, marginRight: "16px"}}>
          <SearchInput
            name="search"
            placeholder="Поиск авторов..."
            styles={{
              backgroundColor: "#fff",
              border: "1px solid #ECE9F1",
              borderRadius: 8,
            }}
          />
        </Box>

        <ButtonBase
          style={styles.filterCont}
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

          <Box style={styles.filterIcon}>
            <Icon name="filter" />
          </Box>

          <Box style={{display: "flex", justifyContent: "space-between", flexGrow: 1}}>
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
          </Box>
        </ButtonBase>
      </Box>

      <Box style={{display: "flex", marginTop: 8, zIndex: 1}}>
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