import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { GraphQLDateTime } from 'graphql-iso-date';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { AuthMiddleware } from './auth/auth.middleware';

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
      context: ({ req, res }) => {
        return {
          req,
          res,
        };
      },
    }),
    PostModule,
    CommentModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('cats');
  }
}
