import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "SwapUtils",
  libraryNames: ["FeeUtils", "MarketEventUtils", "SwapPricingUtils"],
  id: "SwapUtils_2",
});

export default func;
