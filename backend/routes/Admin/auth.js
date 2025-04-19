// import express from 'express';
// import Admin from '../../models/Admin.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import 'dotenv/config';
// import validator from 'validator';
// import passport from 'passport';
// import { Strategy as JWTStrategy, ExtractJwt as ExtractJWT } from 'passport-jwt';
// import nodemailer from 'nodemailer';
// import ejs from 'ejs';
// import path from 'path';
// import { fileURLToPath } from 'url';


// const route = express.Router();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // Configure JWT Strategy
// passport.use(
//   new JWTStrategy(
//     {
//       secretOrKey: process.env.SECRET_KEY,
//       jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
//     },
//     async (token, done) => {
//       try {
//         const user = await Admin.findById(token._id);
//         if (!user) return done(null, false);
//         return done(null, user);
//       } catch (error) {
//         done(error);
//       }
//     }
//   )
// );

// // Configure Nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail', 
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Generate email verification token
// const generateEmailVerifyToken = (user) => {
//   return jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1d' });
// };

// // Send email function
// const sendEmail = async (emailData) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: emailData.email,
//     subject: emailData.subject,
//     html: emailData.html,
//     text: emailData.text,
//   };

//   return await transporter.sendMail(mailOptions);
// };

// // Login route
// route.post('/login', async (req, res) => {
//     const { username, password } = req.body || {};
  
//     try {
//       if (!req.body) {
//         return res.status(400).json('Request body is missing');
//       }
  
//       const user = await Admin.findOne({ username });
//       if (!user) {
//         return res.status(400).json('User not found');
//       }
  
//       const result = await bcrypt.compare(password, user.password);
//       if (!result) {
//         return res.status(400).json('Password do not match');
//       }
  
//       if (user.emailVerificationStatus !== 'verified') {
//         return res.status(403).json('Email not verified. Please verify your email before logging in.');
//       }
  
//       const token = generateAccessToken(user);
//       return res.status(200).json(token);
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json('Internal server error');
//     }
//   });

// // Register route with email verification
// route.post('/register', async (req, res) => {
//     try {
//       const { username, email, password } = req.body;
//       const clientUserAgent = req.headers['user-agent'];
  
//       const exists = await Admin.findOne({ email });
//       if (exists) {
//         return res.status(400).json('Email already exists.');
//       }
  
//       if (!validator.isEmail(email)) {
//         return res.status(400).json('Please enter a valid email');
//       }
//       if (password.length < 8) {
//         return res.status(400).json('Please enter a strong password (minimum 8 characters)');
//       }
  
//       const _user = {
//         username,
//         email,
//         password,
//         clientUserAgent,
//       };
  
//       const salt = await bcrypt.genSalt(10);
//       const hashPassword = await bcrypt.hash(_user.password, salt);
  
//       const newUser = new Admin({
//         username: _user.username,
//         email: _user.email,
//         password: hashPassword,
//         status: new Date(),
//       });
  
//       const user = await newUser.save();
  
//       const token = generateEmailVerifyToken(user);
//       const link = `${process.env.ADMIN_URL}/api/auth/verify-email/${token}`;
//       const adminUrl = process.env.ADMIN_URL;
  
//       ejs.renderFile(path.resolve(__dirname, '../../views/email-verification.ejs'), { username: _user.username, link, adminUrl }, async (err, data) => {
//         if (err) {
//           console.log('EJS Error:', err);
//           return res.status(500).json('Error generating email template');
//         }
  
//         const emailData = {
//           email: user.email,
//           subject: `${user.username}, Your email verification link is here.`,
//           html: data,
//           text: `${user.username}, Your email verification link is here.`,
//         };
  
//         try {
//           const resp = await sendEmail(emailData);
//           return res.status(200).json('Email verification link sent successfully on your email address.');
//         } catch (emailError) {
//           console.log('Email Error:', emailError);
//           return res.status(500).json('Failed to send verification email');
//         }
//       });
//     } catch (error) {
//       console.log('General Error:', error);
//       return res.status(500).json('Internal server error');
//     }
//   });


// // email verification token route
// route.get('/auth/verify-email/:token', async (req, res) => {
//     try {
//       const { _id, email } = jwt.verify(req.params.token, process.env.SECRET_KEY);
//       const user = await Admin.findByIdAndUpdate(
//         _id,
//         { emailVerificationStatus: 'verified', verifiedAt: new Date() },
//         { new: true }
//       );
//       if (!user || user.email !== email) {
//         return res.status(400).json('Invalid or expired token');
//       }
//       res.json({ success: true, message: 'Email verified successfully' });
//     } catch (error) {
//       console.log(error);
//       res.status(400).json('Invalid or expired token');
//     }
//   });

// // Change password route
// route.post('/change-password', passport.authenticate('jwt', { session: false }), async (req, res) => {
//   console.log('Request body:', req.body);
//   const { currentPassword, newPassword } = req.body || {};

//   try {
//     if (!req.body) {
//       return res.status(400).json('Request body is missing');
//     }

//     if (!currentPassword || !newPassword) {
//       return res.status(400).json('Current password and new password are required');
//     }

//     const user = await Admin.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json('User not found');
//     }

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json('Current password is incorrect');
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(newPassword, salt);

//     user.password = hashPassword;
//     await user.save();

//     return res.json({ success: true, message: 'Password changed successfully' });
//   } catch (error) {
//     console.log('Error during password change:', error);
//     if (!res.headersSent) {
//       return res.status(500).json({ success: false, message: 'Internal server error' });
//     }
//   }
// });

// // Generate JWT token
// const generateAccessToken = (user) => {
//   return jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1hr' });
// };

// export default route;


import express from 'express';
import Admin from '../../models/Admin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import validator from 'validator';
import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt as ExtractJWT } from 'passport-jwt';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

const route = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure JWT Strategy
passport.use(
  new JWTStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('Bearer'),
    },
    async (token, done) => {
      try {
        const user = await Admin.findById(token._id);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate email verification token
const generateEmailVerifyToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1d' });
};

// Generate remember token
const generateRememberToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, process.env.REMEMBER_SECRET_KEY || process.env.SECRET_KEY, { expiresIn: '7d' });
};

// Generate access token
const generateAccessToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '1hr' });
};

// Send email function
const sendEmail = async (emailData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: emailData.email,
    subject: emailData.subject,
    html: emailData.html,
    text: emailData.text,
  };

  return await transporter.sendMail(mailOptions);
};

// Login route
route.post('/login', async (req, res) => {
  const { username, password, rememberMe } = req.body || {};

  try {
    if (!req.body) {
      return res.status(400).json('Request body is missing');
    }

    const user = await Admin.findOne({ username });
    if (!user) {
      return res.status(400).json('User not found');
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json('Password do not match');
    }

    if (user.emailVerificationStatus !== 'verified') {
      return res.status(403).json('Email not verified. Please verify your email before logging in.');
    }

    const accessToken = generateAccessToken(user);

    let rememberToken = user.rememberToken; 
    if (rememberMe) {
      if (!rememberToken) {
        rememberToken = generateRememberToken(user);
        user.rememberToken = rememberToken;
        await user.save();
      }
    } else {
      user.rememberToken = undefined; 
      await user.save();
    }

    return res.status(200).json({ accessToken, rememberToken });
  } catch (error) {
    console.log(error);
    return res.status(500).json('Internal server error');
  }
});

// Register route with email verification
route.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const clientUserAgent = req.headers['user-agent'];

    const exists = await Admin.findOne({ email });
    if (exists) {
      return res.status(400).json('Email already exists.');
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json('Please enter a valid email');
    }
    if (password.length < 8) {
      return res.status(400).json('Please enter a strong password (minimum 8 characters)');
    }

    const _user = {
      username,
      email,
      password,
      clientUserAgent,
    };

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(_user.password, salt);

    const newUser = new Admin({
      username: _user.username,
      email: _user.email,
      password: hashPassword,
      status: new Date(),
    });

    const user = await newUser.save();

    const token = generateEmailVerifyToken(user);
    const link = `${process.env.ADMIN_URL}/api/auth/verify-email/${token}`;
    const adminUrl = process.env.ADMIN_URL;

    ejs.renderFile(path.resolve(__dirname, '../../views/email-verification.ejs'), { username: _user.username, link, adminUrl }, async (err, data) => {
      if (err) {
        console.log('EJS Error:', err);
        return res.status(500).json('Error generating email template');
      }

      const emailData = {
        email: user.email,
        subject: `${user.username}, Your email verification link is here.`,
        html: data,
        text: `${user.username}, Your email verification link is here.`,
      };

      try {
        const resp = await sendEmail(emailData);
        return res.status(200).json('Email verification link sent successfully on your email address.');
      } catch (emailError) {
        console.log('Email Error:', emailError);
        return res.status(500).json('Failed to generate verification email');
      }
    });
  } catch (error) {
    console.log('General Error:', error);
    return res.status(500).json('Internal server error');
  }
});

// Email verification token route
route.get('/auth/verify-email/:token', async (req, res) => {
  try {
    const { _id, email } = jwt.verify(req.params.token, process.env.SECRET_KEY);
    const user = await Admin.findByIdAndUpdate(
      _id,
      { emailVerificationStatus: 'verified', verifiedAt: new Date() },
      { new: true }
    );
    if (!user || user.email !== email) {
      return res.status(400).json('Invalid or expired token');
    }
    res.json({ success: true, message: 'Email verified successfully' });
  } catch (error) {
    console.log(error);
    res.status(400).json('Invalid or expired token');
  }
});

// Refresh token route for auto-login
route.post('/refresh', async (req, res) => {
  const { rememberToken } = req.body;

  if (!rememberToken) {
    return res.status(400).json('Remember token is required');
  }

  try {
    const decoded = jwt.verify(rememberToken, process.env.REMEMBER_SECRET_KEY || process.env.SECRET_KEY);
    const user = await Admin.findOne({ _id: decoded._id, rememberToken });

    if (!user) {
      return res.status(403).json('Invalid remember token');
    }

    const newRememberToken = generateRememberToken(user);
    const accessToken = generateAccessToken(user);


    user.rememberToken = newRememberToken;
    await user.save();

    return res.status(200).json({ accessToken, rememberToken: newRememberToken });
  } catch (error) {
    console.log(error);
    return res.status(403).json('Invalid or expired remember token');
  }
});

// Change password route
route.post('/change-password', passport.authenticate('jwt', { session: false }), async (req, res) => {
  console.log('Request body:', req.body);
  const { currentPassword, newPassword } = req.body || {};

  try {
    if (!req.body) {
      return res.status(400).json('Request body is missing');
    }

    if (!currentPassword || !newPassword) {
      return res.status(400).json('Current password and new password are required');
    }

    const user = await Admin.findById(req.user._id);
    if (!user) {
      return res.status(404).json('User not found');
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json('Current password is incorrect');
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashPassword;
    user.rememberToken = undefined; 
    await user.save();

    return res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    console.log('Error during password change:', error);
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
});

// Logout route
route.post('/logout', passport.authenticate('jwt', { session: false }), async (req, res) => {
  req.user.rememberToken = undefined;
  await req.user.save();
  return res.json({ success: true, message: 'Logged out successfully' });
});

export default route;