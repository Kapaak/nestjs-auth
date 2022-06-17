# Authentication API
- purpose of this app is to learn a way to validate user credentials in Nest.js

## steps

1. create new Nest.js app `nest new .`
2. install authentication library -> passport `yarn add @nestjs/passport passport passport-local`
  - depending on the authentication strategy (credentials / JWT) I need to import either `passport-local` or `passport-jwt` dependencies
3. install passport types `yarn add -D @types/passport-local`
4. generate AuthModule and Users
5. Users module logic
  - in this example I will hardcode some users instead of connecting to DB
  - I will export UsersService in the users.module to make it visible outside of the module
6. Auth module logic
  - will retrieve user and verify user and password
    - local.strategy file for a selected validation strategy (there are a lot of different strategies to validate user, e.g.       facebook, twitter, youtube ....) local is one of them
7. App controller routes
  - I will guard routes for unauthenticated users ("local" is a default name, that can be changed via @UseGuards("some-name"))


at this point I can send 
  `{"username":"Pavel", "password":"pass" }`
to http://localhost:3000/auth/login
and receive the user with his login

  - LocalAuthGuard and its local-auth.guard.ts is the only to not write ("local") for AuthGuard all over
