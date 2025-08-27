import React, { useState } from "react";
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, Box } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { validation } from "@/types/validation.type";
import { validationSelector, Get_WBS_ValidationAsync, resetData } from "@/store/slices/validationSlice";

const ProjectTaskValidator: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const validationReducer = useSelector(validationSelector);
  const data: validation[] = validationReducer.data;

  const [inputText, setInputText] = useState("");
  const validateCodes = async () => {
    dispatch(resetData());
    const codes = inputText.split(/[\n,]+/).map(code => code.trim()).filter(Boolean);
    for (const code of codes) {
      await dispatch(Get_WBS_ValidationAsync(code)).unwrap();
    }
  };

  const getStatusColor = (status: string) => {
    if (status == "OK") {
      return "success.main";
    } else if (status == "Invalid") {
      return "warning.main";
    } else if (status == "Not Found") {
      return "error.main";
    }
  };

  return (
    <Box sx={{ p: 4, mx: "auto", mt: 5 }}>
      <TextField
        label="Enter project.task codes"
        multiline
        fullWidth
        rows={5}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" onClick={validateCodes} sx={{ mb: 2 }}>
        Validate
      </Button>
      {data.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Project.Task Code</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Reason</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((res, index) => (
              <TableRow key={index}>
                <TableCell>{res.project_Task_Code}</TableCell>
                <TableCell sx={{ color: getStatusColor(res.status) }}>{res.status}</TableCell>
                <TableCell>{res.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
}

export default ProjectTaskValidator;