import {
    elizaLogger,
    HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";

export const buyFuseTokenAction = {
    name: "BUY_FUSE_TOKEN",
    description: "Buy FUSE token",
    handler: async (
        runtime: IAgentRuntime,
        _message: Memory,
        state: State,
        _options: Record<string, unknown>,
        callback?: HandlerCallback
    ) => {
        try {
            if (callback) {
                callback({
                    text: "You can buy FUSE token through fiat-on-ramp service. Click on the following button to proceed:",
                    action: "BUY_FUSE_TOKEN"
                });
            }
            return true;
        } catch (error) {
            elizaLogger.error("Error buying FUSE token:", error);
            if (callback) {
                callback({
                    text: `Error buying FUSE token: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },
    validate: async (runtime: IAgentRuntime) => true,
    examples: [
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Buy FUSE token",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "You can buy FUSE on centralized or decentralized exchanges, through fiat-on-ramp services, or directly from dozens of wallets. Check out the available options and choose the ones that suit you best.",
                    action: "BUY_FUSE_TOKEN",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Where to buy FUSE Token?",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Click on the button to buy FUSE through fiat-on-ramp service:",
                    action: "BUY_FUSE_TOKEN",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "I would like to get Fuse tokens",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Fuse is partnering with Off-Ramp providers to allow for seamless payments with Fiat in 180+ countries, tap on the following button to buy Fuse right now",
                    action: "BUY_FUSE_TOKEN",
                },
            },
        ],
    ],
    similes: ["BUY_FUSE_TOKEN", "GET_FUSE_TOKEN", "PURCHASE_FUSE"],
};
