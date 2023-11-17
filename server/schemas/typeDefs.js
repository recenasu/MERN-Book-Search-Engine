const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
}

type Book {
    _id: ID
    description: String!
    bookID: String!
    image: String
    link: String
    title: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    getSingleUser(username: String!): User
}

type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(userID: ID!, description: String!, bookID: String!, image: String, link: String, title: String!): User
    deleteBook(userID: ID!, bookID: String!): User
}
`;

module.exports = typeDefs;


