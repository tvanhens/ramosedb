import * as Effect from "effect/Effect";
import { deployOperationCatalogs } from "ramosedb/worker";
import {
  QueryReplicaDO,
  createServer,
  createTransactorDO,
} from "../../packages/ramosedb/src/worker/testing.ts";
import { conformanceCatalogDeployment } from "./conformance-catalog.ts";

const operationCatalogs = await Effect.runPromise(
  deployOperationCatalogs(conformanceCatalogDeployment),
);

export default createServer({ operationCatalogs });
export { QueryReplicaDO };
export const TransactorDO = createTransactorDO(operationCatalogs);
