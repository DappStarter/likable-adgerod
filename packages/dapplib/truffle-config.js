require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note machine mind grace nature suit gaze'; 
let testAccounts = [
"0x1723094807842c86f866b13e4269b7da12d6a9dd956ac0d957696853dd25474f",
"0x2da7ba91ab17ef9e230b83f4c35ca32df210f40b8368581b2eadb177a0ae9c15",
"0x72e371b31adb8ac0c8683a64d05f8bc791668da4ff889798cfd3aff5b7982297",
"0x39d8fa9e010e8fa7a5c7fd3847a53e4b31d10f43e9cfbba02df5413f8742735f",
"0x32e96a3e75a7d5835d8fb0a9b23fcbe277ccdb305aa47bcb2926ba964e58f48c",
"0xcc03e7f3d91056350665316f2169512c588afe87f163a6495219b1738b69a337",
"0x02089a4bbdf5c789eff91a787b97b137eb26eafde0e931ba296ac6d262e95818",
"0x022a77b0a05a474cb212d3b536b69cb69323ffde4780308110cb2fc4982edc39",
"0xdcccce83fd4f6fcd321eb64f94b39e048a987bbec31676fc915f4280faddbaf8",
"0x1bdd6d9c75603d39405c207076d64d40d806f12e9599eb37d0e663ad4e0035b4"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
