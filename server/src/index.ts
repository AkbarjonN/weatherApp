
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

dotenv.config();

const PORT = process.env.PORT || 10000; 
const FRONTEND_URL =
  process.env.FRONTEND_URL || "https://weather-app-murex-tau-18.vercel.app";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: FRONTEND_URL,
    credentials: true,
  },
  persistedQueries: false,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 GraphQL Server running at ${url}`);
});

