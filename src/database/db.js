import Dexie from "dexie";

export const db = new Dexie("shopItems");
db.version(1).stores({
  shopItems: "++id, name, value, unit, quantity, *created_at",
});
