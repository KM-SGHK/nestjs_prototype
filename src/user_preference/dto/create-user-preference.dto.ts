export class CreateUserPreferenceDto {
  'kdp_member_number': number;
  'preference': {
    important: number;
    promotion: number;
    kdp_marketing: number;
    kdp_partner_marketing: number;
  };
}
