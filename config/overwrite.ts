export function getExistingContractAddresses(network) {
  if (network.name === "arbitrum") {
    return {
      ReferralStorage: { address: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d" },
    };
  }

  if (network.name === "avalanche") {
    return {
      ReferralStorage: { address: "0x827ed045002ecdabeb6e2b0d1604cf5fc3d322f8" },
    };
  }

  // !!!
  if (network.name === "modetest") {
    return {
      ReferralStorage: { address: "0x06d3584F4c5E1F631f9aa3c8f6aF7C82a9dC153C" },
    };
  }

  // !!!
  if (network.name === "modemain") {
    return {
      ReferralStorage: { address: "0x06d3584F4c5E1F631f9aa3c8f6aF7C82a9dC153C" },
    };
  }

  return {};
}
