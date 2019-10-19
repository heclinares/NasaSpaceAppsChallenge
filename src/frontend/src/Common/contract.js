/* const keypair = Crypto.generateKeyPair()
console.log(`Secret key: ${keypair.secretKey}`)
console.log(`Public key: ${keypair.publicKey}`) */
import {
  Transaction,
  MemoryAccount,
  ChainNode,
  ContractCompilerAPI,
  Contract,
  Universal
  // Crypto
} from '@aeternity/aepp-sdk'
var useWaellet = false
var userAddress = 'ak_2vTFUL1Yz4qSBd7TDzxaDjZE7st2JpyLRa7P54coMA2UrnqLGX'
var keypair = {}
keypair.secretKey = '165e6b751ef44d0cd2b6447fc0d456605be27c207fcd8beac2982b3c5bc8267afd111407359c7302f710fcb92a1128892434048ba50dc8eabb5c916acda86cd7'
keypair.publicKey = 'ak_2vTFUL1Yz4qSBd7TDzxaDjZE7st2JpyLRa7P54coMA2UrnqLGX'

var shopAddress = 'ct_HiabMXYfWeJJjjNBGmMcpgQjZYpeeMVkXbDnms5z6fNfF3kKs'
export default {}
// export const gameContract = 'contract Game =\n\n  record state = {\n    owner            : address,\n    total_supply     : int,\n    balances         : map(address, int),\n    name             : string,\n    url              : string,\n    img              : string,\n    description      : string,\n    price            : int,\n    id               : string}\n\n  stateful entrypoint init(n : string, u : string, i : string, d : string, p : int, id2 : string) = {\n    owner = Call.caller,\n    total_supply = 0,\n    balances = {},\n    name = n,\n    url = u,\n    img = i,\n    description = d,\n    price = p,\n    id = id2}\n\n//Getters\n  entrypoint total_supply() : int = state.total_supply\n\n  entrypoint balance_of(who: address) : int = lookup_by_address(who, state.balances, 0)\n\n  entrypoint get_image() : string = state.img\n\n  entrypoint get_url() : string = state.url\n  \n  entrypoint get_description() : string = state.description\n\n  entrypoint get_price() : int = state.price\n\n  entrypoint get_id() : string = state.id\n\n//Setters\n  stateful entrypoint set_image(i : string) = \n    only_owner()\n    put(state{img = i})\n\n  stateful entrypoint set_name(i : string) = \n    only_owner()\n    put(state{name = i})\n\n  stateful entrypoint set_url(i : string) = \n    only_owner()\n    put(state{url = i})\n\n  stateful entrypoint set_description(i : string) = \n    only_owner()\n    put(state{description = i})\n\n  stateful entrypoint set_price(i : int) = \n    only_owner()\n    put(state{price = i})\n\n  stateful entrypoint set_id(i : string) = \n    only_owner()\n    put(state{id = i})\n\n//Game functions\n  stateful entrypoint buyGame() =\n    if(Call.value >= state.price)\n        transfer\'(Call.caller, state.owner, 1)\n    else\n        Chain.spend(Call.caller, Call.value)\n        abort("Can\'t pay the game, funds")\n\n  stateful entrypoint  withdraw() =\n    only_owner()\n    Chain.spend(Call.caller, Contract.balance)\n\n//Token functions\n  stateful entrypoint transfer(to: address, value: int) : bool =\n    transfer\'(Call.caller, to, value)\n\n  private stateful function transfer\'(from: address, to: address, value: int) : bool =\n    require\'(value > 0, "Value is sub zero")\n    require\'(value =< balance_of(from), "Not enough balance")\n    \n    put(state{\n      balances[from] = sub(balance_of(from), value),\n      balances[to] = add(balance_of(to), value)})\n\n    true\n\n  stateful entrypoint mint(account: address, value: int) : bool =\n    only_owner()\n    put(state{total_supply = add(state.total_supply, value),\n      balances[account] = add(balance_of(account), value)})\n\n    true\n\n//Aux functions\n  private function add(a : int, b : int) : int =\n    let c : int = a + b\n    require(c >= a, "Error")\n    c\n\n  private function sub(a : int, b : int) : int =\n    require(b =< a, "Error")\n    a - b\n\n  private function require\'(b : bool, err : string) =\n    if(!b)\n      abort(err)\n\n  private function only_owner() =\n    require\'(Call.caller == state.owner, "Only owner can mint!")\n\n  private function lookup_by_address(k : address, m, v) =\n    switch(Map.lookup(k, m))\n      None    => v\n      Some(x) => x'
export const gameContract = 'contract Game =\n\n  record state = {\n    owner            : address,\n    total_supply     : int,\n    balances         : map(address, int),\n    name             : string,\n    url              : string,\n    img              : string,\n    description      : string,\n    price            : int,\n    id               : string}\n\n  stateful entrypoint init(n : string, u : string, i : string, d : string, p : int, id2 : string) = {\n    owner = Call.caller,\n    total_supply = 0,\n    balances = {},\n    name = n,\n    url = u,\n    img = i,\n    description = d,\n    price = p,\n    id = id2}\n\n  entrypoint total_supply() : int = state.total_supply\n\n  entrypoint balance_of(who: address) : int = lookup_by_address(who, state.balances, 0)\n  \n  entrypoint get_name() : string = state.name\n  \n  entrypoint get_image() : string = state.img\n\n  entrypoint get_url() : string = state.url\n  \n  entrypoint get_description() : string = state.description\n\n  entrypoint get_price() : int = state.price\n\n  entrypoint get_id() : string = state.id\n\n  stateful entrypoint set_image(i : string) = \n    only_owner()\n    put(state{img = i})\n\n  stateful entrypoint set_name(i : string) = \n    only_owner()\n    put(state{name = i})\n\n  stateful entrypoint set_url(i : string) = \n    only_owner()\n    put(state{url = i})\n\n  stateful entrypoint set_description(i : string) = \n    only_owner()\n    put(state{description = i})\n\n  stateful entrypoint set_price(i : int) = \n    only_owner()\n    put(state{price = i})\n\n  stateful entrypoint set_id(i : string) = \n    only_owner()\n    put(state{id = i})\n\n  stateful entrypoint buyGame() =\n    if(Call.value >= state.price)\n        mint(Call.caller, 1)\n    else\n        Chain.spend(Call.caller, Call.value)\n        abort("Can\'t pay the game, funds")\n\n  stateful entrypoint  withdraw() =\n    only_owner()\n    Chain.spend(Call.caller, Contract.balance)\n\n  stateful entrypoint transfer(to: address, value: int) : bool =\n    transfer\'(Call.caller, to, value)\n\n  private stateful function transfer\'(from: address, to: address, value: int) : bool =\n    require\'(value > 0, "Value is sub zero")\n    require\'(value =< balance_of(from), "Not enough balance")\n    \n    put(state{\n      balances[from] = sub(balance_of(from), value),\n      balances[to] = add(balance_of(to), value)})\n\n    true\n\n  stateful private function mint(account: address, value: int) : bool =\n    put(state{total_supply = add(state.total_supply, value),\n      balances[account] = add(balance_of(account), value)})\n\n    true\n\n  private function add(a : int, b : int) : int =\n    let c : int = a + b\n    require(c >= a, "Error")\n    c\n\n  private function sub(a : int, b : int) : int =\n    require(b =< a, "Error")\n    a - b\n\n  private function require\'(b : bool, err : string) =\n    if(!b)\n      abort(err)\n\n  private function only_owner() =\n    require\'(Call.caller == state.owner, "Only owner can mint!")\n\n  private function lookup_by_address(k : address, m, v) =\n    switch(Map.lookup(k, m))\n      None    => v\n      Some(x) => x\n'
export const shopContract = 'contract Game =\n  entrypoint total_supply : () => int\n\ncontract Shop =\n  record state = {\n    owner             : address,\n    gamesContracts    : map(int, Game),\n    totalGames        : int,\n    games             : map(address, map(int, Game)),\n    total_games_user  : map(address, int)}\n  \n  stateful entrypoint init() = {\n    owner = Call.caller,\n    gamesContracts = {},\n    totalGames = 0,\n    games = {},\n    total_games_user = {}}\n\n  stateful entrypoint addGame(g : Game) =\n    only_owner()\n    put(state{gamesContracts[state.totalGames] = g, totalGames = add(state.totalGames, 1)})\n\n  entrypoint getGames() : map(int, Game) = state.gamesContracts\n\n  stateful entrypoint addGameToUser(user : address, game : Game) = \n    only_owner()\n    put(state{games[user][state.total_games_user[user]] = game,total_games_user[user] = add(state.total_games_user[user], 1)})\n\n  private function only_owner() =\n    require\'(Call.caller == state.owner, "Only owner can mint!")\n\n  private function require\'(b : bool, err : string) =\n    if(!b)\n      abort(err)\n\n  private function add(a : int, b : int) : int =\n    let c : int = a + b\n    require(c >= a, "Error")\n    c\n'
export const helloContract = 'contract HelloHackaton =\n    entrypoint hello_Hackaton() : string = "Hello Hackaton"'

export const setWaellet = function () {
  useWaellet = true
  window.Aepp
    .get
    .address()
    .then(result => {
      console.log('Using user address: ' + result.address)
      userAddress = result.address
    })
}

export const getUserAddress = function () {
  return userAddress
}

export const isWaellet = function () {
  return useWaellet
}

// Get game list
export const getGameList = function () {
  return new Promise((resolve) => {
    var contractU
    var clientU
    Universal({
      // This two params deprecated and will be remove in next major release
      url: 'https://sdk-testnet.aepps.com',
      internalUrl: 'https://sdk-testnet.aepps.com',
      compilerUrl: 'https://compiler.aepps.com',
      // `keypair` param deprecated and will be removed in next major release
      keypair: { secretKey: keypair.secretKey, publicKey: keypair.publicKey },
      address: keypair.publicKey,
      networkId: 'ae_uat' // or any other networkId your client should connect to)
    }).then((resp) => {
      // Initialize client Universal
      clientU = resp
      // Get the instance of gamelist contract
      clientU.getContractInstance(shopContract, {contractAddress: shopAddress}).then((contResp) => {
        contractU = contResp
        contractU.methods.getGames().then((deployResp) => {
          resolve(deployResp)
        })
      })
    })
  })
}

export const addGame = function (game) {
  // TODO: something fails when adding a game using Waellet
  // Not enough time to check this before the deadline :(
  // Using pubkey + secret version
  /* if (isWaellet) {
    return new Promise((resolve) => {
      window.Aepp
        .request
        .contractCall({
          source: shopContract,
          address: shopAddress,
          method: 'addGame',
          params: [game.deployInfo.address],
          options: { amount: 0 }
        }).then(result => {
          console.log(result)
          resolve(result)
        })
    })
  } else { */
  return new Promise((resolve) => {
    var contractU
    var clientU
    Universal({
      // This two params deprecated and will be remove in next major release
      url: 'https://sdk-testnet.aepps.com',
      internalUrl: 'https://sdk-testnet.aepps.com',
      compilerUrl: 'https://compiler.aepps.com',
      // `keypair` param deprecated and will be removed in next major release
      keypair: { secretKey: keypair.secretKey, publicKey: keypair.publicKey },
      address: keypair.publicKey,
      networkId: 'ae_uat' // or any other networkId your client should connect to)
    }).then((resp) => {
      // Initialize client Universal
      clientU = resp
      // Get the instance of gamelist contract
      clientU.getContractInstance(shopContract, {contractAddress: shopAddress}).then((contResp) => {
        contractU = contResp
        contractU.methods.addGame(game.deployInfo.address).then((addGResp) => {
          resolve(addGResp)
        })
      })
    })
  })
  // }
}

// Call static method
export const callStatic = function (contract, funcName, params) {
  console.log('Calling Static function ' + funcName)
  var keypair = {}
  keypair.secretKey = '165e6b751ef44d0cd2b6447fc0d456605be27c207fcd8beac2982b3c5bc8267afd111407359c7302f710fcb92a1128892434048ba50dc8eabb5c916acda86cd7'
  keypair.publicKey = 'ak_2vTFUL1Yz4qSBd7TDzxaDjZE7st2JpyLRa7P54coMA2UrnqLGX'
  var client
  const ContractWithAE = Contract
    .compose(Transaction, MemoryAccount, ChainNode) // AE implementation
    .compose(ContractCompilerAPI) // ContractBase implementation
  ContractWithAE({
    // This two params deprecated and will be remove in next major release
    url: 'https://sdk-testnet.aepps.com',
    internalUrl: 'https://sdk-testnet.aepps.com',
    compilerUrl: 'https://compiler.aepps.com',
    // `keypair` param deprecated and will be removed in next major release
    keypair: { secretKey: keypair.secretKey, publicKey: keypair.publicKey },
    address: keypair.publicKey,
    networkId: 'ae_uat' // or any other networkId your client should connect to)
  }).then((data) => {
    client = data
    // console.log(client)
    var callResult
    var decodedData
    client.contractCallStatic(contract,
      keypair.publicKey,
      funcName, params, {}).then((result) => {
      callResult = result
      console.log(callResult)
      callResult.decode().then((resultDecode) => {
        decodedData = resultDecode
        console.log(decodedData)
      })
    })
    // console.log(callResult)
  })
}

// Send transaction to a contract
export const call = function (contract, funcName, params, address) {
  return new Promise((resolve) => {
    console.log('Calling function ' + funcName)
    var keypair = {}
    keypair.secretKey = '165e6b751ef44d0cd2b6447fc0d456605be27c207fcd8beac2982b3c5bc8267afd111407359c7302f710fcb92a1128892434048ba50dc8eabb5c916acda86cd7'
    keypair.publicKey = 'ak_2vTFUL1Yz4qSBd7TDzxaDjZE7st2JpyLRa7P54coMA2UrnqLGX'

    var contractU
    var clientU
    Universal({
      // This two params deprecated and will be remove in next major release
      url: 'https://sdk-testnet.aepps.com',
      internalUrl: 'https://sdk-testnet.aepps.com',
      compilerUrl: 'https://compiler.aepps.com',
      // `keypair` param deprecated and will be removed in next major release
      keypair: { secretKey: keypair.secretKey, publicKey: keypair.publicKey },
      address: keypair.publicKey,
      networkId: 'ae_uat' // or any other networkId your client should connect to)
    }).then((resp) => {
      if (typeof address === 'undefined') {
        address = shopAddress
      }
      clientU = resp
      clientU.getContractInstance(contract, {contractAddress: address}).then((contResp) => {
        contractU = contResp
        contractU.methods[funcName](...params).then((final) => {
          resolve(final)
        })
      })
    })
    /* var client
    const ContractWithAE = Contract
      .compose(Transaction, MemoryAccount, ChainNode) // AE implementation
      .compose(ContractCompilerAPI) // ContractBase implementation
    ContractWithAE({
      // This two params deprecated and will be remove in next major release
      url: 'https://sdk-testnet.aepps.com',
      internalUrl: 'https://sdk-testnet.aepps.com',
      compilerUrl: 'https://compiler.aepps.com',
      // `keypair` param deprecated and will be removed in next major release
      keypair: { secretKey: keypair.secretKey, publicKey: keypair.publicKey },
      address: address,
      networkId: 'ae_uat' // or any other networkId your client should connect to)
    }).then((data) => {
      client = data
      // console.log(client)
      var callResult
      var decodedData
      client.contractCall(contract,
        address,
        funcName, params, {}).then((result) => {
        callResult = result
        console.log(callResult)
        callResult.decode().then((resultDecode) => {
          decodedData = resultDecode
          console.log(decodedData)
        })
      })
      // console.log(callResult)
    }) */
  })
}

// Deploy contract
export const deploy = function (contract, funcName, params) {
  return new Promise((resolve) => {
    var keypair = {}
    keypair.secretKey = '165e6b751ef44d0cd2b6447fc0d456605be27c207fcd8beac2982b3c5bc8267afd111407359c7302f710fcb92a1128892434048ba50dc8eabb5c916acda86cd7'
    keypair.publicKey = 'ak_2vTFUL1Yz4qSBd7TDzxaDjZE7st2JpyLRa7P54coMA2UrnqLGX'

    var contractU
    var clientU
    Universal({
      // This two params deprecated and will be remove in next major release
      url: 'https://sdk-testnet.aepps.com',
      internalUrl: 'https://sdk-testnet.aepps.com',
      compilerUrl: 'https://compiler.aepps.com',
      // `keypair` param deprecated and will be removed in next major release
      keypair: { secretKey: keypair.secretKey, publicKey: keypair.publicKey },
      address: keypair.publicKey,
      networkId: 'ae_uat' // or any other networkId your client should connect to)
    }).then((resp) => {
      clientU = resp
      clientU.getContractInstance(contract).then((contResp) => {
        contractU = contResp
        console.log('DEPLOYING...')
        contractU.deploy(params).then((deployResp) => {
          console.log('DEPLOYED')
          var newContractAddress = deployResp.address
          console.log(newContractAddress)
          resolve(contResp)
        })
      })
    })
  })
}

export const buyGame = function (game) {
  if (isWaellet) {
    window.Aepp
      .request
      .contractCall({
        source: gameContract,
        address: game.address,
        method: 'buyGame',
        params: [],
        options: { amount: game.price }
      }).then(result => console.log(result))
  } else {
    console.log('NOT WAELLET')
  }
}
