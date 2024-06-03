import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "SwapOrderUtils",
  libraryNames: ["OrderStoreUtils", "SwapUtils"],
  id: "SwapOrderUtils_2",
});

export default func;
