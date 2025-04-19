import passport from 'passport';
import { Strategy as JWTstrategy, ExtractJwt as ExtractJWT } from 'passport-jwt';
import 'dotenv/config'; 

passport.use(
  new JWTstrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
    },
    async (token, done) => {
      try {
        return done(null, token);
      } catch (error) {
        done(error);
      }
    }
  )
);

export default passport;