import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { GraphQLDateTime } from 'graphql-iso-date';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: false,
      resolvers: { DateTime: GraphQLDateTime },
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    PostModule,
    CommentModule,
  ],
})
export class AppModule {}
