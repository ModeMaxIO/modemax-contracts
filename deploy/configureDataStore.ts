import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import * as keys from "../utils/keys";
import { setAddressIfDifferent, setUintIfDifferent } from "../utils/dataStore";
import {gm} from "prb-math";
import hre from "hardhat";
import {tokenTransferGasLimit} from "../utils/keys";

const network = hre.network.name;
async function getRoTestValues() {
  const wnt = "0xcAc0759160d57A33D332Ed36a555C10957694407";
  const usdt= "0x9D973BAc12BB62A55be0F9f7Ad201eEA4f9B8428";
  const usdc = "0xf111Aa386823C4CF33F349597f1E772973Ac0913";
  const btc = "0xfA600253bB6fE44CEAb0538000a8448807e50c85";
  const eth = "0x5eD4813824E5e2bAF9BBC211121b21aB38E02522";
  const psys = "0xD451237dceE3395B63d84FF0DDC0a4dbCf005Cc1"
  const gasLimit = 1000000;

  return { wnt, usdt, usdc, btc, eth, psys, gasLimit }
}

async function getModeTestValues() {
  const wnt = "0xc7b06F55FBCD31cd691504f3DFc4efa9082616B7";
  const usdt= "0x4557D5f50828302DB39D9530F6d3648d48bEC04A";
  const usdc = "0x22198B46C84Cf43831E65D32a9403A194D617a61";
  const wbtc = "0x00D84e62a854e54Ba7289ab6506F95000Bb4B008";
  const weth = "0x5CE359Ff65f8bc3c874c16Fa24A2c1fd26bB57CD";
  const mode = "0x4FFa6cDEB4deF980b75e3F4764797A2CAd1fAEF3";
  const modem = "0xc14092D39d4B9034b41b2D00581e8b4Cb282611F";
  const usdtm = "0x1bFA66Cb34851B98b5D23CadC554bBB4CbA881f6";
  const gasLimit = 1000000;

  return { wnt, usdt, usdc, wbtc, weth, mode, modem, usdtm, gasLimit }
}
async function getValues() {
  if (network === "modetest") {
    return getModeTestValues()
  }
  console.log("Unsupported network for", network);
}

const func = async ({ deployments, getNamedAccounts, gmx }: HardhatRuntimeEnvironment) => {
  // const { read, execute, log } = deployments;
  // const { deployer } = await getNamedAccounts();
  // const oracleConfig = await gmx.getOracle();
  // const oracleSigners = oracleConfig.signers.map((s) => ethers.utils.getAddress(s));
  //
  // const existingSignersCount = await read("OracleStore", "getSignerCount");
  // const existingSigners = await read("OracleStore", "getSigners", 0, existingSignersCount);
  // log("existing signers", existingSigners.join(","));
  //
  // for (const oracleSigner of oracleSigners) {
  //   if (!existingSigners.includes(oracleSigner)) {
  //     log("adding oracle signer", oracleSigner);
  //     await execute("OracleStore", { from: deployer, log: true }, "addSigner", oracleSigner);
  //   }
  // }
  //
  // for (const existingSigner of existingSigners) {
  //   if (!oracleSigners.includes(existingSigner)) {
  //     log("removing oracle signer", existingSigner);
  //     await execute("OracleStore", { from: deployer, log: true }, "removeSigner", existingSigner);
  //   }
  // }
  // @ts-ignore
  const { wnt, usdt, usdc, wbtc, weth, mode, modem, usdtm, gasLimit } = await getValues();
  await setAddressIfDifferent(keys.WNT, wnt, "address of the WNT token");

  await setUintIfDifferent(keys.tokenTransferGasLimit(wnt), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(usdt), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(usdc), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(wbtc), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(weth), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(mode), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(modem), gasLimit, "token transfer gas limit");
  await setUintIfDifferent(keys.tokenTransferGasLimit(usdtm), gasLimit, "token transfer gas limit");
};
func.tags = ["DataStoreConfig"];
func.dependencies = ["RoleStore", "DataStore"];
export default func;
