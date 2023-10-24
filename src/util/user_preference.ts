interface UserIdMapping {
  id: number;
  kdp_member_number: number;
}

const userIdMapping: UserIdMapping[] = [
  {
    id: 1,
    kdp_member_number: 1234,
  },
  {
    id: 2,
    kdp_member_number: 2234,
  },
  {
    id: 3,
    kdp_member_number: 3234, // for testing the case in which no preference record linked to the id
  },
];

export function getUserId(kdpMemberNumber: number): number {
  const user: UserIdMapping = userIdMapping.find(
    (userId) => userId.kdp_member_number == kdpMemberNumber,
  );
  return user.id;
}
