module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://192.168.0.22/api'),
  proxy: env.bool('IS_PROXIED', true),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '37797cc7f60dea92b4146933f951af71'),
    },
    url: env('PUBLIC_ADMIN_URL', 'http://192.168.0.22/dashboard'),
  },
});
