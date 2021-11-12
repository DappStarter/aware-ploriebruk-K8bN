require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski strike curtain saddle essay grace bean outer stock'; 
let testAccounts = [
"0xb5fd95b7ef9b2475cd1c60dc6a0ab9425481af230f637dd77477e0513943232b",
"0xb829f6cd27676a3b1aee760635b98d4551be38c0affeabe7ea9a9cf5f75d60ed",
"0x527c1433e4a08ee4faec6ea34ec9d092b650bd44b937aef1308bebf5ffdcc48c",
"0x02571082b33137ab0b26b29e19cc46a08990445cddb4c1f6b0cca9d33b9b96f8",
"0x3cd72c93622855f6f3f7735041fc69d910cb0107b1977e260263e215b35c43f4",
"0x890baa5169fa62c5bf376b817f01a58c1d7506c9a467133a68f30d35b757ef31",
"0xfed71442e5a1d444865c18c8622c27f9ce7141d736c0d29c1006d5c0e57231ca",
"0x4d33fb7854e19007e5652fc9b62c3b426a32525785b46af5bc31164fd05e34ca",
"0x48198c2777623c73120da0a37afd5e19ff56e7a884f801112be37adaf8161fcc",
"0x3c6abb92e01b0c279f9c256676c46d14752e331bb00636c0651d83c3fc8ed1b2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

