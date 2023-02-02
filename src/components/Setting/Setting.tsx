import React, { useState } from "react";
import { Box } from "@mui/material";
import * as XLSX from 'xlsx';
// import { IpcRenderer } from "electron";
 const {ipcRenderer} = window.require('electron')


const Setting = () => {

  const [excelData,setExcelData] =useState({})

  const handleset = (e: any) => {
    console.log(e);
    let reader = new FileReader();
    reader.readAsArrayBuffer(e.target?.files[0]);
    reader.onload = async (e) => {
      const workbook = XLSX.read(e.target?.result, { type: "buffer" });
      const worksheetName = workbook.SheetNames[1];
      const worksheet = workbook.Sheets[worksheetName];
      const data = await XLSX.utils.sheet_to_json(worksheet);
      console.log(data);
      setExcelData(data)
    };
  };

  const onClick_upload= () => {
    ipcRenderer.send('upload_device_config',excelData)
  }

  return(
  <> 
  <Box sx={{ padding: "70px 20px 20px 140px" }}>Setting Component
  <form>
    <label htmlFor="upload">Upload File</label>
    <input
        type="file"
        name="upload"
        id="upload"
        accept=".xlsx"
        onChange={handleset}
    />
</form>
<button onClick={onClick_upload}>upload</button>
</Box>
  </>)
  ;
};

export default Setting;
