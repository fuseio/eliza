import { composeContext, generateObjectDeprecated, ModelClass, type IAgentRuntime, type Memory, type State } from "@elizaos/core";

import { initWalletProvider } from "../providers/wallet";
import { SupportedChain, AddressParams } from "../types";
import { getAddressTemplate } from "../templates";
import { formatEther } from "viem";

export { getAddressTemplate }

const buildAddressDetails = async (
    state: State,
    runtime: IAgentRuntime,
): Promise<AddressParams> => {
    const context = composeContext({
        state,
        template: getAddressTemplate,
    });

    const addressDetails = (await generateObjectDeprecated({
        runtime,
        context: context,
        modelClass: ModelClass.SMALL,
    })) as AddressParams;

    return addressDetails;
}

export const getBalanceAction = {
    name: "getBalance",
    description: "Get the balance of a provided wallet address",
    handler: async (
        runtime: IAgentRuntime,
        _message: Memory,
        state: State,
        _options: any,
        callback?: (response: any) => void
    ) => {
        const walletProvider = initWalletProvider(runtime);
        const currentChain = walletProvider.getCurrentChain().name.toLowerCase() as SupportedChain;
        const { address } = await buildAddressDetails(state, runtime);

        try {
            const client = walletProvider.getPublicClient(currentChain);
            const balance = await client.getBalance({ address });
            const formattedBalance = formatEther(balance);

            if (callback) {
                callback({
                    text: `Balance for address ${address}: ${formattedBalance}`,
                    content: { balance: formattedBalance },
                });
            }
            return true;
        } catch (error) {
            console.error("Error getting balance:", error);
            if (callback) {
                callback({
                    text: `Error getting balance: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },
    template: getAddressTemplate,
    validate: async (runtime: IAgentRuntime) => {
        const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
        return typeof privateKey === "string" && privateKey.startsWith("0x");
    },
    examples: [
        [
            {
                user: "assistant",
                content: {
                    text: "I'll check the balance for 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                    action: "GET_BALANCE",
                },
            },
            {
                user: "user",
                content: {
                    text: "What's the balance of 0x742d35Cc6634C0532925a3b844Bc454e4438f44e?",
                    action: "GET_BALANCE",
                },
            },
        ],
    ],
    similes: ["CHECK_BALANCE", "BALANCE_INQUIRY", "ACCOUNT_BALANCE"],
};

export const getBlockAction = {
    name: "getBlockNumber",
    description: "Get the current block number",
    handler: async (
        runtime: IAgentRuntime,
        _message: Memory,
        state: State,
        _options: any,
        callback?: (response: any) => void
    ) => {
        const walletProvider = initWalletProvider(runtime);
        const currentChain = walletProvider.getCurrentChain().name.toLowerCase() as SupportedChain;

        try {
            const client = walletProvider.getPublicClient(currentChain);
            const blockNumber = Number(await client.getBlockNumber());

            if (callback) {
                callback({
                    text: `Current block number: ${blockNumber}`,
                    content: { blockNumber },
                });
            }
            return true;
        } catch (error) {
            console.error("Error getting block number:", error);
            if (callback) {
                callback({
                    text: `Error getting block number: ${error.message}`,
                    content: { error: error.message },
                });
            }
            return false;
        }
    },
    validate: async (runtime: IAgentRuntime) => {
        const privateKey = runtime.getSetting("EVM_PRIVATE_KEY");
        return typeof privateKey === "string" && privateKey.startsWith("0x");
    },
    examples: [
        [
            {
                user: "assistant",
                content: {
                    text: "I'll fetch the latest block number",
                    action: "GET_BLOCK",
                },
            },
            {
                user: "user",
                content: {
                    text: "What's the current block number?",
                    action: "GET_BLOCK",
                },
            },
        ],
    ],
    similes: ["BLOCK_NUMBER", "FETCH_BLOCK", "BLOCK_INFO"],
};
