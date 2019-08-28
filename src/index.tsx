import { MetamaskSubprovider, Web3ProviderEngine } from '@0x/subproviders';
import { providerUtils } from '@0x/utils';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { ethSignTestAsync } from './tests/eth_sign';
import { describe, initializeWeb3Async, it, prettify, run } from './utils';
import { ethSignTypedDataTestAsync } from './tests/eth_signTypedData';

describe('EthSign', () => {
    it('eth_sign', async () => {
        const provider = await initializeWeb3Async();
        const web3Wrapper = new Web3Wrapper(provider);
        const [address] = await web3Wrapper.getAvailableAddressesAsync();

        await ethSignTestAsync(provider, address);
    });
    it('eth_sign: Metamask Subprovider', async () => {
        const provider = new Web3ProviderEngine();
        const mmProvider = new MetamaskSubprovider(await initializeWeb3Async());
        provider.addProvider(mmProvider);
        providerUtils.startProviderEngine(provider);
        const web3Wrapper = new Web3Wrapper(provider);
        const [address] = await web3Wrapper.getAvailableAddressesAsync();

        await ethSignTestAsync(provider, address);
    });
});

describe('EIP712', () => {
    it('eth_signTypedData', async () => {
        const provider = await initializeWeb3Async();
        const web3Wrapper = new Web3Wrapper(provider);
        const [address] = await web3Wrapper.getAvailableAddressesAsync();

        await ethSignTypedDataTestAsync(provider, address);
    });
    it('eth_signTypedData: Metamask Subprovider', async () => {
        const provider = new Web3ProviderEngine();
        const mmProvider = new MetamaskSubprovider(await initializeWeb3Async());
        provider.addProvider(mmProvider);
        providerUtils.startProviderEngine(provider);
        const web3Wrapper = new Web3Wrapper(provider);
        const [address] = await web3Wrapper.getAvailableAddressesAsync();

        await ethSignTypedDataTestAsync(provider, address);
    });
});

prettify.toHTML(run(), document.body);
