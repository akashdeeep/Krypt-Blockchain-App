require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [
        "c86c69b49e3589eeb148aec15e351656c7d8b38e4d7569e3fa6197e275f09e96",
      ],
    },
  },
};
