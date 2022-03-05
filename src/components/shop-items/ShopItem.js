import { Box, Stack, Typography } from "@mui/material";

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
    <Box>
      <Stack direction="row" gap={2.5}>
        <Typography>{name}</Typography>
        <Typography>
          {formatNumber(value)} / {unit}
        </Typography>
        <Typography>{quantity}</Typography>
      </Stack>
    </Box>
  );
}
