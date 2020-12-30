import NextAuth from "next-auth";
import Providers from "next-auth/providers";
// import { createUser } from "../../../lib/db";
const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    Providers.Twitch({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET,
    }),
  ],
  events: {
    signIn: async (message) => {
      createUser(message.account.id, message.user);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
