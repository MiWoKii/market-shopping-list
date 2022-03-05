import { Box } from "@mui/material";
import Page from "../components/page";
import ShopItems from "../components/shop-items";

export default function Home() {
  return (
    <Page>
      <Box component={"main"}>
        <ShopItems />
      </Box>
    </Page>
  );
}
