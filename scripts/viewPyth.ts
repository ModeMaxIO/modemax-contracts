import { ethers } from "ethers";
import PythAbi from "@pythnetwork/pyth-sdk-solidity/abis/IPyth.json" assert { type: "json" };

async function main() {
    // // Avalanche
    // const contractAddress = '0x4305FB66699C3B2702D4d05CF36551390A4c69C6';
    // const provider = ethers.getDefaultProvider('https://api.avax.network/ext/bc/C/rpc');
    // const contract = new ethers.Contract(contractAddress, PythAbi, provider);

    // Arbitrum
    const contractAddress = '0xA2aa501b19aff244D90cc15a4Cf739D2725B5729';
    const provider = ethers.getDefaultProvider('https://testnet-rpc.zkfair.io');
    const contract = new ethers.Contract(contractAddress, PythAbi, provider);
    console.log("contract:", contract.address);

    // const priceId = '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43';   // btc
    const priceId = '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b';   // usdt

    const [price, conf, expo, timestamp] = await contract.getEmaPriceUnsafe(priceId);
    console.log("price:", price.toString());
    console.log("conf:", conf.toString());
    console.log("expo:", expo.toString());
    console.log("timestamp:", timestamp.toString());
    const [price2, conf2, expo2, timestamp2] = await contract.getPrice(priceId);
    console.log("price2:", price2.toString());
    console.log("conf2:", conf2.toString());
    console.log("expo2:", expo2.toString());
    console.log("timestamp2:", timestamp2.toString());
}

main()
    .then(() => {
        process.exit(0);
    })
    .catch((ex) => {
        console.error(ex);
        process.exit(1);
    });