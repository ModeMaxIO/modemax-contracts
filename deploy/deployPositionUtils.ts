import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "PositionUtils",
  libraryNames: ["MarketStoreUtils", "MarketUtils", "PositionPricingUtils"],
  id: "PositionUtils_2",
});

export default func;
