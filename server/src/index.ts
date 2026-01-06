// import { ApolloServer } from "apollo-server";
// import { typeDefs } from "./schema/typeDefs.js";
// import { resolvers } from "./schema/resolvers.js";

// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// });

// server.listen(4000).then(({ url }) => {
//   console.log(`🚀 GraphQL Server running at ${url}`);
// });
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

dotenv.config();

// Backend port va frontend URLni .env orqali olamiz
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || "*"; // * test uchun, lekin deployda frontend URL yozing

// Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: FRONTEND_URL,
    credentials: true,
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 GraphQL Server running at ${url}`);
});
