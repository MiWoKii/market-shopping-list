import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

export default function SideBar() {
  const [sideBar, setSideBar] = useState(false);
  const handleSidebar = () => setSideBar(!sideBar);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleSidebar}
        color="inherit"
      >
        <Menu />
      </IconButton>
      <Drawer open={sideBar} onClose={handleSidebar}>
        <List>
          <Link href={"/"}>
            <ListItem onClick={handleSidebar} sx={{ paddingX: 5 }}>
              <ListItemText primary={"Lista de itens"} />
            </ListItem>
          </Link>
          <Divider />
          <Link href={"/create-item"}>
            <ListItem onClick={handleSidebar} sx={{ paddingX: 5 }}>
              <ListItemText primary={"Criar item"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
