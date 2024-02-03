import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { SignInResponse } from './dto/signInResponse';
import { JwtPayload } from './types/jwtPayload.type';
import { SignInInput } from './dto/signIn.input';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.getUser(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    } else {
      console.log('Password mismatch');
      return null;
    }
  }

  // AuthServiceクラス内
  async signIn(signInInput: SignInInput): Promise<SignInResponse> {
    const user = await this.validateUser(
      signInInput.email,
      signInInput.password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload: JwtPayload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
