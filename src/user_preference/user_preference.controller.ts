import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserPreferenceDto } from './dto/create-user-preference.dto';
import { getUserId } from 'src/util/user_preference';
import { UserPreferenceService } from './user_preference.service';
import { UserPreference } from './interfaces/userPreference';

@Controller('user_preference')
export class UserPreferenceController {
  constructor(private userPreferenceService: UserPreferenceService) {}

  @Post()
  create(
    @Body() createUserPreferenceDto: CreateUserPreferenceDto,
  ): CreateUserPreferenceDto {
    return this.userPreferenceService.insertUserPreference(
      createUserPreferenceDto,
    );
  }

  @Get(':kdp_member_number')
  findOne(@Param('kdp_member_number') kdpMemberNumber): UserPreference {
    const id: number = getUserId(kdpMemberNumber);
    return this.userPreferenceService.getUserPreference(id);
  }
}
