export * from "./actions/operatorAccount";

import type { Plugin } from "@elizaos/core";
import { createOperatorAccountAction } from "./actions/operatorAccount";

export const edisonPlugin: Plugin = {
    name: "edison",
    description: "Fuse Console Edison AI Agent plugin",
    providers: [],
    evaluators: [],
    services: [],
    actions: [createOperatorAccountAction],
};

export default edisonPlugin;
