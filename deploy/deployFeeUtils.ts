import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "FeeUtils",
  libraryNames: ["MarketUtils"],
  id: "FeeUtils_2",
});

export default func;
