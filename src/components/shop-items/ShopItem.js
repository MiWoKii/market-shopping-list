import { Grid, Typography } from "@mui/material";

/**
 * @param {ShopItem} props
 * @returns
 */
export default function ShopItem({ name, value, unit, quantity }) {
  /**
   * @param {number} number
   * @returns {string} the formated number in BRL format
   */
  const formatNumber = (number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  return (
    <Grid
      container
      direction="row"
      sx={{ gap: { xs: 0, sm: 0.5, md: 1 } }}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid item xs={true}>
        <Typography>{name}</Typography>
      </Grid>
      <Grid item>
        <Typography>
          {formatNumber(value)} / {unit}
        </Typography>
      </Grid>
      <Grid container item xs={true} justifyContent={"end"}>
        <Typography>
          {quantity} {unit}
        </Typography>
      </Grid>
    </Grid>
  );
}
