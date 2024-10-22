import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Schedule {
  'day' : string,
  'startTime' : bigint,
  'endTime' : bigint,
  'description' : string,
}
export interface _SERVICE {
  'addSchedule' : ActorMethod<[string, bigint, bigint, string], undefined>,
  'clearSchedules' : ActorMethod<[], undefined>,
  'getSchedules' : ActorMethod<[], Array<Schedule>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
