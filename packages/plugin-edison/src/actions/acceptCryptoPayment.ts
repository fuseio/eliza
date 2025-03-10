import {
    elizaLogger,
    HandlerCallback,
    type IAgentRuntime,
    type Memory,
    type State,
} from "@elizaos/core";

export const acceptCryptoPaymentAction = {
    name: "ACCEPT_CRYPTO_PAYMENT",
    description: "Accept crypto payment right now",
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
                    text: "Follow the steps to accept crypto payment using Charge Payment Link:",
                    action: "ACCEPT_CRYPTO_PAYMENT"
                });
            }
            return true;
        } catch (error) {
            elizaLogger.error("Error accepting crypto payment:", error);
            if (callback) {
                callback({
                    text: `Error accepting crypto payment: ${error.message}`,
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
                    text: "Accept crypto payment right now",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "You can go over the following walkthrough to accept crypto payment with Charge.",
                    action: "ACCEPT_CRYPTO_PAYMENT",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "How can I accept crypto payment?",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "With Charge payment link you can accept crypto payment right now, following is the step by step guide:",
                    action: "ACCEPT_CRYPTO_PAYMENT",
                },
            },
        ],
        [
            {
                user: "{{user1}}",
                content: {
                    text: "I would like to create a Charge payment link",
                },
            },
            {
                user: "{{agentName}}",
                content: {
                    text: "With the mentioned steps you can create a Charge payment link right now",
                    action: "ACCEPT_CRYPTO_PAYMENT",
                },
            },
        ],
    ],
    similes: ["ACCEPT_CRYPTO_PAYMENT", "CHARGE_PAYMENT_LINK", "CREATE_PAYMENT_LINK"],
};
