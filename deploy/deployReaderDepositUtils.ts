import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "ReaderDepositUtils",
  libraryNames: ["MarketUtils", "MarketStoreUtils", "PositionStoreUtils", "PositionUtils"],
  id: "ReaderDepositUtils_2",
});

export default func;
