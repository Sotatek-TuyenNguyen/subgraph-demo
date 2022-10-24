import { SetNoWithdrawFeeTimeCall__Inputs } from './../generated/Reward_pool/Reward_pool';
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
import { DepositEntity, WithdrawEntity } from "../generated/schema"

export function handleAdminTokenRecovery(event: AdminTokenRecovery): void {
}

export function handleChangeToken(event: ChangeToken): void {

}

export function handleClaim(event: Claim): void {}

export function handleDeposit(event: Deposit): void {
  const depositEntity = new DepositEntity(event.transaction.hash.toHex())

  depositEntity.id = event.transaction.hash.toHex();
  depositEntity.user = event.params._user;
  depositEntity.amount = event.params.amount;
  depositEntity.time = event.block.timestamp;

  depositEntity.save();
}

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

export function handleWithdraw(event: Withdraw): void {
  const withdrawEntity = new WithdrawEntity(event.transaction.hash.toHex());

  withdrawEntity.id = event.transaction.hash.toHex();
  withdrawEntity.user = event.params._user;
  withdrawEntity.amount = event.params.amount;
  withdrawEntity.time = event.block.timestamp;

  withdrawEntity.save(); 
}
