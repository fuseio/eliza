import {
    elizaLogger,
    HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";

export const addFuseNetworkAction = {
    name: "ADD_FUSE_NETWORK",
    description: "Add Fuse Network to my wallet",
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
                    text: "Sure, I already do it! Click the button on your wallet popup window.",
                    action: "ADD_FUSE_NETWORK"
                });
            }
            return true;
        } catch (error) {
            elizaLogger.error("Error adding Fuse network:", error);
            if (callback) {
                callback({
                    text: `Error adding Fuse network: ${error.message}`,
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
                    text: "Add Fuse network",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "I've initiated add Fuse network, your wallet will display a popup.",
                    action: "ADD_FUSE_NETWORK",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "How can I switch to Fuse network?",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Click on the button in your wallet popup window to switch your wallet chain to Fuse network",
                    action: "ADD_FUSE_NETWORK",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "I would like to add Fuse chain to my wallet",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "You can add Fuse chain by clicking on the button in your wallet",
                    action: "ADD_FUSE_NETWORK",
                },
            },
        ],
    ],
    similes: ["ADD_FUSE_NETWORK", "SWITCH_WALLET_CHAIN", "ADD_FUSE_CHAIN"],
};
