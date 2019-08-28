let initializedWeb3;
export const initializeWeb3Async = async () => {
    if (initializedWeb3) {
        return initializedWeb3;
    }
    let injectedProviderIfExists = (window as any).ethereum;
    if (injectedProviderIfExists !== undefined) {
        if (injectedProviderIfExists.enable !== undefined) {
            await injectedProviderIfExists.enable();
        }
    } else {
        const injectedWeb3IfExists = (window as any).web3;
        if (injectedWeb3IfExists !== undefined && injectedWeb3IfExists.currentProvider !== undefined) {
            injectedProviderIfExists = injectedWeb3IfExists.currentProvider;
        } else {
            return undefined;
        }
    }
    initializedWeb3 = injectedProviderIfExists;
    return injectedProviderIfExists;
};

export const {
    core: { describe, it, expect, run },
    prettify,
} = (window as any).jestLite;
