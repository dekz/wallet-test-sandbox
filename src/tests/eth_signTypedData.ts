import { signatureUtils, Order } from '@0x/order-utils';
import { ZERO_HASH } from '../constants';

export const ethSignTypedDataTestAsync = async (provider, address) => {
    const order: Order = {
        makerAddress: address,
        takerAddress: address,
        feeRecipientAddress: address,
        senderAddress: address,
        exchangeAddress: address,
        makerAssetData: ZERO_HASH,
        takerAssetData: ZERO_HASH,
        makerFee: '0' as any,
        takerFee: '0' as any,
        makerAssetAmount: '0' as any,
        takerAssetAmount: '0' as any,
        expirationTimeSeconds: '0' as any,
        salt: '0' as any,
    };
    const signedOrder = await signatureUtils.ecSignTypedDataOrderAsync(provider, order, address);
};
