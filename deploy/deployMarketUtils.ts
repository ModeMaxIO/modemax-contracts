import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "MarketUtils",
  libraryNames: ["MarketEventUtils", "MarketStoreUtils"],
  id: "MarketUtils_2",
});

export default func;
