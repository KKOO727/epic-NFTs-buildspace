require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/F8xUEOm38c3etA8hn6hwff5HjfC7woA-',
      accounts: ['674d8c50ae5955fd20d3c1d959a109c753f2cf433bd2b6bb226153f10784c529'],
    },
  },
};
