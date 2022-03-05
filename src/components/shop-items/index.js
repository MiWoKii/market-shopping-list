import { Stack } from "@mui/material";
import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "react";
import { db } from "../../database/db";
import ShopItem from "./ShopItem";

export default function ShopItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getFromDb() {
      const itemsFromDb = await db.shopItems.toArray();

      console.log(itemsFromDb);

      setItems(itemsFromDb);
    }
    getFromDb();
  }, []);
  return (
    <Stack>
      {items?.map((item) => (
        <ShopItem key={item.name} {...item} />
      ))}
    </Stack>
  );
}
