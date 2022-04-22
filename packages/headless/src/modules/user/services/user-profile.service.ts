import { HttpStatus, Injectable } from '@nestjs/common';
import { HelperService } from 'src/helper/helper.service';
import { UserRepository } from '../repository';

@Injectable()
export class UserProfileService {
  constructor(
    private userRepo: UserRepository,
    private helperService: HelperService,
  ) {}

  async getProfile(id: string) {
    const user = await this.userRepo.findById(id);
    if (!user) {
      return this.helperService.serviceResponse.errorResponse(
        'User not found.',
        null,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.helperService.serviceResponse.successResponse(
      user,
      HttpStatus.FOUND,
    );
  }
}
