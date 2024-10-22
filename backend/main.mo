import Text "mo:base/Text";

import Array "mo:base/Array";
import Time "mo:base/Time";
import Int "mo:base/Int";

actor SkatingRink {
  type Schedule = {
    day: Text;
    startTime: Int;
    endTime: Int;
    description: Text;
  };

  stable var schedules: [Schedule] = [];

  public func addSchedule(day: Text, startTime: Int, endTime: Int, description: Text) : async () {
    let newSchedule: Schedule = {
      day = day;
      startTime = startTime;
      endTime = endTime;
      description = description;
    };
    schedules := Array.append(schedules, [newSchedule]);
  };

  public query func getSchedules() : async [Schedule] {
    return schedules;
  };

  public func clearSchedules() : async () {
    schedules := [];
  };
}
