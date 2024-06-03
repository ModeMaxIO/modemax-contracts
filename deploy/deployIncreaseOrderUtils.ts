import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "IncreaseOrderUtils",
  libraryNames: ["SwapUtils", "PositionStoreUtils", "IncreasePositionUtils", "OrderStoreUtils", "MarketEventUtils"],
  id: "IncreaseOrderUtils_2",
});

export default func;
