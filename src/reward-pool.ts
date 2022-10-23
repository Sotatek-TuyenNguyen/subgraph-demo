import { BigInt } from "@graphprotocol/graph-ts"
import {
  Reward_pool,
  AdminTokenRecovery,
  ChangeToken,
  Claim,
  Deposit,
  EmergencyWithdraw,
  OwnershipTransferred,
  SetEmergencyWithdraw,
  SetMaxTotalStake,
  SetMinMax,
  SetPenaltyWallet,
  SetRewardDistributionAddress,
  SetWithdrawFeeParam,
  SetWithdrawTime,
  UpdateAdmin,
  Withdraw
} from "../generated/Reward_pool/Reward_pool"
import { ExampleEntity } from "../generated/schema"

export function handleAdminTokenRecovery(event: AdminTokenRecovery): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.tokenRecovered = event.params.tokenRecovered
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.Admin(...)
  // - contract.PRECISION_FACTOR(...)
  // - contract.PRECISION_FACTOR_FE(...)
  // - contract.aNumber(...)
  // - contract.admin(...)
  // - contract.bNumber(...)
  // - contract.cNumber(...)
  // - contract.calculateAPR(...)
  // - contract.calculateWithdrawFee(...)
  // - contract.currentTotalStaked(...)
  // - contract.fixedAPR(...)
  // - contract.isEmergency(...)
  // - contract.maxStake(...)
  // - contract.maxTotalStake(...)
  // - contract.minStake(...)
  // - contract.noWithdrawFeeTime(...)
  // - contract.owner(...)
  // - contract.penaltyWallet(...)
  // - contract.pendingReward(...)
  // - contract.rewardDistributionAddress(...)
  // - contract.userInfo(...)
}

export function handleChangeToken(event: ChangeToken): void {}

export function handleClaim(event: Claim): void {}

export function handleDeposit(event: Deposit): void {}

export function handleEmergencyWithdraw(event: EmergencyWithdraw): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetEmergencyWithdraw(event: SetEmergencyWithdraw): void {}

export function handleSetMaxTotalStake(event: SetMaxTotalStake): void {}

export function handleSetMinMax(event: SetMinMax): void {}

export function handleSetPenaltyWallet(event: SetPenaltyWallet): void {}

export function handleSetRewardDistributionAddress(
  event: SetRewardDistributionAddress
): void {}

export function handleSetWithdrawFeeParam(event: SetWithdrawFeeParam): void {}

export function handleSetWithdrawTime(event: SetWithdrawTime): void {}

export function handleUpdateAdmin(event: UpdateAdmin): void {}

export function handleWithdraw(event: Withdraw): void {}
