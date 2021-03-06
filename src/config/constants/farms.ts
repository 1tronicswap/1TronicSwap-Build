import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'e1TRC',
    depositFee: 0,
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x642D3Bb3067e493244217C25C1Ee2052f47441ea',
    },
    isTokenOnly: true,
    tokenAddress: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x642D3Bb3067e493244217C25C1Ee2052f47441ea',
    }, 
    token: tokens.e1TRC,
    quoteToken: tokens.wbnb,
  }, 
  {
    pid: 1,
    lpSymbol: 'e1TRC-BNB LP',
    depositFee: 300,
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x642D3Bb3067e493244217C25C1Ee2052f47441ea',
    },
    isTokenOnly: true,
    tokenAddress: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0x642D3Bb3067e493244217C25C1Ee2052f47441ea',
    },
    token: tokens.e1TRC,
    quoteToken: tokens.wbnb,
  }, 
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    depositFee: 300,
    lpAddresses: {
      97: '0x20ece652fd5be5d9ade57017ba444393b99b2f06',
      56: '0x3DAE7C5920d56AbC9530dE0Ff99ec30AC059667f',
    },
    isTokenOnly: true,
    tokenAddress: {
      97: '0x20ece652fd5be5d9ade57017ba444393b99b2f06',
      56: '0x3DAE7C5920d56AbC9530dE0Ff99ec30AC059667f',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  }, 
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

]

export default farms
