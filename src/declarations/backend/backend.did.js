export const idlFactory = ({ IDL }) => {
  const Schedule = IDL.Record({
    'day' : IDL.Text,
    'startTime' : IDL.Int,
    'endTime' : IDL.Int,
    'description' : IDL.Text,
  });
  return IDL.Service({
    'addSchedule' : IDL.Func([IDL.Text, IDL.Int, IDL.Int, IDL.Text], [], []),
    'clearSchedules' : IDL.Func([], [], []),
    'getSchedules' : IDL.Func([], [IDL.Vec(Schedule)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
