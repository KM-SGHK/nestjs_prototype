import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserPreferenceController } from './user_preference/user_preference.controller';
import { UserPreferenceModule } from './user_preference/user_preference.module';
import { UserPreferenceService } from './user_preference/user_preference.service';

@Module({
  imports: [UserPreferenceModule],
  controllers: [AppController, UserPreferenceController],
  providers: [AppService, UserPreferenceService],
})
export class AppModule {}
