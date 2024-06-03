import {contractAt, deployContract} from "../utils/deploy";

async function main() {
  // const pythPricer = await deployContract("PythPricer", []);
  const pythPricer = await contractAt("PythPricer", "0x14f546d541BBE522CE996e98AED28507a12A71c8");
  console.log("pythPricer:", await pythPricer.address);
  console.log("contract:", await pythPricer.contractAddress());
  console.log("abc:", await pythPricer.getPriceABC());
  console.log("btc:", await pythPricer.getPriceBTC());

  // const mockTimelockController = await deployContract("MockTimelockController", [
  //   mockGovToken.address,
  //   [],
  //   [],
  //   "0x9f169c2189A2d975C18965DE985936361b4a9De9",
  // ]);
  // console.log("mockTimelockController", mockTimelockController.address);
  //
  // const mockGovernor = await deployContract("MockGovernor", [mockGovToken.address, mockTimelockController.address]);
  //
  // console.log("mockGovernor", mockGovernor.address);
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((ex) => {
    console.error(ex);
    process.exit(1);
  });
