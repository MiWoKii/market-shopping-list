import { Card, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../database/db";
import DeleteItem from "./delete-item";
import ShopItem from "./ShopItem";

export default function ShopItems() {
  /**@type {[ShopItem[], Function]} */
  const [items, setItems] = useState([]);

  async function getFromDb() {
    const itemsFromDb = await db.shopItems.toArray();

    setItems(itemsFromDb);
  }

  useEffect(() => {
    getFromDb();
  }, []);

  /**
   * @function deleteItem
   * @param {number} id
   */
  const deleteItem = async (id) => {
    await db.shopItems.delete(id);

    getFromDb();
  };

  return (
    <Stack alignItems={"center"} gap={2}>
      {items?.map((item) => (
        <Card
          variant="outlined"
          sx={{ width: { xs: "100%", sm: "60%" } }}
          key={item.id + item.name}
        >
          <Stack direction="row" gap={2.5} alignItems={"center"} marginX={1}>
            <ShopItem key={item.name} {...item} />
            <DeleteItem id={item.id} deleteItem={deleteItem} />
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}
