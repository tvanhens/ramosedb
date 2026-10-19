import * as Ramose from "ramosedb";

export const Server = Ramose.Server("Ramose", {
  main: import.meta.resolve("./peer.ts"),
});
