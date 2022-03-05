import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import Link from "next/link";
import SideBar from "./sidebar";

export default function Header({ pageName }) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "flex" }, minWidth: 150 }}
          >
            {pageName}
          </Typography>

          <SideBar />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "none" },
              marginRight: 6,
            }}
          >
            {pageName}
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
            gap={2}
          >
            <Link href={"/"}>
              <Button color="inherit">Lista de itens</Button>
            </Link>
            <Divider orientation="vertical" />
            <Link href={"/create-item"}>
              <Button color="inherit">Criar item</Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
