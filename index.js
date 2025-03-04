import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from './db.js'
//server-setup
import { typeDefs } from "./schema.js";
import { addSyntheticLeadingComment } from "typescript";



const resolvers = {
        Query: {
                games() {
                        return db.games
                },
                game(_, args) {
                        console.log(args)
                        let a = db.games.find((game) => game.id === args.id)
                        console.log(a)
                        return a
                },
                reviews() {

                        return db.reviews
                },
                authors() {
                        return db.authors
                },
                author(_,args) {
                        return db.authors.find((author) => author.id === args.id)
                },
                review(_, args) {

                        return db.reviews.find((review) => review.id === args.id)
                }
        },
        Game: {
                reviews(parent) {
                        console.log("inside game game")
                        const b = db.reviews.filter((r) => r.game_id === parent.id)
                        console.log("b ", b)
                        return b
                },
        },
        Review: {

                author(parent) {
                        console.log("Inside parent", parent)
                        console.log()
                        const c = db.authors.find((r) => r.id === parent.author_id)
                        return c
                },
                game(parent){
                        const c = db.games.find((r) => r.id === parent.game_id)
                        return c
                }
        },
        Author: {
                review(parent) {
                        const b = db.reviews.filter((r) => r.author_id === parent.id)
                        console.log("author id ", b)
                        return b

                }
        },
        Mutation:{
                deleteGame(_,args){
                        db.games= db.games.filter((game)=>game.id!=args.id)
                        return db.games
                }, 
                addGame(_,args){
                        console.log(args.game)

                       let game = {
                               id:Math.floor(Math.random()*10000).toString(),
                        ...args.game
                       }
                      db.games.push(game)
                       console.log(game)
                       return game
                },
                updateGame(_,args){
                        db.games = db.games.map((g)=>{
                                if(g.id === args.id){
                                        return {...g, ...args.edits}
                                }
                                return g
                        })
                        return db.games.find((g)=>g.id===args.id)
                }
        }
}


const server = new ApolloServer({
                typeDefs, resolvers

        })

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
console.log("url ", url)
console.log(
                'server ready at port 4000'
        );