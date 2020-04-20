import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './components/auth/auth.module';
import { WidgetsModule } from './components/widgets/widgets.module';
import { TeamsModule } from './components/teams/teams.module';

import config from './config/env';


@Module({
  imports: [
    MongooseModule.forRoot(
      config.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    AuthModule,
    WidgetsModule,
    TeamsModule
  ],
})
export class AppModule { }