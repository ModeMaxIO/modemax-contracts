import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "LiquidationUtils",
  libraryNames: ["PositionStoreUtils", "OrderStoreUtils", "OrderEventUtils"],
  id: "LiquidationUtils_2",
});

export default func;
