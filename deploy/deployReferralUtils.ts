import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "ReferralUtils",
  libraryNames: ["MarketUtils", "ReferralEventUtils"],
  id: "ReferralUtils_2",
});

export default func;
