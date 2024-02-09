const WALLET_ADDRESS = process.env.WALLET_ADDRESS

// Calculate unlock time based on the current timestamp and lock period
function calculateUnlockTime(lockPeriodInSeconds) {
  const currentTimestamp = Math.floor(Date.now() / 1000) // Current timestamp in seconds
  const unlockTime = currentTimestamp + lockPeriodInSeconds
  return unlockTime
}

async function main() {
  const TimeLock = await ethers.getContractFactory("TimeLock")

  const lockPeriodInSeconds = 60 * 5 // 5 min lock period
  const unlockTime = calculateUnlockTime(lockPeriodInSeconds)

  // Start deployment, returning a promise that resolves to a contract object
  const timelock = await TimeLock.deploy(WALLET_ADDRESS, unlockTime)
  console.log("Contract deployed to address:", timelock.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
