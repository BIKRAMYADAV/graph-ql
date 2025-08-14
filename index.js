import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

import db from "./db.js";

const resolvers = {
    Query : {
        games() {
            return db.games;
        },
        reviews() {
            return db.reviews;
        },
        authors(){
            return db.authors;
        }
    }
}

const server = new ApolloServer({
    //typedefs
    typeDefs,
    //resolvers
    resolvers
})

const {url} = await startStandaloneServer(server, {
    listen : {port : 4000}
})

console.log(`server is listening on port 4000`);