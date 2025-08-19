export const typeDefs = `#graphql
type Game {
    id: ID! 
    title: String! 
    platform: [String!]! 
    reviews: [Review!]
}
type Review {
    id: ID! 
    rating: Int! 
    content: String! 
    game: Game!
    author: Author
}
type Author {
    id: ID! 
    name: String! 
    verified: Boolean! 
    reviews: [Review!]
}
type Query {
    reviews : [Review]
    review(id:ID!): Review
    games : [Game]
    game(id:ID!) : Game 
    authors : [Author]
    author(id:ID!) : Author
}
`
//type query shows the entry point

//int, float, string, boolean, ID

/*
how to query :- 
query ReviewQuery($id: ID!) {
  review(id: $id) {
    rating,
    content
  }
}
*/ 

/*
nested query:
    query GameQuery($id: ID!) {
  game(id:$id){
    title,
    reviews {
      rating,
      content
    }
  }
}

nested chain of reviews:-
query GameQuery($id: ID!) {
  review(id:$id){
    rating,
    game{
      title,
      platform,
      reviews {
        rating
      }
    }
  }
}

*/ 