import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
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

export function createAdminTokenRecoveryEvent(
  tokenRecovered: Address,
  amount: BigInt
): AdminTokenRecovery {
  let adminTokenRecoveryEvent = changetype<AdminTokenRecovery>(newMockEvent())

  adminTokenRecoveryEvent.parameters = new Array()

  adminTokenRecoveryEvent.parameters.push(
    new ethereum.EventParam(
      "tokenRecovered",
      ethereum.Value.fromAddress(tokenRecovered)
    )
  )
  adminTokenRecoveryEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return adminTokenRecoveryEvent
}

export function createChangeTokenEvent(token: Address): ChangeToken {
  let changeTokenEvent = changetype<ChangeToken>(newMockEvent())

  changeTokenEvent.parameters = new Array()

  changeTokenEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )

  return changeTokenEvent
}

export function createClaimEvent(_user: Address, pending: BigInt): Claim {
  let claimEvent = changetype<Claim>(newMockEvent())

  claimEvent.parameters = new Array()

  claimEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  claimEvent.parameters.push(
    new ethereum.EventParam(
      "pending",
      ethereum.Value.fromUnsignedBigInt(pending)
    )
  )

  return claimEvent
}

export function createDepositEvent(_user: Address, amount: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createEmergencyWithdrawEvent(
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSetEmergencyWithdrawEvent(
  _status: boolean
): SetEmergencyWithdraw {
  let setEmergencyWithdrawEvent = changetype<SetEmergencyWithdraw>(
    newMockEvent()
  )

  setEmergencyWithdrawEvent.parameters = new Array()

  setEmergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("_status", ethereum.Value.fromBoolean(_status))
  )

  return setEmergencyWithdrawEvent
}

export function createSetMaxTotalStakeEvent(
  _maxTotalStake: BigInt
): SetMaxTotalStake {
  let setMaxTotalStakeEvent = changetype<SetMaxTotalStake>(newMockEvent())

  setMaxTotalStakeEvent.parameters = new Array()

  setMaxTotalStakeEvent.parameters.push(
    new ethereum.EventParam(
      "_maxTotalStake",
      ethereum.Value.fromUnsignedBigInt(_maxTotalStake)
    )
  )

  return setMaxTotalStakeEvent
}

export function createSetMinMaxEvent(min: BigInt, max: BigInt): SetMinMax {
  let setMinMaxEvent = changetype<SetMinMax>(newMockEvent())

  setMinMaxEvent.parameters = new Array()

  setMinMaxEvent.parameters.push(
    new ethereum.EventParam("min", ethereum.Value.fromUnsignedBigInt(min))
  )
  setMinMaxEvent.parameters.push(
    new ethereum.EventParam("max", ethereum.Value.fromUnsignedBigInt(max))
  )

  return setMinMaxEvent
}

export function createSetPenaltyWalletEvent(
  _penaltyWallet: Address
): SetPenaltyWallet {
  let setPenaltyWalletEvent = changetype<SetPenaltyWallet>(newMockEvent())

  setPenaltyWalletEvent.parameters = new Array()

  setPenaltyWalletEvent.parameters.push(
    new ethereum.EventParam(
      "_penaltyWallet",
      ethereum.Value.fromAddress(_penaltyWallet)
    )
  )

  return setPenaltyWalletEvent
}

export function createSetRewardDistributionAddressEvent(
  _rewardDistributionAddress: Address
): SetRewardDistributionAddress {
  let setRewardDistributionAddressEvent = changetype<
    SetRewardDistributionAddress
  >(newMockEvent())

  setRewardDistributionAddressEvent.parameters = new Array()

  setRewardDistributionAddressEvent.parameters.push(
    new ethereum.EventParam(
      "_rewardDistributionAddress",
      ethereum.Value.fromAddress(_rewardDistributionAddress)
    )
  )

  return setRewardDistributionAddressEvent
}

export function createSetWithdrawFeeParamEvent(
  a: BigInt,
  b: BigInt,
  c: BigInt
): SetWithdrawFeeParam {
  let setWithdrawFeeParamEvent = changetype<SetWithdrawFeeParam>(newMockEvent())

  setWithdrawFeeParamEvent.parameters = new Array()

  setWithdrawFeeParamEvent.parameters.push(
    new ethereum.EventParam("a", ethereum.Value.fromSignedBigInt(a))
  )
  setWithdrawFeeParamEvent.parameters.push(
    new ethereum.EventParam("b", ethereum.Value.fromSignedBigInt(b))
  )
  setWithdrawFeeParamEvent.parameters.push(
    new ethereum.EventParam("c", ethereum.Value.fromSignedBigInt(c))
  )

  return setWithdrawFeeParamEvent
}

export function createSetWithdrawTimeEvent(duration: BigInt): SetWithdrawTime {
  let setWithdrawTimeEvent = changetype<SetWithdrawTime>(newMockEvent())

  setWithdrawTimeEvent.parameters = new Array()

  setWithdrawTimeEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )

  return setWithdrawTimeEvent
}

export function createUpdateAdminEvent(
  user: Address,
  status: boolean
): UpdateAdmin {
  let updateAdminEvent = changetype<UpdateAdmin>(newMockEvent())

  updateAdminEvent.parameters = new Array()

  updateAdminEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  updateAdminEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return updateAdminEvent
}

export function createWithdrawEvent(
  _user: Address,
  amount: BigInt,
  feeAmount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )

  return withdrawEvent
}
