import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Platforms from './Components/Platforms';
import Platforms2 from './Components/Platforms2';
import EmailPage from './Components/EmailPage';

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'd00aa3fb1d942639eedcda4705857811'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Header/>
          <HomePage/>
        </Route>
        <Route exact path="/platforms">
          <Header/>
          <Platforms/>
        </Route>
        <Route path="/platforms/:platform">
          <Header/>
          <Platforms2/>
        </Route>
        <Route exact path="/email">
          <Header/>
          <EmailPage/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </BrowserRouter>
    </div>
  )
}

export function ContextProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default App