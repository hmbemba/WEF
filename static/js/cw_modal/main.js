import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi'
import { getAccount } from '@wagmi/core'
import { mainnet, arbitrum, goerli } from 'viem/chains'

// 1. Define constants
const projectId = '7f44f9a6b43a2e7a0b56e84f83730798'

// 2. Create wagmiConfig
const metadata = {
  name: 'WideEyeFeels',
  description: 'WideEyeFeels Connect',
  url: 'https://widefeels.us',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum, goerli]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

export { createWeb3Modal, wagmiConfig, chains, projectId, getAccount}