import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "DecreaseOrderUtils",
  libraryNames: ["SwapUtils", "PositionStoreUtils", "DecreasePositionUtils", "OrderStoreUtils"],

  id: "DecreaseOrderUtils_2",
});

export default func;
