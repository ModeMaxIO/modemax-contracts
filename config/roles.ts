import { HardhatRuntimeEnvironment } from "hardhat/types";

export type RolesConfig = {
  [role: string]: {
    [account: string]: boolean;
  };
}[];

// roles are granted in deploy/configureRoles.ts
// to add / remove roles after deployment, scripts/updateRoles.ts can be used
export default async function (hre: HardhatRuntimeEnvironment): Promise<RolesConfig> {
  const { deployer } = await hre.getNamedAccounts();

  const syntheticKeepers = {
    mainnet: {  // !!!
      "0x283659A0E63ead2134adB7CB3cDE1c4fb777E949": true,
      "0xb82E0c6D98e5652Cd1ae8eCA49fA47ee01fC4FAe": true,
      "0x39AD2809F73086A63Ab2F0D8D689D1cc02579abA": true,
    },
    deposit: {
      "0x6268fd381FD0EA99398f7E8d7FC4Fd28B1f25026": true,
    },
    withdrawal: {
      "0x7FDa71bb0fa39f954570CFF19dc413EEed96b8cc": true,
    },
    order: {
      "0xD379519CD3d9a960645cDC2E791414010bb65F64": true,
      "0x19EEd5098303c25Bbde5Cc941C9438Acc463746c": true,
    },
    liquidation: {
      "0xeE10361244735cb473591F86db56F921Dd925362": true,
    }
  };

  const chainlinkKeepers = {
    arbitrum: { // !!!
      // "0x5051fd154320584c9cc2071aed772656e8fcd855": true,
      // "0xe0886d9baaad385f37d460a4ec7b32b79a3731e0": true,
      // "0x49d30b3035c647bf57f3845da287bd84d80bda2c": true,
      //
      // "0xbD88efB162a4157d5B223Bc99CE1bc80E740152f": true, // market orders
      // "0x8e36C6106B053aD32D20a426f3faF2d32b49cFBd": true, // deposits
      // "0x0BA63427862eBEc8492d0236EEc065D6f9978ad6": true, // withdrawals
    },
  };

  const testnetAdmins = {
    "0xAD4aC1e87C0aEa989bC67447a60E38E9585D4699": true,
    "0xcedC82A956934CeB806d84fBD70a0613916A362e": true,
  };

  const testnetConfig = {
    CONTROLLER: testnetAdmins,
    ORDER_KEEPER: testnetAdmins,
    ADL_KEEPER: testnetAdmins,
    LIQUIDATION_KEEPER: testnetAdmins,
    MARKET_KEEPER: testnetAdmins,
    FROZEN_ORDER_KEEPER: testnetAdmins,
  };

  const config: {
    [network: string]: RolesConfig;
  } = {
    hardhat: {
      CONTROLLER: { [deployer]: true },
      ORDER_KEEPER: { [deployer]: true },
      ADL_KEEPER: { [deployer]: true },
      LIQUIDATION_KEEPER: { [deployer]: true },
      MARKET_KEEPER: { [deployer]: true },
      FROZEN_ORDER_KEEPER: { [deployer]: true },
    },
    modetest: {   // !!!
      ADL_KEEPER: syntheticKeepers.mainnet,
      FROZEN_ORDER_KEEPER: {
        ...syntheticKeepers.mainnet,
        [deployer]: true,
        ...syntheticKeepers.order,
      },
      LIQUIDATION_KEEPER: {
        ...syntheticKeepers.mainnet,
        [deployer]: true,
        ...syntheticKeepers.liquidation,
      },
      ORDER_KEEPER: { ...syntheticKeepers.mainnet,
        [deployer] : true,
        ...syntheticKeepers.deposit,
        ...syntheticKeepers.withdrawal,
        ...syntheticKeepers.order,
      },
      CONFIG_KEEPER: {
        "0xa9D57e693006Cea5466e26F011c7E28668984F9F": true, // general_keeper_1
        "0x84073D58c53E8d90065a1ea570B4f6E6Ee63DA5d": true, // general_keeper_2
        // // "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1 !!!
      },
      FEE_KEEPER: {
        "0xf288669a48b0F56a407f9354129De597aA475362": true, // fee_keeper_1
      },
      MARKET_KEEPER: {
        "0x84073D58c53E8d90065a1ea570B4f6E6Ee63DA5d": true, // general_keeper_2
        [deployer] : true, // deployer
      },
      ROLE_ADMIN: {
        // "0xEd2ee5B11f5d916acf278247DeB109030A7b1aC4": true, // Timelock_2
      },
      ROUTER_PLUGIN: {
        // "0x57cFCB96e6653D404E2B7606b3304b1413B93606": true, // ExchangeRouter_2
        // "0xED237f0343706A914d8634aFeb881e061EB002Cf": true, // SubaccountRouter_1
      },
      TIMELOCK_ADMIN: {
        // "0x6A6D608a0dE1742Be622Fee4f9189243c0d68153": true, // timelock_admin_1
        // "0x5b796B035ad1C73565c93ea63d62aEDB9347F382": true, // timelock_admin_2
        // // "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
      },
      TIMELOCK_MULTISIG: {
        // // "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
      },
      CONTROLLER: {
        [deployer]: true,
        ...syntheticKeepers.deposit,
        ...syntheticKeepers.withdrawal,
        ...syntheticKeepers.order,
        "0xBd5F08C4A73Ac3B4DfCCB7BDF5649eC20E3431c1": true, // OracleStore_1
        "0xa2A7883369c989A94A6fce2C4c84EB2e6461b4A5": true, // MarketFactory_1
        //
        "0x17D5e0e6Be00037ea1476919B4560a0aB94108BB": true, // Config_2
        "0xBbAE64A68579F281aCa0342d921cb433f1E9fB95": true, // Timelock_2
        "0xA664223c336eeB56057fbe1C2Fe7198864BF1616": true, // Oracle_2
        "0x96F67257B6337fa9f331484D4A2C3eD2E704CcAF": true, // SwapHandler_2
        "0x24f95066470AF9baf941033b8043626a3fe06e1D": true, // AdlHandler_2
        "0xD8dA15a54EB3cd1bE7116dce38fC6Cca75B0d3Ab": true, // DepositHandler_2
        "0x86835dc6b9D47Dd9Fe94b1c4Ec8D3246ec023c71": true, // WithdrawalHandler_2
        "0x4648b2a1d89b547c2717793a2A97629Dc873AeBB": true, // OrderHandler_2
        "0x3C0E926E28362e355EeB79E3aeEAaDe72c6A255f": true, // ExchangeRouter_2
        "0x7b0f569F6Da974Ddfa3A8C662249cEB24025dfB8": true, // FeeHandler_2
        "0xa1DA4aa54072dcAa5568933d50C81261129A5D34": true, // LiquidationHandler_2
        //
        "0x4c4701931F64fA947359221ac6825857B5d59777": true, // SubaccountRouter_1
      },
      GOV_TOKEN_CONTROLLER: {
        "0xFa22D091c73aC8A0219d75090C259400dCEc55d2": true, // RewardRouterV2_1
      },
    },
    rolluxtest: {   // !!!
      ADL_KEEPER: syntheticKeepers.mainnet,
      FROZEN_ORDER_KEEPER: syntheticKeepers.mainnet,
      LIQUIDATION_KEEPER: {
                            ...syntheticKeepers.mainnet,
                            [deployer]: true,
                            ...syntheticKeepers.liquidation,
                          },
      ORDER_KEEPER: { ...syntheticKeepers.mainnet,
                      [deployer] : true,
                      ...syntheticKeepers.deposit,
                      ...syntheticKeepers.withdrawal,
                      ...syntheticKeepers.order,
                    },
      CONFIG_KEEPER: {
        "0xa9D57e693006Cea5466e26F011c7E28668984F9F": true, // general_keeper_1
        "0x84073D58c53E8d90065a1ea570B4f6E6Ee63DA5d": true, // general_keeper_2
        // "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1 !!!
      },
      FEE_KEEPER: {
        "0xf288669a48b0F56a407f9354129De597aA475362": true, // fee_keeper_1
      },
      MARKET_KEEPER: {
        "0x84073D58c53E8d90065a1ea570B4f6E6Ee63DA5d": true, // general_keeper_2
        "0x95E9C006F3426cA86A6BdC678de14C922B814cF4": true, // deployer
      },
      ROLE_ADMIN: {
        "0xEd2ee5B11f5d916acf278247DeB109030A7b1aC4": true, // Timelock_2
      },
      ROUTER_PLUGIN: {
        "0x57cFCB96e6653D404E2B7606b3304b1413B93606": true, // ExchangeRouter_2
        "0xED237f0343706A914d8634aFeb881e061EB002Cf": true, // SubaccountRouter_1
      },
      TIMELOCK_ADMIN: {
        "0x6A6D608a0dE1742Be622Fee4f9189243c0d68153": true, // timelock_admin_1
        "0x5b796B035ad1C73565c93ea63d62aEDB9347F382": true, // timelock_admin_2
        // "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
      },
      TIMELOCK_MULTISIG: {
        // "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
      },
      CONTROLLER: {
        [deployer]: true,
        ...syntheticKeepers.deposit,
        ...syntheticKeepers.withdrawal,
        ...syntheticKeepers.order,
        "0xC0aDDfb30E9291e7AE29B10E8Cf8B97d6142d404": true, // OracleStore_1
        "0x969abf8f44F6049dF4641290eb2CEB6367D17e16": true, // MarketFactory_1
        //
        "0x91EfecE050129c369E7135bf507bC33F28bA98C3": true, // Config_2
        "0xEd2ee5B11f5d916acf278247DeB109030A7b1aC4": true, // Timelock_2
        "0x8C965cA42febbB989aE5636f0a16855bbB674d30": true, // Oracle_2
        "0x3144ECC948f2F1DF802F0cE191aBf329536F51C5": true, // SwapHandler_2
        "0x017B894694E72eA1d05752e4a6C1B0e7EBd800cA": true, // AdlHandler_2
        "0xeE849d6E5f4f0742133A6C37e1d4Eb77DFA3b813": true, // DepositHandler_2
        "0x25a3C9F4Fe362b3A5fcb240bc740466Ab21f7Df5": true, // WithdrawalHandler_2
        "0x8fa525d1f30B7550B5EC01b6022BBD5aEb3d9A97": true, // OrderHandler_2
        "0x57cFCB96e6653D404E2B7606b3304b1413B93606": true, // ExchangeRouter_2
        "0x5Fd764bBa3d715bbdaEfff231b6f5a92dc885819": true, // FeeHandler_2
        "0xDA7F193ad43B7Fc4F647d7539e37d4F374eE8175": true, // LiquidationHandler_2
        //
        "0xED237f0343706A914d8634aFeb881e061EB002Cf": true, // SubaccountRouter_1
      },
      GOV_TOKEN_CONTROLLER: {
        // "0x159854e14A862Df9E39E1D128b8e5F70B4A3cE9B": true, // RewardRouterV2_1
      },
    },
    // arbitrum: {
    //   ADL_KEEPER: syntheticKeepers.mainnet,
    //   FROZEN_ORDER_KEEPER: syntheticKeepers.mainnet,
    //   LIQUIDATION_KEEPER: syntheticKeepers.mainnet,
    //   ORDER_KEEPER: { ...syntheticKeepers.mainnet, ...chainlinkKeepers.arbitrum },
    //   CONFIG_KEEPER: {
    //     "0xF09d66CF7dEBcdEbf965F1Ac6527E1Aa5D47A745": true, // general_keeper_1
    //     "0x0765678B4f2B45fa9604264a63762E2fE460df64": true, // general_keeper_2
    //     "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
    //   },
    //   FEE_KEEPER: {
    //     "0x43CE1d475e06c65DD879f4ec644B8e0E10ff2b6D": true, // fee_keeper_1
    //   },
    //   MARKET_KEEPER: {
    //     "0x0765678B4f2B45fa9604264a63762E2fE460df64": true, // general_keeper_2
    //   },
    //   ROLE_ADMIN: {
    //     "0x62aB76Ed722C507f297f2B97920dCA04518fe274": true, // Timelock_2
    //   },
    //   ROUTER_PLUGIN: {
    //     "0x7C68C7866A64FA2160F78EEaE12217FFbf871fa8": true, // ExchangeRouter_2
    //     "0x78F414436148B8588BDEe4771EA5eB75148668aa": true, // SubaccountRouter_1
    //   },
    //   TIMELOCK_ADMIN: {
    //     "0x35ea3066F90Db13e737BBd41f1ED7B4bfF8323b3": true, // timelock_admin_1
    //     "0xE014cbD60A793901546178E1c16ad9132C927483": true, // timelock_admin_2
    //     "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
    //   },
    //   TIMELOCK_MULTISIG: {
    //     "0x4b6ACC5b2db1757bD49408FeE92e32D39608B5d9": true, // multisig_1
    //   },
    //   CONTROLLER: {
    //     "0xa8af9b86fc47deade1bc66b12673706615e2b011": true, // OracleStore_1
    //     "0xf5f30b10141e1f63fc11ed772931a8294a591996": true, // MarketFactory_1
    //
    //     "0x226ED647C6eA2C0cE4C08578e2F37b8c2F922849": true, // Config_2
    //     "0x62aB76Ed722C507f297f2B97920dCA04518fe274": true, // Timelock_2
    //     "0xa11B501c2dd83Acd29F6727570f2502FAaa617F2": true, // Oracle_2
    //     "0xF6b804F6Cc847a22F2D022C9b0373190850bE34D": true, // SwapHandler_2
    //     "0x8514fc704317057FA86961Ba9b9490956993A5ed": true, // AdlHandler_2
    //     "0x9Dc4f12Eb2d8405b499FB5B8AF79a5f64aB8a457": true, // DepositHandler_2
    //     "0x9E32088F3c1a5EB38D32d1Ec6ba0bCBF499DC9ac": true, // WithdrawalHandler_2
    //     "0x352f684ab9e97a6321a13CF03A61316B681D9fD2": true, // OrderHandler_2
    //     "0x7C68C7866A64FA2160F78EEaE12217FFbf871fa8": true, // ExchangeRouter_2
    //     "0xbF56A2F030C3F920F0E2aD9Cf456B9954c49383a": true, // FeeHandler_2
    //     "0x9e0521C3dbB18E849F4955087E065E5C9C879917": true, // LiquidationHandler_2
    //
    //     "0x78F414436148B8588BDEe4771EA5eB75148668aa": true, // SubaccountRouter_1
    //   },
    //   GOV_TOKEN_CONTROLLER: {
    //     "0x159854e14A862Df9E39E1D128b8e5F70B4A3cE9B": true, // RewardRouterV2_1
    //   },
    // },
    // avalanche: {
    //   ADL_KEEPER: syntheticKeepers.mainnet,
    //   FROZEN_ORDER_KEEPER: syntheticKeepers.mainnet,
    //   LIQUIDATION_KEEPER: syntheticKeepers.mainnet,
    //   ORDER_KEEPER: syntheticKeepers.mainnet,
    //   CONFIG_KEEPER: {
    //     "0xF09d66CF7dEBcdEbf965F1Ac6527E1Aa5D47A745": true, // general_keeper_1
    //     "0x0765678B4f2B45fa9604264a63762E2fE460df64": true, // general_keeper_2
    //     "0x15F9eBC71c539926B8f652a534d29B4Af57CaD55": true, // multisig_1
    //   },
    //   FEE_KEEPER: {
    //     "0x43CE1d475e06c65DD879f4ec644B8e0E10ff2b6D": true, // fee_keeper_1
    //   },
    //   MARKET_KEEPER: {
    //     "0x0765678B4f2B45fa9604264a63762E2fE460df64": true, // general_keeper_2
    //   },
    //   ROLE_ADMIN: {
    //     "0x4Db91a1Fa4ba3c75510B2885d7d7da48E0209F38": true, // Timelock_2
    //   },
    //   ROUTER_PLUGIN: {
    //     "0x11E590f6092D557bF71BaDEd50D81521674F8275": true, // ExchangeRouter_2
    //     "0xA60862ecc8bd976519e56231bDfAF697C5ce2156": true, // SubaccountRouter_1
    //   },
    //   TIMELOCK_ADMIN: {
    //     "0x35ea3066F90Db13e737BBd41f1ED7B4bfF8323b3": true, // timelock_admin_1
    //     "0xE014cbD60A793901546178E1c16ad9132C927483": true, // timelock_admin_2
    //     "0x15F9eBC71c539926B8f652a534d29B4Af57CaD55": true, // multisig_1
    //   },
    //   TIMELOCK_MULTISIG: {
    //     "0x15F9eBC71c539926B8f652a534d29B4Af57CaD55": true, // multisig_1
    //   },
    //   CONTROLLER: {
    //     "0xa6ac2e08c6d6bbd9b237e0daaecd7577996f4e84": true, // OracleStore_1
    //     "0xc57c155faccd93f62546f329d1483e0e5b9c1241": true, // MarketFactory_1
    //
    //     "0x7309223E21dc2FFbb660E5Bd5aBF95ae06ba4Da0": true, // Config_2
    //     "0x4Db91a1Fa4ba3c75510B2885d7d7da48E0209F38": true, // Timelock_2
    //     "0x090FA7eb8B4647DaDbEA315E68f8f88e8E62Bd54": true, // Oracle_2
    //     "0xEE027373517a6D96Fe62f70E9A0A395cB5a39Eee": true, // SwapHandler_2
    //     "0x5c5DBbcDf420B5d81d4FfDBa5b26Eb24E6E60d52": true, // AdlHandler_2
    //     "0x72fa3978E2E330C7B2debc23CB676A3ae63333F6": true, // DepositHandler_2
    //     "0x790Ee987b9B253374d700b07F16347a7d4C4ff2e": true, // WithdrawalHandler_2
    //     "0xd3B6E962f135634C43415d57A28E688Fb4f15A58": true, // OrderHandler_2
    //     "0x11E590f6092D557bF71BaDEd50D81521674F8275": true, // ExchangeRouter_2
    //     "0xc7D8E3561f1247EBDa491bA5f042699C2807C33C": true, // FeeHandler_2
    //     "0x931C18AF613f56289253F0EeD57F315dE7dbAFcd": true, // LiquidationHandler_2
    //
    //     "0xA60862ecc8bd976519e56231bDfAF697C5ce2156": true, // SubaccountRouter_1
    //   },
    //   GOV_TOKEN_CONTROLLER: {
    //     "0xa192D0681E2b9484d1fA48083D36B8A2D0Da1809": true, // RewardRouterV2_1
    //   },
    // },
    // arbitrumGoerli: testnetConfig,
    // avalancheFuji: {
    //   CONFIG_KEEPER: {
    //     "0xFb11f15f206bdA02c224EDC744b0E50E46137046": true,
    //     "0xc9e1CE91d3f782499cFe787b6F1d2AF0Ca76C049": true,
    //   },
    //   ...testnetConfig,
    // },
  };

  return config[hre.network.name];
}
