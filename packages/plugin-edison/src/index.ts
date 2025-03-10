export * from "./actions/operatorAccount";

import type { Plugin } from "@elizaos/core";
import { createOperatorAccountAction } from "./actions/operatorAccount";
import { buyFuseTokenAction } from "./actions/buyFuseToken";
import { addFuseNetworkAction } from "./actions/addFuseNetwork";
import { acceptCryptoPaymentAction } from "./actions/acceptCryptoPayment";

export const edisonPlugin: Plugin = {
    name: "edison",
    description: "Fuse Console Edison AI Agent plugin",
    providers: [],
    evaluators: [],
    services: [],
    actions: [
        createOperatorAccountAction,
        buyFuseTokenAction,
        addFuseNetworkAction,
        acceptCryptoPaymentAction
    ],
};

export default edisonPlugin;
