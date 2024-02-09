const API_URL = process.env.API_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const ethers = require("ethers")

const contract = require("../artifacts/contracts/timelock.sol/TimeLock.json")

// provider - Alchemy
const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL)

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider)

// contract instance
const timelockContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
)

async function main() {
  const message = await timelockContract.withdraw()
}

main()
