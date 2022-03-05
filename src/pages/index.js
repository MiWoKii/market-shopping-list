import { Box } from "@mui/material";
import Head from "next/head";
import Page from "../components/page";
import ShopItems from "../components/shop-items";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lista de itens</title>
      </Head>
      <Page pageName="Lista de itens">
        <Box component={"main"}>
          <ShopItems />
        </Box>
      </Page>
    </>
  );
}
