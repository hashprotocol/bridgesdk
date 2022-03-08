import JSBI from 'jsbi'
import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Blockchain` is Ether.
 */
export class Blockchain {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Blockchain`.
   */
  public static readonly ETHEREUM: Blockchain = new Blockchain(18, 'ETH', 'Ethereum')
  public static readonly ETHEREUM_TEST: Blockchain = new Blockchain(18, 'TETH', 'Ethereum (Testnet)')
  public static readonly AVALANCHE: Blockchain = new Blockchain(18, 'AVAX', 'Avalanche')
  public static readonly AVALANCHE_TEST: Blockchain = new Blockchain(18, 'TAVAX', 'Avalanche (Testnet)')
  public static readonly SMART_CHAIN: Blockchain = new Blockchain(18, 'BNB', 'Smart Chain')
  public static readonly SMART_CHAIN_TEST: Blockchain = new Blockchain(18, 'TBNB', 'Smart Chain (Testnet)')
  public static readonly MOONBASE_ALPHA: Blockchain = new Blockchain(18, 'DEV', 'Moonbase Alpha (Testnet)')
  public static readonly MOONRIVER: Blockchain = new Blockchain(18, 'MOVR', 'Moonriver')
  public static readonly MUMBAI: Blockchain = new Blockchain(18, 'MATIC', 'Mumbai (Testnet)')
  public static readonly MATIC: Blockchain = new Blockchain(18, 'MATIC', 'Matic (Mainnet)')
  public static readonly HECO: Blockchain = new Blockchain(18, 'HT', 'Heco (Mainnet)')
  public static readonly FANTOM: Blockchain = new Blockchain(18, 'FTM', 'Fantom (Mainnet)')
  public static readonly ALGORAND: Blockchain = new Blockchain(18, 'ALGO', 'Algorand (Mainnet)')
  public static readonly SHIDEN: Blockchain = new Blockchain(18, 'SDN', 'Shiden Network')
  public static readonly IOTEX: Blockchain = new Blockchain(18, 'IOTX', 'IoTex Network')
  public static readonly HARMONY: Blockchain = new Blockchain(18, 'ONE', 'Harmony Network')
  public static readonly CRONOS: Blockchain = new Blockchain(18, 'CRO', 'Cronos Network')
  public static readonly OKEX: Blockchain = new Blockchain(18, 'OKT', 'OKEx Network')
  public static readonly MULTIVAC: Blockchain = new Blockchain(18, 'MTV', 'MULTIVAC Network')
  public static readonly METIS_NETWORK: Blockchain = new Blockchain(18, 'METIS', 'METIS NETWORK')
  public static readonly MOONBEAM: Blockchain = new Blockchain(18, 'GLMR', 'MOONBEAM NETWORK')

  /**
   * Constructs an instance of the base class `Blockchain`. The only instance of the base class `Blockchain` is `Blockchain.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHEREUM = Blockchain.ETHEREUM
const AVALANCHE = Blockchain.AVALANCHE
const SMART_CHAIN = Blockchain.SMART_CHAIN
const MOONBASE_ALPHA = Blockchain.MOONBASE_ALPHA
const MUMBAI = Blockchain.MUMBAI
const MATIC = Blockchain.MATIC
const HECO = Blockchain.HECO
const FANTOM = Blockchain.FANTOM
const ALGORAND = Blockchain.ALGORAND
const SHIDEN = Blockchain.SHIDEN
const IOTEX = Blockchain.IOTEX
const HARMONY = Blockchain.HARMONY
const CRONOS = Blockchain.CRONOS
const OKEX = Blockchain.OKEX
const MULTIVAC = Blockchain.MULTIVAC
const METIS_NETWORK = Blockchain.METIS_NETWORK
const MOONBEAM = Blockchain.MOONBEAM

export {
  ETHEREUM, AVALANCHE, SMART_CHAIN, MOONBASE_ALPHA, MUMBAI, MATIC,
  HECO, FANTOM, ALGORAND, SHIDEN, IOTEX, HARMONY, CRONOS, OKEX, MULTIVAC, METIS_NETWORK, MOONBEAM
}

