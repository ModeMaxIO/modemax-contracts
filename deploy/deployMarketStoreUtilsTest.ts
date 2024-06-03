import { grantRoleIfNotGranted } from "../utils/role";
import { createDeployFunction } from "../utils/deploy";

const func = createDeployFunction({
  contractName: "MarketStoreUtilsTest",
  libraryNames: ["MarketStoreUtils"],
  afterDeploy: async ({ deployedContract }) => {
    await grantRoleIfNotGranted(deployedContract.address, "CONTROLLER");
  },
  id: "MarketStoreUtilsTest_5",
});
func.tags = ["MarketStoreUtilsTest"];
export default func;
