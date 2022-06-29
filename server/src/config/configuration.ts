export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 8080,
  },
  cilent: process.env.CLIENT || 'http://localhost:3000',
  auth: {
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET,
    github: {
      id: process.env.GITHUB_ID,
      secret: process.env.GITHUB_SECRET,
    },
    google: {
      id: process.env.GOOGLE_ID,
      secret: process.env.GOOGLE_SECRET,
    },
  },
});
