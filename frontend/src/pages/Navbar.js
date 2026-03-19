import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
    { label: "Join as Guest", path: "/home" },
    { label: "Register", path: "/auth" },
    { label: "Login", path: "/auth" },
];

const Navbar = () => {
const [mobileOpen, setMobileOpen] = useState(false);
const navigate = useNavigate();

const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
};

const handleNavClick = (path) => {
    navigate(path);
    setMobileOpen(false);
};


    const drawer = (
    <Box onClick={toggleDrawer} sx={{ width: 250 }}>
    <List>
        {navItems.map((item) => (
        <ListItem button key={item.label} onClick={() => handleNavClick(item.path)}>
            <ListItemText primary={item.label} />
        </ListItem>
        ))}
    </List>
    </Box>
);

return (
    <>
    <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
        <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Video Confrecing App
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
            <Button
                key={item.label}
                sx={{ color: "#fff" }}
                onClick={() => handleNavClick(item.path)}
                >
                {item.label}
                </Button>

            ))}
        </Box>
        <IconButton
            color="inherit"
            edge="start"
            sx={{ display: { md: "none" } }}
            onClick={toggleDrawer}
        >
            <MenuIcon />
        </IconButton>
        </Toolbar>
    </AppBar>

    <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
        cursor: "pointer",
        display: { xs: "block", md: "none", },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250, background: "#36454F", color: "#fff",},
        }}
    >
        {drawer}
    </Drawer>
    </>
);
};

export default Navbar;