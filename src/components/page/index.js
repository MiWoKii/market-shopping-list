import { Grid } from "@mui/material";
import Header from "./header";

export default function Page({ pageName, children }) {
  return (
    <Grid>
      <Header pageName={pageName} />
      <Grid margin={2.5}>{children}</Grid>
    </Grid>
  );
}
