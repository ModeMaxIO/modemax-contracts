import { grantRoleIfNotGranted } from "../utils/role";
import { createDeployFunction } from "../utils/deploy";

const constructorContracts = ["RoleStore", "DataStore", "EventEmitter", "WithdrawalVault", "Oracle"];

const func = createDeployFunction({
  contractName: "WithdrawalHandler",
  dependencyNames: constructorContracts,
  getDeployArgs: async ({ dependencyContracts }) => {
    return constructorContracts.map((dependencyName) => dependencyContracts[dependencyName].address);
  },
  libraryNames: ["WithdrawalUtils", "ExecuteWithdrawalUtils", "WithdrawalStoreUtils", "GasUtils"],
  afterDeploy: async ({ deployedContract }) => {
    await grantRoleIfNotGranted(deployedContract.address, "CONTROLLER");
  },
  id: "WithdrawalHandler_3",
});

func.tags = ["WithdrawalHandler"];
export default func;
