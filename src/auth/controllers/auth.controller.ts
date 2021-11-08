import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';
import { User } from 'src/user/model/user.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('user'))
  @Post('login/user')
  loginUser(@Req() req: Request) {
    const user = req.user as User;
    return this.authService.generateUserJWT(user);
  }
}
