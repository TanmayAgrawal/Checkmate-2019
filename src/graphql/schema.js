const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');


const typeDefs = `
	type Team{
	    username : String!
	    score : Int!
	    x_coordinate : Float!
	    y_coordinate : Float!
	}
	type Question{
	    _id : ID!
	    question : String!
	    score_increment : Int!
	    score_decrement : Int!
	}
	type Query{
	    info : Team
	    allTeams: [Team]
	    allQuestions : [Question]
	}
    input TeamInput{
        username : String!
        password : String!
        id_1 : String!
        id_2 : String
	}
	type Mutation{
	    register (input : TeamInput ) : String
	    login (username : String!, password : String!) : String
	    logout : Int
	}
` ;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});


module.exports = schema;
