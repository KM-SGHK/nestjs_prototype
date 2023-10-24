import { Injectable } from '@nestjs/common';
import { UserPreference } from './interfaces/userPreference';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';

@Injectable()
export class UserPreferenceService {
  private userPreference: UserPreference[] = [
    {
      userId: 1,
      important: 1,
      promotion: 1,
      kdp_marketing: 0,
      kdp_partner_marketing: 1,
    },
    {
      userId: 2,
      important: 1,
      promotion: 1,
      kdp_marketing: 1,
      kdp_partner_marketing: 0,
    },
  ];
  getUserPreference(id: number): UserPreference {
    const selectedUserPreference: UserPreference = this.userPreference.find(
      (data) => data.userId == id,
    );
    return selectedUserPreference;
  }

  insertUserPreference(
    userPreference: CreateUserPreferenceDto,
  ): CreateUserPreferenceDto {
    return userPreference;
  }
}
