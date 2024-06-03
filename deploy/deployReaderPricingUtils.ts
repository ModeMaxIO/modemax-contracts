import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "ReaderPricingUtils",
  libraryNames: ["MarketStoreUtils", "PositionStoreUtils", "PositionUtils"],
  id: "ReaderPricingUtils_2",
});

export default func;
