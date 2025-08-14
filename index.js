import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

const server = new ApolloServer({
    //typedefs
    typeDefs,
    //resolvers
})

const {url} = await startStandaloneServer(server, {
    listen : {port : 4000}
})

console.log(`server is listening on port 4000`);