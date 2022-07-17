import { Box, Button, Pagination } from '@mui/material'
import React, { useState } from 'react'


const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: 32,
    marginBottom: 96
  },
};
const PagesController = ({currentPageCallback, count = 100, pages}) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event,
    newPage,
  ) => {
    debugger;
    setPage(newPage);
    currentPageCallback(newPage)
  };

  const handleChangeRowsPerPage = event => {
    debugger;
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return(
    <Box style={styles.wrapper}>
      <div>
        <Pagination
          count={count}
          page={page}
          onChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          color="primary" />
      </div>
    </Box>
  );
}

export {PagesController};