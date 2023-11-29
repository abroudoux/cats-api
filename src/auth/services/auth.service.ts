// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';

// import { User } from '@/users/models/user.model';
// import { SignUpDto } from '@/auth/dto/signup.dto';
// import { LoginDto } from '@/auth/dto/login.dto';


// @Injectable()
// export class AuthService {

//     constructor(
//         @InjectModel(User.name)
//         private userModel: Model<User>,
//         private jwtService: JwtService
//     ) {}

//     async signUp(signUpDto : SignUpDto) : Promise<{ token : string }> {
//         const { name, email, password } = signUpDto;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = await this.userModel.create({
//             name,
//             email,
//             password : hashedPassword,
//         });

//         const token = this.jwtService.sign({ id: user._id });

//         return { token };
//     };

//     async logIn(logInDto : LoginDto) : Promise<{ token : string }> {
//         const { email, password } = logInDto;

//         const user = await this.userModel.findOne({ email });

//         if (!user) {
//             throw new UnauthorizedException('Invalid email or password');
//         };

//         const isPasswordMatched = await bcrypt.compare(password, user.password);

//         if (!isPasswordMatched) {
//             throw new UnauthorizedException('Invalid password');
//         };

//         const token = this.jwtService.sign({ id : user._id });

//         return { token };
//     };

// };