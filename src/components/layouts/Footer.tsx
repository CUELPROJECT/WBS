import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { Get_Job_RunAsync, validationSelector } from "@/store/slices/validationSlice";

const Header: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const validationReducer = useSelector(validationSelector);
    const jobData = validationReducer.jobData;
    
    useEffect(() => {
        dispatch(Get_Job_RunAsync());
    }, [dispatch]);
    
    return (
        <Box
            component="footer"
            sx={{
                py: 1,
                pl: 4,
                pt: 3,
                mt: "auto",
                textAlign: "start",
                borderTop: "1px solid #ddd",
            }}
        >
            <Typography variant="body2" color="primary">
                © Project WBS information will be updated every 3 hours. Last run at {jobData?.lastEnd_DateTime}
            </Typography>
        </Box>
    );
}

export default Header;