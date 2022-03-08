import { ChainId, SolidityType } from '../constants'

import JSBI from 'jsbi'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The only instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')
  public static readonly AVAX: Currency = new Currency(18, 'AVAX', 'AVAX')
  public static readonly BNB: Currency = new Currency(18, 'BNB', 'BNB')
  public static readonly DEV: Currency = new Currency(18, 'DEV', 'DEV')
  public static readonly MATIC: Currency = new Currency(18, 'MATIC', 'MATIC')
  public static readonly HECO: Currency = new Currency(18, 'HT', 'HT')
  public static readonly MOVR: Currency = new Currency(18, 'MOVR', 'MOVR')
  public static readonly FTM: Currency = new Currency(18, 'FTM', 'FTM')
  public static readonly ALGO: Currency = new Currency(18, 'ALGO', 'ALGO')
  public static readonly SDN: Currency = new Currency(18, 'SDN', 'SDN')
  public static readonly IOTX: Currency = new Currency(18, 'IOTX', 'IOTX')
  public static readonly ONE: Currency = new Currency(18, 'ONE', 'ONE')
  public static readonly CRO: Currency = new Currency(18, 'CRO', 'CRO')
  public static readonly OKT: Currency = new Currency(18, 'OKT', 'OKT')
  public static readonly MTV: Currency = new Currency(18, 'MTV', 'MTV')
  public static readonly METIS: Currency = new Currency(18, 'METIS', 'METIS')
  public static readonly GLMR: Currency = new Currency(18, 'GLMR', 'GLMR')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
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

export const ETHER = Currency.ETHER
export const AVAX = Currency.AVAX
export const BNB = Currency.BNB
export const DEV = Currency.DEV
export const MATIC = Currency.MATIC
export const HECO = Currency.HECO
export const MOVR = Currency.MOVR
export const FTM = Currency.FTM
export const ALGO = Currency.ALGO
export const SDN = Currency.SDN
export const IOTX = Currency.IOTX
export const ONE = Currency.ONE
export const CRO = Currency.CRO
export const OKT = Currency.OKT
export const MTV = Currency.MTV
export const METIS = Currency.METIS
export const GLMR = Currency.GLMR

export const ETHER_CURRENCIES = [ETHER, AVAX, BNB, DEV, MATIC, HECO, MOVR, FTM, SDN, IOTX, ONE, CRO, OKT, MTV, METIS, GLMR];
export const ETHER_NAMES_CURRENCIES = ['ETH', 'AVAX', 'BNB', 'DEV', 'MATIC', 'HT', 'MOVR', 'FTM', 'SDN', 'IOTX', 'ONE', 'CRO', 'OKT', 'MTV', 'METIS', 'GLMR'];

export const CHAIN_IDS_AND_CURRENCIES: ([ChainId, Currency])[] = [
  [ChainId.MAINNET, ETHER],
  [ChainId.ROPSTEN, ETHER],
  [ChainId.RINKEBY, ETHER],
  [ChainId.GÖRLI, ETHER],
  [ChainId.KOVAN, ETHER],
  [ChainId.FUJI, AVAX],
  [ChainId.AVALANCHE, AVAX],
  [ChainId.SMART_CHAIN, BNB],
  [ChainId.SMART_CHAIN_TEST, BNB],
  [ChainId.MOONBASE_ALPHA, DEV],
  [ChainId.MOONRIVER, MOVR],
  [ChainId.MUMBAI, MATIC],
  [ChainId.MATIC, MATIC],
  [ChainId.HECO, HECO],
  [ChainId.FANTOM, FTM],
  [ChainId.ALGORAND, ALGO],
  [ChainId.SHIDEN, SDN],
  [ChainId.SHIDEN, SDN],
  [ChainId.IOTEX, IOTX],
  [ChainId.HARMONY, ONE],
  [ChainId.CRONOS, CRO],
  [ChainId.OKEX, OKT],
  [ChainId.MULTIVAC, MTV],
  [ChainId.METIS_NETWORK, METIS],
  [ChainId.MOONBEAM, GLMR],
];

export const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan',
  [ChainId.FUJI]: 'Avalanche',
  [ChainId.AVALANCHE]: 'Avalanche',
  [ChainId.SMART_CHAIN]: 'SmartChain',
  [ChainId.SMART_CHAIN_TEST]: 'SmartChainTestnet',
  [ChainId.MOONBASE_ALPHA]: 'Moonbase',
  [ChainId.MUMBAI]: 'Mumbai',
  [ChainId.MAINNET]: 'Ethereum',
  [ChainId.MATIC]: 'Polygon',
  [ChainId.HECO]: 'HECO',
  [ChainId.MOONRIVER]: 'Moonriver',
  [ChainId.FANTOM]: 'Fantom',
  [ChainId.ALGORAND]: 'Algorand',
  [ChainId.SHIDEN]: 'Shiden',
  [ChainId.IOTEX]: 'IoTeX',
  [ChainId.HARMONY]: 'Harmony',
  [ChainId.CRONOS]: 'Cronos',
  [ChainId.OKEX]: 'OKEx',
  [ChainId.MULTIVAC]: 'MultiVAC',
  [ChainId.METIS_NETWORK]: 'MetisNetwork',
  [ChainId.MOONBEAM]: 'Moonbeam',
}

export const NETWORK_SYMBOLS: any = {
  Ethereum: 'ETH',
  Rinkeby: 'ETH',
  Ropsten: 'ETH',
  Görli: 'ETH',
  Kovan: 'ETH',
  Avalanche: 'AVAX',
  SmartChain: 'BNB',
  Moonbase: 'DEV',
  Polygon: 'MATIC',
  HECO: 'HT',
  Moonriver: 'MOVR',
  Fantom: 'FTM',
  Algorand: 'ALGO',
  Shiden: 'SDN',
  Iotex: 'IOTX',
  Harmony: 'ONE',
  Cronos: 'CRO',
  OKEx: 'OKT',
  MultiVAC: 'MTV',
  MetisNetwork: 'METIS',
  Moonbeam: 'GLMR',
}
