/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Blockchain` is Ether.
 */
export declare class Blockchain {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * The only instance of the base class `Blockchain`.
     */
    static readonly ETHEREUM: Blockchain;
    static readonly ETHEREUM_TEST: Blockchain;
    static readonly AVALANCHE: Blockchain;
    static readonly AVALANCHE_TEST: Blockchain;
    static readonly SMART_CHAIN: Blockchain;
    static readonly SMART_CHAIN_TEST: Blockchain;
    static readonly MOONBASE_ALPHA: Blockchain;
    static readonly MOONRIVER: Blockchain;
    static readonly MUMBAI: Blockchain;
    static readonly MATIC: Blockchain;
    static readonly HECO: Blockchain;
    static readonly FANTOM: Blockchain;
    static readonly SHIDEN: Blockchain;
    static readonly IOTEX: Blockchain;
    static readonly HARMONY: Blockchain;
    static readonly CRONOS: Blockchain;
    static readonly OKEX: Blockchain;
    static readonly MULTIVAC: Blockchain;
    static readonly METIS_NETWORK: Blockchain;
    static readonly MOONBEAM: Blockchain;
    /**
     * Constructs an instance of the base class `Blockchain`. The only instance of the base class `Blockchain` is `Blockchain.ETHER`.
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
declare const ETHEREUM: Blockchain;
declare const AVALANCHE: Blockchain;
declare const SMART_CHAIN: Blockchain;
declare const MOONBASE_ALPHA: Blockchain;
declare const MUMBAI: Blockchain;
declare const MATIC: Blockchain;
declare const HECO: Blockchain;
declare const FANTOM: Blockchain;
declare const SHIDEN: Blockchain;
declare const IOTEX: Blockchain;
declare const HARMONY: Blockchain;
declare const CRONOS: Blockchain;
declare const OKEX: Blockchain;
declare const MULTIVAC: Blockchain;
declare const METIS_NETWORK: Blockchain;
declare const MOONBEAM: Blockchain;
export { ETHEREUM, AVALANCHE, SMART_CHAIN, MOONBASE_ALPHA, MUMBAI, MATIC, HECO, FANTOM, SHIDEN, IOTEX, HARMONY, CRONOS, OKEX, MULTIVAC, METIS_NETWORK, MOONBEAM };
