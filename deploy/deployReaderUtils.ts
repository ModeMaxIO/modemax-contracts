import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "ReaderUtils",
  libraryNames: ["ReaderPricingUtils", "MarketStoreUtils", "PositionStoreUtils", "PositionUtils"],
  id: "ReaderUtils_2",
});

export default func;
