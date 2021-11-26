import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { PayloadToken } from '../models/token.model';
import { User } from 'src/user/model/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    console.log(user);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (isMatch) {
        const { password, ...rta } = user.toJSON();
        return rta;
      }
    }
    return null;
  }

  generateUserJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    let useraux = {
      id: user.id,
      mail: user.mail,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: useraux,
    };
  }
}
