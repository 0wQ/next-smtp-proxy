module.exports = {
  // https://github.com/eleith/emailjs#new-smtpclientoptions
  user: 'test@outlook.com',
  password: 'password',
  host: 'smtp-mail.outlook.com',
  tls: {
    ciphers: 'SSLv3',
  },
  port: 587,
  timeout: 9500,
}