import Vue from 'vue'
import { getInstance } from '@bonustrack/lock/plugins/vue'
import { Web3Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { formatUnits, parseUnits } from '@ethersproject/units'
import { MaxUint256 } from '@ethersproject/constants'
import { Interface } from '@ethersproject/abi'
import store from '@/store'
import abi from '@/helpers/abi'
import config from '@/helpers/config'
import wsProvider from '@/helpers/ws'
import rpcProvider from '@/helpers/rpc'
import namespaces from '@/namespaces.json'

console.log('abi', abi)

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    BEEANTPOOL: 300000,
  }
}

let auth
let web3

wsProvider.on('block', blockNumber => {
  store.commit('GET_BLOCK_SUCCESS', blockNumber)
})

const state = {
  injectedLoaded: false,
  injectedChainId: null,
  account: null,
  name: null,
  active: false,
  balances: {},
  blockNumber: 0,
  namespaces: {}
}

const mutations = {
  LOGOUT(_state) {
    Vue.set(_state, 'injectedLoaded', false)
    Vue.set(_state, 'injectedChainId', null)
    Vue.set(_state, 'account', null)
    Vue.set(_state, 'name', null)
    Vue.set(_state, 'active', false)
    Vue.set(_state, 'balances', {})
    console.debug('LOGOUT')
  },
  LOAD_WEB3_REQUEST() {
    console.debug('LOAD_WEB3_REQUEST')
  },
  LOAD_WEB3_SUCCESS() {
    console.debug('LOAD_WEB3_SUCCESS')
  },
  LOAD_WEB3_FAILURE(_state, payload) {
    console.debug('LOAD_WEB3_FAILURE', payload)
  },
  LOAD_PROVIDER_REQUEST() {
    console.debug('LOAD_PROVIDER_REQUEST')
  },
  LOAD_PROVIDER_SUCCESS(_state, payload) {
    Vue.set(_state, 'injectedLoaded', payload.injectedLoaded)
    Vue.set(_state, 'injectedChainId', payload.injectedChainId)
    Vue.set(_state, 'account', payload.account)
    Vue.set(_state, 'name', payload.name)
    console.debug('LOAD_PROVIDER_SUCCESS')
  },
  LOAD_PROVIDER_FAILURE(_state, payload) {
    Vue.set(_state, 'injectedLoaded', false)
    Vue.set(_state, 'injectedChainId', null)
    Vue.set(_state, 'account', null)
    Vue.set(_state, 'active', false)
    console.debug('LOAD_PROVIDER_FAILURE', payload)
  },
  LOAD_BACKUP_PROVIDER_REQUEST() {
    console.debug('LOAD_BACKUP_PROVIDER_REQUEST')
  },
  LOAD_BACKUP_PROVIDER_SUCCESS(_state, payload) {
    console.debug('LOAD_BACKUP_PROVIDER_SUCCESS', payload)
  },
  LOAD_BACKUP_PROVIDER_FAILURE(_state, payload) {
    Vue.set(_state, 'injectedLoaded', false)
    Vue.set(_state, 'backUpLoaded', false)
    Vue.set(_state, 'account', null)
    Vue.set(_state, 'activeChainId', null)
    Vue.set(_state, 'active', false)
    console.debug('LOAD_BACKUP_PROVIDER_FAILURE', payload)
  },
  HANDLE_CHAIN_CHANGED() {
    console.debug('HANDLE_CHAIN_CHANGED')
  },
  HANDLE_ACCOUNTS_CHANGED(_state, payload) {
    Vue.set(_state, 'account', payload)
    console.debug('HANDLE_ACCOUNTS_CHANGED', payload)
  },
  HANDLE_CLOSE_CHANGED() {
    console.debug('HANDLE_CLOSE_CHANGED')
  },
  HANDLE_NETWORK_CHANGED() {
    console.debug('HANDLE_NETWORK_CHANGED')
  },
  LOOKUP_ADDRESS_REQUEST() {
    console.debug('LOOKUP_ADDRESS_REQUEST')
  },
  LOOKUP_ADDRESS_SUCCESS(_state, payload) {
    Vue.set(_state, 'name', payload)
    console.debug('LOOKUP_ADDRESS_SUCCESS')
  },
  LOOKUP_ADDRESS_FAILURE(_state, payload) {
    console.debug('LOOKUP_ADDRESS_FAILURE', payload)
  },
  RESOLVE_NAME_REQUEST() {
    console.debug('RESOLVE_NAME_REQUEST')
  },
  RESOLVE_NAME_SUCCESS() {
    console.debug('RESOLVE_NAME_SUCCESS')
  },
  RESOLVE_NAME_FAILURE(_state, payload) {
    console.debug('RESOLVE_NAME_FAILURE', payload)
  },
  SEND_TRANSACTION_REQUEST() {
    console.debug('SEND_TRANSACTION_REQUEST')
  },
  SEND_TRANSACTION_SUCCESS() {
    console.debug('SEND_TRANSACTION_SUCCESS')
  },
  SEND_TRANSACTION_FAILURE(_state, payload) {
    console.debug('SEND_TRANSACTION_FAILURE', payload)
  },
  SIGN_MESSAGE_REQUEST() {
    console.debug('SIGN_MESSAGE_REQUEST')
  },
  SIGN_MESSAGE_SUCCESS() {
    console.debug('SIGN_MESSAGE_SUCCESS')
  },
  SIGN_MESSAGE_FAILURE(_state, payload) {
    console.debug('SIGN_MESSAGE_FAILURE', payload)
  },
  GET_BLOCK_REQUEST() {
    console.debug('GET_BLOCK_REQUEST')
  },
  GET_BLOCK_SUCCESS(_state, payload) {
    Vue.set(_state, 'blockNumber', payload)
    console.debug('GET_BLOCK_SUCCESS', payload)
  },
  GET_BLOCK_FAILURE(_state, payload) {
    console.debug('GET_BLOCK_FAILURE', payload)
  },
  GET_BALANCE_REQUEST() {
    console.debug('GET_BALANCE_REQUEST')
  },
  GET_BALANCE_SUCCESS() {
    console.debug('GET_BALANCE_SUCCESS')
  },
  GET_BALANCE_FAILURE(_state, payload) {
    console.debug('GET_BALANCE_FAILURE', payload)
  },
  MULTICALL_SUCCESS() {
    console.debug('MULTICALL_SUCCESS')
  },
  METADATA_SUCCESS(_state, payload) {
    Vue.set(_state, 'namespaces', payload)
    console.debug('METADATA_SUCCESS')
  }
}

const actions = {
  login: async ({ dispatch }, connector = 'injected') => {
    auth = getInstance()
    await auth.login(connector)
    if (auth.provider) {
      web3 = new Web3Provider(auth.provider)
      await dispatch('loadWeb3')
    }
  },
  logout: async ({ commit }) => {
    Vue.prototype.$auth.logout()
    commit('LOGOUT')
  },
  loadWeb3: async ({ commit, dispatch }) => {
    commit('LOAD_WEB3_REQUEST')
    try {
      await dispatch('loadProvider')
      await dispatch('loadAccount')
      commit('LOAD_WEB3_SUCCESS')
      if (!state.injectedLoaded || state.injectedChainId !== config.chainId) {
        await dispatch('loadBackupProvider')
      } else {
        /**
        this.providerStatus.activeChainId = this.providerStatus.injectedChainId;
        this.providerStatus.injectedActive = true;
        if (this.providerStatus.account)
          this.fetchUserBlockchainData(this.providerStatus.account);
        */
      }
    } catch (e) {
      commit('LOAD_WEB3_FAILURE', e)
      return Promise.reject()
    }
  },
  loadProvider: async ({ commit, dispatch }) => {
    commit('LOAD_PROVIDER_REQUEST')
    try {
      if (auth.provider.removeAllListeners) auth.provider.removeAllListeners()
      if (auth.provider.on) {
        auth.provider.on('chainChanged', async () => {
          commit('HANDLE_CHAIN_CHANGED')
          if (state.active) {
            await dispatch('loadWeb3')
          }
        })
        auth.provider.on('accountsChanged', async accounts => {
          if (accounts.length === 0) {
            if (state.active) await dispatch('loadWeb3')
          } else {
            commit('HANDLE_ACCOUNTS_CHANGED', accounts[0])
            await dispatch('loadWeb3')
          }
        })
        auth.provider.on('disconnect', async () => {
          commit('HANDLE_CLOSE')
          if (state.active) await dispatch('loadWeb3')
        })
        auth.provider.on('networkChanged', async () => {
          commit('HANDLE_NETWORK_CHANGED')
          if (state.active) {
            await dispatch('loadWeb3')
          }
        })
      }
      const network = await web3.getNetwork()
      console.log('network', network)
      const accounts = await web3.listAccounts()
      const account = accounts.length > 0 ? accounts[0] : null
      commit('LOAD_PROVIDER_SUCCESS', {
        injectedLoaded: true,
        injectedChainId: network.chainId,
        account,
        name
      })
    } catch (e) {
      commit('LOAD_PROVIDER_FAILURE', e)
      return Promise.reject()
    }
  },
  loadBackupProvider: async ({ commit }) => {
    try {
      web3 = rpcProvider
      const network = await rpcProvider.getNetwork()
      commit('LOAD_BACKUP_PROVIDER_SUCCESS', {
        injectedActive: false,
        backUpLoaded: true,
        account: null,
        activeChainId: network.chainId
        // backUpWeb3: web3,
      })
    } catch (e) {
      commit('LOAD_BACKUP_PROVIDER_FAILURE', e)
      return Promise.reject()
    }
  },
  lookupAddress: async ({ commit }) => {
    commit('LOOKUP_ADDRESS_REQUEST')
    try {
      const name = await web3.lookupAddress(state.account)
      commit('LOOKUP_ADDRESS_SUCCESS', name)
      return name
    } catch (e) {
      commit('LOOKUP_ADDRESS_FAILURE', e)
    }
  },
  resolveName: async ({ commit }, payload) => {
    commit('RESOLVE_NAME_REQUEST')
    try {
      const address = await web3.resolveName(payload)
      commit('RESOLVE_NAME_SUCCESS')
      return address
    } catch (e) {
      commit('RESOLVE_NAME_FAILURE', e)
      return Promise.reject()
    }
  },
  sendTransaction: async (
    { commit },
    [contractType, contractAddress, action, params]
  ) => {
    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contract = new Contract(
        getAddress(contractAddress),
        abi[contractType],
        web3
      )
      const contractWithSigner = contract.connect(signer)
      const tx = await contractWithSigner[action](...params)
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  signMessage: async ({ commit }, message) => {
    commit('SIGN_MESSAGE_REQUEST')
    try {
      const signer = web3.getSigner()
      const sig = await signer.signMessage(message)
      commit('SIGN_MESSAGE_SUCCESS')
      return sig
    } catch (e) {
      commit('SIGN_MESSAGE_FAILURE', e)
      return Promise.reject(e)
    }
  },
  loadAccount: async ({ dispatch }) => {
    await dispatch('lookupAddress')
  },
  getBlockNumber: async ({ commit }) => {
    commit('GET_BLOCK_REQUEST')
    try {
      const blockNumber: any = await rpcProvider.getBlockNumber()
      commit('GET_BLOCK_SUCCESS', parseInt(blockNumber))
      return blockNumber
    } catch (e) {
      commit('GET_BLOCK_FAILURE', e)
      return Promise.reject()
    }
  },
  getBalance: async ({ commit, dispatch }, { blockTag, token }) => {
    const { decimals } = state.namespaces[token]
    commit('GET_BALANCE_REQUEST')
    try {
      const response = await dispatch('multicall', {
        name: 'TestToken',
        calls: [[token, 'balanceOf', [state.account]]],
        options: { blockTag }
      })
      const balance = parseFloat(formatUnits(response[0].toString(), decimals))
      commit('GET_BALANCE_SUCCESS')
      return balance
    } catch (e) {
      commit('GET_BALANCE_FAILURE', e)
      return Promise.reject()
    }
  },
  // get balanceOf
  balanceOf: async ({ commit }, { contract, abiName, account, decimals = 18 }) => {
    try {
      const multi = new Contract(contract, abi[abiName], rpcProvider)

      let response = await multi.balanceOf(account)

      console.log('balanceOf', response)

      let balance = parseFloat(formatUnits(response.toString(), decimals))

      return balance
    } catch (e) {
      commit('GET_BALANCE_FAILURE', e)
      return Promise.reject()
    }
  },
  // get earned
  earned: async ({ commit }, { contract, abiName, account }) => {
    try {
      const multi = new Contract(contract, abi[abiName], rpcProvider)
      let response = await multi.earned(account)

      console.log('earned', response)

      let balance = parseFloat(formatUnits(response.toString(), 18))

      return balance
    } catch (e) {
      return Promise.reject()
    }
  },
  // get earned honey
  getEarnedHoney: async ({ commit }, { contract, abiName, account }) => {
    try {
      const multi = new Contract(contract, abi[abiName], rpcProvider)
      let response = await multi.earnedHoney(account)

      console.log('getEarnedHoney', response)

      let balance = parseFloat(formatUnits(response.toString(), 18))

      return balance
    } catch (e) {
      return Promise.reject()
    }
  },
  // get approve state
  approveState: async ({ commit }, { contract, abiName, account, poolContract }) => {
    try {
      const multi = new Contract(contract, abi[abiName], rpcProvider)
      let response = await multi.allowance(account, poolContract)

      console.log('approveState', response)

      let balance = parseFloat(formatUnits(response.toString(), 18))

      return balance
    } catch (e) {
      console.log('e', e)
      return Promise.reject()
    }
  },
  // get totalSupply
  totalSupply: async ({ commit }, { contract, abiName, decimals = 18 }) => {
    try {
      const multi = new Contract(contract, abi[abiName], rpcProvider)
      let response = await multi.totalSupply()

      console.log('totalSupply', response)

      let balance = parseFloat(formatUnits(response.toString(), decimals))

      return balance
    } catch (e) {
      console.log('e', e)
      return Promise.reject()
    }
  },
  // approve
  approve: async (
    { commit },
    {contract, abiName, poolContract}
  ) => {

    console.log('MaxUint256.toString()', MaxUint256.toString())

    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contractRes = new Contract(
        contract,
        abi[abiName],
        web3
      )
      const contractWithSigner = contractRes.connect(signer)
      
      const tx = contractWithSigner.approve(poolContract, MaxUint256.toString(), {
        gasLimit: 80000
      })
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  // stake
  stake: async (
    { commit },
    { contract, abiName, amount, decimals = 18 }
  ) => {
    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contractRes = new Contract(
        contract,
        abi[abiName],
        web3
      )      

      const gasLimit = GAS_LIMIT.STAKING[abiName.toUpperCase()] || GAS_LIMIT.STAKING.DEFAULT
      const contractWithSigner = contractRes.connect(signer)
      let amountStr = parseUnits(amount + '', decimals).toString()
      const tx = contractWithSigner.stake(amountStr, {
        gasLimit
      })
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  // unStake
  unStake: async (
    { commit },
    { contract, abiName, amount, decimals = 18 }
  ) => {

    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contractRes = new Contract(
        contract,
        abi[abiName],
        web3
      )
      const contractWithSigner = contractRes.connect(signer)
      let amountStr = parseUnits(amount + '', decimals).toString()
      const tx = contractWithSigner.withdraw(amountStr, {
        gasLimit: 200000
      })
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  // harvest
  harvest: async (
    { commit },
    { contract, abiName}
  ) => {

    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contractRes = new Contract(
        contract,
        abi[abiName],
        web3
      )
      const contractWithSigner = contractRes.connect(signer)
      const tx = contractWithSigner.getReward({
        gasLimit: 200000
      })
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  // harvest honey
  harvestHoney: async (
    { commit },
    { contract, abiName}
  ) => {

    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contractRes = new Contract(
        contract,
        abi[abiName],
        web3
      )
      const contractWithSigner = contractRes.connect(signer)
      const tx = contractWithSigner.getHoney({
        gasLimit: 200000
      })
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  // exit
  exit: async (
    { commit },
    { contract, abiName }
  ) => {

    commit('SEND_TRANSACTION_REQUEST')
    try {
      const signer = web3.getSigner()
      const contractRes = new Contract(
        contract,
        abi[abiName],
        web3
      )
      const contractWithSigner = contractRes.connect(signer)
      const tx = contractWithSigner.exit({
        gasLimit: 400000
      })
      await tx.wait()
      commit('SEND_TRANSACTION_SUCCESS')
      return tx
    } catch (e) {
      commit('SEND_TRANSACTION_FAILURE', e)
      return Promise.reject()
    }
  },
  multicall: async ({ commit }, { name, calls, options }) => {
    const multi = new Contract(config.multicall, abi['Multicall'], rpcProvider)
    const itf = new Interface(abi[name])

    try {
      let [, response] = await multi.balanceOf(
        calls.map(call => [
          call[0].toLowerCase(),
          itf.encodeFunctionData(call[1], call[2])
        ]),
        options || {}
      )
      response = response.map((call, i) =>
        itf.decodeFunctionResult(calls[i][1], call)
      )
      commit('MULTICALL_SUCCESS')
      return response
    } catch (e) {
      return Promise.reject()
    }
  },
  metadata: async ({ commit, dispatch }) => {
    try {
      const noDecimals = ['yearn']
      const response = await dispatch('multicall', {
        name: 'TestToken',
        calls: Object.values(namespaces)
          .filter(space => !noDecimals.includes(space.key))
          .map((space: any) => [space.address, 'decimals', []])
      })
      const payload = Object.fromEntries(
        response.map((item, i) => [
          // @ts-ignore
          Object.values(namespaces).filter(
            space => !noDecimals.includes(space.key)
          )[i].address,
          { decimals: response[i][0] }
        ])
      )
      payload['0xBa37B002AbaFDd8E89a1995dA52740bbC013D992'] = { decimals: 18 }
      commit('METADATA_SUCCESS', payload)
      return payload
    } catch (e) {
      return Promise.reject()
    }
  }
}

export default {
  state,
  mutations,
  actions
}
