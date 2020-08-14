import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Middleware } from 'src/middlewares/middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule implements NestModule {
  configure(mc: MiddlewareConsumer) {
      mc.apply(Middleware)
      // to remove particular route with method type
      .exclude(
        {
          path: 'user', method: RequestMethod.GET
        }
      )
      .forRoutes('user' /* you can write user Controller for all routes of user*/)
  }
}
