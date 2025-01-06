import {
    composeContext,
    generateObjectDeprecated,
    HandlerCallback,
    ModelClass,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";

import { transferTemplate } from "../templates";
import { TransferParams } from "../types";

export { transferTemplate };

const buildTransferDetails = async (
    state: State,
    runtime: IAgentRuntime,
): Promise<TransferParams> => {
    const context = composeContext({
        state,
        template: transferTemplate,
    });

    const transferDetails = (await generateObjectDeprecated({
        runtime,
        context: context,
        modelClass: ModelClass.SMALL,
    })) as TransferParams;

    return transferDetails;
}

export const transferAction = {
    name: "transfer",
    description: "Transfer tokens between addresses on the same chain",
    handler: async (
        runtime: IAgentRuntime,
        _message: Memory,
        state: State,
        _options: any,
        callback?: HandlerCallback
    ) => {
            const transferDetails = await buildTransferDetails(state, runtime);

            try {
                if (callback) {
                    callback({
                        text: `You are about to transfer ${transferDetails.amount} to ${transferDetails.toAddress}`,
                        content: transferDetails,
                        action: "SEND_TOKENS"
                    });
                }
                return true;
            } catch (error) {
                console.error("Error during token transfer:", error);
                if (callback) {
                    callback({
                        text: `Error transferring tokens: ${error.message}`,
                        content: { error: error.message },
                    });
                }
                return false;
            }
        },
    template: transferTemplate,
    validate: async (runtime: IAgentRuntime) => true,
    examples: [
        [
            {
                user: "assistant",
                content: {
                    text: "I'll help you transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    action: "SEND_TOKENS",
                },
            },
            {
                user: "user",
                content: {
                    text: "Transfer 1 ETH to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    action: "SEND_TOKENS",
                },
            },
        ],
    ],
    similes: ["SEND_TOKENS", "TOKEN_TRANSFER", "MOVE_TOKENS"],
};
