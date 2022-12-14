// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AdminTokenRecovery extends ethereum.Event {
  get params(): AdminTokenRecovery__Params {
    return new AdminTokenRecovery__Params(this);
  }
}

export class AdminTokenRecovery__Params {
  _event: AdminTokenRecovery;

  constructor(event: AdminTokenRecovery) {
    this._event = event;
  }

  get tokenRecovered(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ChangeToken extends ethereum.Event {
  get params(): ChangeToken__Params {
    return new ChangeToken__Params(this);
  }
}

export class ChangeToken__Params {
  _event: ChangeToken;

  constructor(event: ChangeToken) {
    this._event = event;
  }

  get token(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pending(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetEmergencyWithdraw extends ethereum.Event {
  get params(): SetEmergencyWithdraw__Params {
    return new SetEmergencyWithdraw__Params(this);
  }
}

export class SetEmergencyWithdraw__Params {
  _event: SetEmergencyWithdraw;

  constructor(event: SetEmergencyWithdraw) {
    this._event = event;
  }

  get _status(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class SetMaxTotalStake extends ethereum.Event {
  get params(): SetMaxTotalStake__Params {
    return new SetMaxTotalStake__Params(this);
  }
}

export class SetMaxTotalStake__Params {
  _event: SetMaxTotalStake;

  constructor(event: SetMaxTotalStake) {
    this._event = event;
  }

  get _maxTotalStake(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SetMinMax extends ethereum.Event {
  get params(): SetMinMax__Params {
    return new SetMinMax__Params(this);
  }
}

export class SetMinMax__Params {
  _event: SetMinMax;

  constructor(event: SetMinMax) {
    this._event = event;
  }

  get min(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get max(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class SetPenaltyWallet extends ethereum.Event {
  get params(): SetPenaltyWallet__Params {
    return new SetPenaltyWallet__Params(this);
  }
}

export class SetPenaltyWallet__Params {
  _event: SetPenaltyWallet;

  constructor(event: SetPenaltyWallet) {
    this._event = event;
  }

  get _penaltyWallet(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetRewardDistributionAddress extends ethereum.Event {
  get params(): SetRewardDistributionAddress__Params {
    return new SetRewardDistributionAddress__Params(this);
  }
}

export class SetRewardDistributionAddress__Params {
  _event: SetRewardDistributionAddress;

  constructor(event: SetRewardDistributionAddress) {
    this._event = event;
  }

  get _rewardDistributionAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetWithdrawFeeParam extends ethereum.Event {
  get params(): SetWithdrawFeeParam__Params {
    return new SetWithdrawFeeParam__Params(this);
  }
}

export class SetWithdrawFeeParam__Params {
  _event: SetWithdrawFeeParam;

  constructor(event: SetWithdrawFeeParam) {
    this._event = event;
  }

  get a(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get b(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get c(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SetWithdrawTime extends ethereum.Event {
  get params(): SetWithdrawTime__Params {
    return new SetWithdrawTime__Params(this);
  }
}

export class SetWithdrawTime__Params {
  _event: SetWithdrawTime;

  constructor(event: SetWithdrawTime) {
    this._event = event;
  }

  get duration(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class UpdateAdmin extends ethereum.Event {
  get params(): UpdateAdmin__Params {
    return new UpdateAdmin__Params(this);
  }
}

export class UpdateAdmin__Params {
  _event: UpdateAdmin;

  constructor(event: UpdateAdmin) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get status(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get _user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get feeAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Reward_pool__userInfoResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getAmount(): BigInt {
    return this.value0;
  }

  getTimeStake(): BigInt {
    return this.value1;
  }

  getTotalRewardEarned(): BigInt {
    return this.value2;
  }
}

export class Reward_pool extends ethereum.SmartContract {
  static bind(address: Address): Reward_pool {
    return new Reward_pool("Reward_pool", address);
  }

  Admin(_account: Address): boolean {
    let result = super.call("Admin", "Admin(address):(bool)", [
      ethereum.Value.fromAddress(_account)
    ]);

    return result[0].toBoolean();
  }

  try_Admin(_account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("Admin", "Admin(address):(bool)", [
      ethereum.Value.fromAddress(_account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  PRECISION_FACTOR(): BigInt {
    let result = super.call(
      "PRECISION_FACTOR",
      "PRECISION_FACTOR():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRECISION_FACTOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRECISION_FACTOR",
      "PRECISION_FACTOR():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  PRECISION_FACTOR_FE(): BigInt {
    let result = super.call(
      "PRECISION_FACTOR_FE",
      "PRECISION_FACTOR_FE():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_PRECISION_FACTOR_FE(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "PRECISION_FACTOR_FE",
      "PRECISION_FACTOR_FE():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  aNumber(): BigInt {
    let result = super.call("aNumber", "aNumber():(int256)", []);

    return result[0].toBigInt();
  }

  try_aNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("aNumber", "aNumber():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  admin(param0: Address): boolean {
    let result = super.call("admin", "admin(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_admin(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("admin", "admin(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  bNumber(): BigInt {
    let result = super.call("bNumber", "bNumber():(int256)", []);

    return result[0].toBigInt();
  }

  try_bNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("bNumber", "bNumber():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  cNumber(): BigInt {
    let result = super.call("cNumber", "cNumber():(int256)", []);

    return result[0].toBigInt();
  }

  try_cNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("cNumber", "cNumber():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateAPR(_user: Address): BigInt {
    let result = super.call("calculateAPR", "calculateAPR(address):(uint256)", [
      ethereum.Value.fromAddress(_user)
    ]);

    return result[0].toBigInt();
  }

  try_calculateAPR(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateAPR",
      "calculateAPR(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateWithdrawFee(_amount: BigInt, _user: Address): BigInt {
    let result = super.call(
      "calculateWithdrawFee",
      "calculateWithdrawFee(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_user)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateWithdrawFee(
    _amount: BigInt,
    _user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateWithdrawFee",
      "calculateWithdrawFee(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromAddress(_user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentTotalStaked(): BigInt {
    let result = super.call(
      "currentTotalStaked",
      "currentTotalStaked():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_currentTotalStaked(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentTotalStaked",
      "currentTotalStaked():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  fixedAPR(): BigInt {
    let result = super.call("fixedAPR", "fixedAPR():(uint128)", []);

    return result[0].toBigInt();
  }

  try_fixedAPR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("fixedAPR", "fixedAPR():(uint128)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isEmergency(): boolean {
    let result = super.call("isEmergency", "isEmergency():(bool)", []);

    return result[0].toBoolean();
  }

  try_isEmergency(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isEmergency", "isEmergency():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxStake(): BigInt {
    let result = super.call("maxStake", "maxStake():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxStake(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxStake", "maxStake():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxTotalStake(): BigInt {
    let result = super.call("maxTotalStake", "maxTotalStake():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxTotalStake(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxTotalStake",
      "maxTotalStake():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minStake(): BigInt {
    let result = super.call("minStake", "minStake():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minStake(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("minStake", "minStake():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  noWithdrawFeeTime(): BigInt {
    let result = super.call(
      "noWithdrawFeeTime",
      "noWithdrawFeeTime():(uint128)",
      []
    );

    return result[0].toBigInt();
  }

  try_noWithdrawFeeTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "noWithdrawFeeTime",
      "noWithdrawFeeTime():(uint128)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  penaltyWallet(): Address {
    let result = super.call("penaltyWallet", "penaltyWallet():(address)", []);

    return result[0].toAddress();
  }

  try_penaltyWallet(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "penaltyWallet",
      "penaltyWallet():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingReward(_user: Address): BigInt {
    let result = super.call(
      "pendingReward",
      "pendingReward(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return result[0].toBigInt();
  }

  try_pendingReward(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingReward",
      "pendingReward(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardDistributionAddress(): Address {
    let result = super.call(
      "rewardDistributionAddress",
      "rewardDistributionAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_rewardDistributionAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "rewardDistributionAddress",
      "rewardDistributionAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userInfo(param0: Address): Reward_pool__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(address):(uint256,uint128,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new Reward_pool__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_userInfo(
    param0: Address
  ): ethereum.CallResult<Reward_pool__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(address):(uint256,uint128,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Reward_pool__userInfoResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _rewardDistributionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _a(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _b(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _c(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddAdminCall extends ethereum.Call {
  get inputs(): AddAdminCall__Inputs {
    return new AddAdminCall__Inputs(this);
  }

  get outputs(): AddAdminCall__Outputs {
    return new AddAdminCall__Outputs(this);
  }
}

export class AddAdminCall__Inputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }

  get _AddAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddAdminCall__Outputs {
  _call: AddAdminCall;

  constructor(call: AddAdminCall) {
    this._call = call;
  }
}

export class ChangeAPRCall extends ethereum.Call {
  get inputs(): ChangeAPRCall__Inputs {
    return new ChangeAPRCall__Inputs(this);
  }

  get outputs(): ChangeAPRCall__Outputs {
    return new ChangeAPRCall__Outputs(this);
  }
}

export class ChangeAPRCall__Inputs {
  _call: ChangeAPRCall;

  constructor(call: ChangeAPRCall) {
    this._call = call;
  }

  get _apr(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeAPRCall__Outputs {
  _call: ChangeAPRCall;

  constructor(call: ChangeAPRCall) {
    this._call = call;
  }
}

export class ChangeTokenCall extends ethereum.Call {
  get inputs(): ChangeTokenCall__Inputs {
    return new ChangeTokenCall__Inputs(this);
  }

  get outputs(): ChangeTokenCall__Outputs {
    return new ChangeTokenCall__Outputs(this);
  }
}

export class ChangeTokenCall__Inputs {
  _call: ChangeTokenCall;

  constructor(call: ChangeTokenCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeTokenCall__Outputs {
  _call: ChangeTokenCall;

  constructor(call: ChangeTokenCall) {
    this._call = call;
  }
}

export class ClaimCall extends ethereum.Call {
  get inputs(): ClaimCall__Inputs {
    return new ClaimCall__Inputs(this);
  }

  get outputs(): ClaimCall__Outputs {
    return new ClaimCall__Outputs(this);
  }
}

export class ClaimCall__Inputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class ClaimCall__Outputs {
  _call: ClaimCall;

  constructor(call: ClaimCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyTokenWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyTokenWithdrawCall__Inputs {
    return new EmergencyTokenWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyTokenWithdrawCall__Outputs {
    return new EmergencyTokenWithdrawCall__Outputs(this);
  }
}

export class EmergencyTokenWithdrawCall__Inputs {
  _call: EmergencyTokenWithdrawCall;

  constructor(call: EmergencyTokenWithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmergencyTokenWithdrawCall__Outputs {
  _call: EmergencyTokenWithdrawCall;

  constructor(call: EmergencyTokenWithdrawCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawERC20Call extends ethereum.Call {
  get inputs(): EmergencyWithdrawERC20Call__Inputs {
    return new EmergencyWithdrawERC20Call__Inputs(this);
  }

  get outputs(): EmergencyWithdrawERC20Call__Outputs {
    return new EmergencyWithdrawERC20Call__Outputs(this);
  }
}

export class EmergencyWithdrawERC20Call__Inputs {
  _call: EmergencyWithdrawERC20Call;

  constructor(call: EmergencyWithdrawERC20Call) {
    this._call = call;
  }
}

export class EmergencyWithdrawERC20Call__Outputs {
  _call: EmergencyWithdrawERC20Call;

  constructor(call: EmergencyWithdrawERC20Call) {
    this._call = call;
  }
}

export class RecoverWrongTokensCall extends ethereum.Call {
  get inputs(): RecoverWrongTokensCall__Inputs {
    return new RecoverWrongTokensCall__Inputs(this);
  }

  get outputs(): RecoverWrongTokensCall__Outputs {
    return new RecoverWrongTokensCall__Outputs(this);
  }
}

export class RecoverWrongTokensCall__Inputs {
  _call: RecoverWrongTokensCall;

  constructor(call: RecoverWrongTokensCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RecoverWrongTokensCall__Outputs {
  _call: RecoverWrongTokensCall;

  constructor(call: RecoverWrongTokensCall) {
    this._call = call;
  }
}

export class RemoveAdminCall extends ethereum.Call {
  get inputs(): RemoveAdminCall__Inputs {
    return new RemoveAdminCall__Inputs(this);
  }

  get outputs(): RemoveAdminCall__Outputs {
    return new RemoveAdminCall__Outputs(this);
  }
}

export class RemoveAdminCall__Inputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }

  get _RemoveAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RemoveAdminCall__Outputs {
  _call: RemoveAdminCall;

  constructor(call: RemoveAdminCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetEmergencyCall extends ethereum.Call {
  get inputs(): SetEmergencyCall__Inputs {
    return new SetEmergencyCall__Inputs(this);
  }

  get outputs(): SetEmergencyCall__Outputs {
    return new SetEmergencyCall__Outputs(this);
  }
}

export class SetEmergencyCall__Inputs {
  _call: SetEmergencyCall;

  constructor(call: SetEmergencyCall) {
    this._call = call;
  }

  get _status(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetEmergencyCall__Outputs {
  _call: SetEmergencyCall;

  constructor(call: SetEmergencyCall) {
    this._call = call;
  }
}

export class SetMaxTotalStakeCall extends ethereum.Call {
  get inputs(): SetMaxTotalStakeCall__Inputs {
    return new SetMaxTotalStakeCall__Inputs(this);
  }

  get outputs(): SetMaxTotalStakeCall__Outputs {
    return new SetMaxTotalStakeCall__Outputs(this);
  }
}

export class SetMaxTotalStakeCall__Inputs {
  _call: SetMaxTotalStakeCall;

  constructor(call: SetMaxTotalStakeCall) {
    this._call = call;
  }

  get _maxTotalStake(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMaxTotalStakeCall__Outputs {
  _call: SetMaxTotalStakeCall;

  constructor(call: SetMaxTotalStakeCall) {
    this._call = call;
  }
}

export class SetMinMaxDepositCall extends ethereum.Call {
  get inputs(): SetMinMaxDepositCall__Inputs {
    return new SetMinMaxDepositCall__Inputs(this);
  }

  get outputs(): SetMinMaxDepositCall__Outputs {
    return new SetMinMaxDepositCall__Outputs(this);
  }
}

export class SetMinMaxDepositCall__Inputs {
  _call: SetMinMaxDepositCall;

  constructor(call: SetMinMaxDepositCall) {
    this._call = call;
  }

  get _min(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _max(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetMinMaxDepositCall__Outputs {
  _call: SetMinMaxDepositCall;

  constructor(call: SetMinMaxDepositCall) {
    this._call = call;
  }
}

export class SetNoWithdrawFeeTimeCall extends ethereum.Call {
  get inputs(): SetNoWithdrawFeeTimeCall__Inputs {
    return new SetNoWithdrawFeeTimeCall__Inputs(this);
  }

  get outputs(): SetNoWithdrawFeeTimeCall__Outputs {
    return new SetNoWithdrawFeeTimeCall__Outputs(this);
  }
}

export class SetNoWithdrawFeeTimeCall__Inputs {
  _call: SetNoWithdrawFeeTimeCall;

  constructor(call: SetNoWithdrawFeeTimeCall) {
    this._call = call;
  }

  get _duration(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetNoWithdrawFeeTimeCall__Outputs {
  _call: SetNoWithdrawFeeTimeCall;

  constructor(call: SetNoWithdrawFeeTimeCall) {
    this._call = call;
  }
}

export class SetPenaltyWalletCall extends ethereum.Call {
  get inputs(): SetPenaltyWalletCall__Inputs {
    return new SetPenaltyWalletCall__Inputs(this);
  }

  get outputs(): SetPenaltyWalletCall__Outputs {
    return new SetPenaltyWalletCall__Outputs(this);
  }
}

export class SetPenaltyWalletCall__Inputs {
  _call: SetPenaltyWalletCall;

  constructor(call: SetPenaltyWalletCall) {
    this._call = call;
  }

  get _penaltyWallet(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetPenaltyWalletCall__Outputs {
  _call: SetPenaltyWalletCall;

  constructor(call: SetPenaltyWalletCall) {
    this._call = call;
  }
}

export class SetRewardDistributionAddressCall extends ethereum.Call {
  get inputs(): SetRewardDistributionAddressCall__Inputs {
    return new SetRewardDistributionAddressCall__Inputs(this);
  }

  get outputs(): SetRewardDistributionAddressCall__Outputs {
    return new SetRewardDistributionAddressCall__Outputs(this);
  }
}

export class SetRewardDistributionAddressCall__Inputs {
  _call: SetRewardDistributionAddressCall;

  constructor(call: SetRewardDistributionAddressCall) {
    this._call = call;
  }

  get _rewardDistributionAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetRewardDistributionAddressCall__Outputs {
  _call: SetRewardDistributionAddressCall;

  constructor(call: SetRewardDistributionAddressCall) {
    this._call = call;
  }
}

export class SetWithdrawFeeParamCall extends ethereum.Call {
  get inputs(): SetWithdrawFeeParamCall__Inputs {
    return new SetWithdrawFeeParamCall__Inputs(this);
  }

  get outputs(): SetWithdrawFeeParamCall__Outputs {
    return new SetWithdrawFeeParamCall__Outputs(this);
  }
}

export class SetWithdrawFeeParamCall__Inputs {
  _call: SetWithdrawFeeParamCall;

  constructor(call: SetWithdrawFeeParamCall) {
    this._call = call;
  }

  get _a(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _b(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _c(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetWithdrawFeeParamCall__Outputs {
  _call: SetWithdrawFeeParamCall;

  constructor(call: SetWithdrawFeeParamCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
