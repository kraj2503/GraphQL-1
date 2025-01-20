export const typeDefs = `#graphql
type Game{
        id:ID!
        title:String!
        platform:[String!]!
        reviews: [Review!]


}
type Review{
        id :ID!
        rating:Int!
        content: String!
        game:Game!
        author:Author!
}
type Author{
        id:ID!
        name:String!
        verified:String!
        review:[Review!]
}



type Query{
        reviews:[Review]
        review(id:ID!):Review
        games: [Game]
        game(id:ID!):Game
        authors:[Author]
        author(id:ID!):Author
}

type Mutation{
        deleteGame(id:ID!):[Game]
        addGame(game:AddGameInput):Game
        updateGame(id:ID!,edits:editGameInputs):Game
}

input AddGameInput{
        title:String!,
        platform: [String!]!
}
input editGameInputs{
        title:String
        platform: [String!]!
}

`