"use strict";

import React, { useCallback, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import tableData from "./data";

const App = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Participant",
      children: [
        {
          field: "Name",
          width: 220,
          headerCheckboxSelection: true,
          checkboxSelection: true,
          rowDrag: true,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Language",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Country",
          width: 140,
          editable: true,
          floatingFilter: true
        }
      ]
    },
    {
      headerName: "Game of Choice",
      children: [
        {
          field: "Game Name",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Bought",
          width: 180,
          editable: true,
          floatingFilter: true
        }
      ]
    },
    {
      headerName: "Performance",
      children: [
        {
          field: "Bank Balance",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          columnGroupShow: "open",
          field: "Extra Info 1",
          width: 140,
          menuTabs: []
        },
        {
          columnGroupShow: "open",
          field: "Extra Info 2",
          width: 140,
          filter: "agNumberColumnFilter",
          menuTabs: []
        }
      ]
    },
    {
      field: "Rating",
      width: 140,
      editable: true,
      floatingFilter: true
    },
    {
      field: "Total Winnings",
      width: 180,
      editable: true,
      floatingFilter: true
    },
    {
      headerName: "Monthly Breakdown",
      children: [
        {
          field: "Jan",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Feb",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Mar",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Apr",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "May",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Jun",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Jul",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Aug",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Sep",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Oct",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Nov",
          width: 180,
          editable: true,
          floatingFilter: true
        },
        {
          field: "Dec",
          width: 180,
          editable: true,
          floatingFilter: true
        }
      ]
    }
  ]);
  const defaultColDef = useMemo(() => {
    return {
      sortable: true,
      resizable: true,
      filter: true
    };
  }, []);

  const rowGroupPanelShow = "always";

  const onGridReady = useCallback((params) => {
    // fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
    //   .then((resp) => resp.json())
    //   .then((data) => setRowData(data));
    setRowData(tableData);
  }, []);

  return (
    <div style={{ width: "98vw", height: "95vh" }} className="ag-theme-alpine">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowGroupPanelShow={rowGroupPanelShow}
        rowDragManaged={true}
        animateRows={true}
        sideBar={true}
        onGridReady={onGridReady}
      />
    </div>
  );
};
export default App;
