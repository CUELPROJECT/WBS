import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar"
import cuel_logo from "@/assets/images/logo-small.png";


const Header: React.FC = () => {
    return (
        <MuiAppBar
            position="static"
            elevation={0}
            sx={{
                background: "linear-gradient(to right, #ffffff, #0973BA)",
            }}
        >
            <Toolbar>
                {/* Logo aligned to the far left */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img
                        src={cuel_logo}
                        style={{
                            width: 150,
                            height: 50,
                            margin: "10px 20px 10px 0",
                        }}
                        alt="CUEL Header Image"
                    />
                </Box>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: "black", mt: 1, fontWeight: "bold" }}>
                    WBS Validation
                </Typography>
            </Toolbar>
        </MuiAppBar>
    );
}

export default Header;