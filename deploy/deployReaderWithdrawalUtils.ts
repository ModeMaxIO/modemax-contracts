import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "ReaderWithdrawalUtils",
  libraryNames: ["MarketUtils", "MarketStoreUtils", "PositionStoreUtils", "PositionUtils"],
  id: "ReaderWithdrawalUtils_2",
});

export default func;
