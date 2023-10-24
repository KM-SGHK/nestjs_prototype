import { Module } from '@nestjs/common';
import { UserPreferenceService } from './user_preference.service';

@Module({
  providers: [UserPreferenceService],
})
export class UserPreferenceModule {}
