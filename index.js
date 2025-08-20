import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";

import db from "./db.js";

const resolvers = {
    Query : {
        games() {
            return db.games;
        },
           game(_, args) {
            return db.games.find((game) => game.id === args.id)
        },
        reviews() {
            return db.reviews;
        },
           review(_, args) {
            return db.reviews.find((review) => review.id === args.id)
        },
        authors(){
            return db.authors;
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id)
        }
    },
    Game : {
        reviews(parent){
            return db.reviews.filter((r) => r.game_id === parent.id);
        }
    },
    Author : {
        reviews(parent){
            return db.reviews.filter((r) =>r.author_id === parent.id);
        }
    },
    Review :{
        game(parent) {
            //find because each single review is associated with each single game and author
            return db.games.find((g) => g.id === parent.game_id);
        },
        author(parent){
            return db.authors.find((a) => a.id === parent.author_id)
        }
    },
    Mutation : {
        deleteGame(_, args){
            db.games = db.games.filter((g) => g.id !== args.id)
            return db.games
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