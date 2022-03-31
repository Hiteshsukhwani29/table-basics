import styles from "../styles/Home.module.css";
import "../styles/Table.module.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
// import { TableContainer } from "@material-ui/core";
import { data } from "./components/data";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
// import { createTheme } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// // import { makeStyles } from " @mui/styles";
const table = () => {
  // const columns = [
  //   { field: "id", headerName: "ID", width: 70 },
  //   { field: "firstName", headerName: "First name", width: 130 },
  //   { field: "lastName", headerName: "Last name", width: 130 },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     width: 90,
  //   },
  // ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 23 },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  // const theme = createTheme({
  //   root: {
  //       // Some CSS
  //       color:'#ffffff',
  //     },
  //   palette: {
  //       primary: {
  //         main: '#f5f5c9',
  //         contrastText: '#fff',
  //       }
  //   },
  //   MuiDataGrid:{
  //       borderRadius:'5px',
  //       columnHeaders:{
  //           color:'#ffffff'
  //       },
  //   },
  //   rowStyle:{
  //     background:"#ffffff"
  //   }
  // });

  const rows = data.rows.map((elements) => {
    return elements;
  });

  const columns = data.columns.map((items) => {
    return items;
  });

  // style={{ background: "#050505ed" ,color:'white'}}

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Tables</h2>
        <div style={{ height: 400, width: "63%" }} className="table">
          {/* <ThemeProvider theme={theme}> */}
          <DataGrid
            sx={{
              background: "#000000de",
              color: "#ffffff",
              borderColor: "black",
              padding: "14px",
              borderRadius: "5px",
              "& .MuiDataGrid-columnSeparator--sideRight": {
                display: "none",
              },
              "& .MuiDataGrid-main": {
                borderRadius: "5px",
                background: "rgb(0 0 0 / 87%)",
                color: "#ffffff",
              },
              "& .MuiDataGrid-row ":{
                '&:hover':{
                  background:"#619161"
                },
              },
              "& .MuiDataGrid-row.Mui-selected":{
                backgroundColor:'red',
                '&:hover':{
                  backgroundColor:'red'
                }
              },
              "& .MuiDataGrid-columnHeaders": {
                background: "rgb(0 0 0 / 87%)",
                color: "rgb(58, 188, 240)",
                fontWeight: "600",
              },
              "& .MuiDataGrid-footerContainer":{
                background: "rgb(0 0 0 / 87%)",
                justifyContent:"right"
              },
              "& .MuiDataGrid-selectedRowCount":{
                display:'none',
              },
              "& .MuiDataGrid-columnHeader":{
                color: "rgb(58, 188, 240) ",
              },
              "& .MuiSvgIcon-root":{
                // display:'none',
                color:" rgb(58, 188, 240)"
              },
              "& .MuiDataGrid-sortIcon":{
                color: "red"
              },
              "& .MuiTablePagination-root":{
                color: "white"
              },
              
              
            }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[6]}

            // checkboxSelection
          />
          {/* </ThemeProvider> */}
        </div>
      </main>
    </div>
  );
};

export default table;
