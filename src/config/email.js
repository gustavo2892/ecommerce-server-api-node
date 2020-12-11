export default {
  host: 'smtp.gmail.com',
  port: 465,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL,
  },
};
