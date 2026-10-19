import {
  QueryReplicaDO,
  createServer,
  createTransactorDO,
} from "../../packages/ramosedb/src/worker/testing.ts";
import * as Effect from "effect/Effect";
import { operationCatalogDeployment } from "./operation-catalog.ts";
import { deployOperationCatalogs } from "ramosedb/worker";

const operationCatalogs = await Effect.runPromise(
  deployOperationCatalogs(operationCatalogDeployment),
);

export default createServer({ operationCatalogs, changesets: { canApprove: (caller) => caller.claims.approveChangesets === true, requiresApproval: (caller) => caller.claims.requiresApproval === true } });
export { QueryReplicaDO };
export const TransactorDO = createTransactorDO(operationCatalogs);
