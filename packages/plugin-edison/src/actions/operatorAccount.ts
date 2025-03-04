import {
    elizaLogger,
    HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";

export const createOperatorAccountAction = {
    name: "CREATE_OPERATOR_ACCOUNT",
    description: "Create an Operator account",
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
                    text: "Follow the steps to create your Fuse Console Operator account",
                    action: "CREATE_OPERATOR_ACCOUNT"
                });
            }
            return true;
        } catch (error) {
            elizaLogger.error("Error creating operator account:", error);
            if (callback) {
                callback({
                    text: `Error creating operator account: ${error.message}`,
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
                    text: "Create an Operator account",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Follow the steps to create your Fuse Console Operator account",
                    action: "CREATE_OPERATOR_ACCOUNT",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "Login to my Operator account",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Follow the steps to login to your Operator account",
                    action: "CREATE_OPERATOR_ACCOUNT",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "I would like to register a Fuse Console operator account",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "Let me walk you through step by step to register your operator account",
                    action: "CREATE_OPERATOR_ACCOUNT",
                },
            },
        ],
    ],
    similes: ["CREATE_OPERATOR_ACCOUNT", "LOGIN_OPERATOR_ACCOUNT", "REGISTER_OPERATOR"],
};
