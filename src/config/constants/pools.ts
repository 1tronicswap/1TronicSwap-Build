import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.e1TRC,
    earningToken: tokens.e1TRC,
    contractAddress: {
      97: '0x77F8EDDec3D38b3cF3d93BD1a802f11E5F9d4903',
      56: '0xEAD59DCa624B1a8c23bf38CA4C62526339FA8e5E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.40',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.OneTronic,
    earningToken: tokens.e1TRC,
    contractAddress: {
      97: '0x77F8EDDec3D38b3cF3d93BD1a802f11E5F9d4903',
      56: '0xEAD59DCa624B1a8c23bf38CA4C62526339FA8e5E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.busd,
    earningToken: tokens.e1TRC,
    contractAddress: {
      97: '0x77F8EDDec3D38b3cF3d93BD1a802f11E5F9d4903',
      56: '0xEAD59DCa624B1a8c23bf38CA4C62526339FA8e5E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '4',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
