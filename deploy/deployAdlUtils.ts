import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "AdlUtils",
  libraryNames: ["MarketStoreUtils", "PositionStoreUtils", "OrderStoreUtils", "OrderEventUtils"],
  id: "AdlUtils_2",
});

export default func;
