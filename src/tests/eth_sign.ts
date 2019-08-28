import { expect } from '../utils';
import { signatureUtils } from '@0x/order-utils';
import { ZERO_HASH } from '../constants';

export const ethSignTestAsync = async (provider, address) => {
    const signature = await signatureUtils.ecSignHashAsync(provider, ZERO_HASH, address);
    const result = await signatureUtils.isValidSignatureAsync(provider, ZERO_HASH, signature, address);
    expect(result).toBe(true);
};
