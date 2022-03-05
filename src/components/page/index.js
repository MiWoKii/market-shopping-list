import { Grid, Stack } from "@mui/material";
import Link from "next/link";

export default function Page({ children }) {
  return (
    <Grid margin={2.5}>
      <Stack direction={"row"} gap={3} marginBottom={3}>
        <Link href={"/"}>
          <a>início</a>
        </Link>
        <Link href={"/create-item"}>
          <a>criar item</a>
        </Link>
      </Stack>
      {children}
    </Grid>
  );
}
