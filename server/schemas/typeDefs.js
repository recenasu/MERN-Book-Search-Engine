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
    authors: String!
    description: String!
    bookId: String!
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

input CreateUserInput {
    username: String!
    email: String!
    password: String!
}

input SaveBookInput {
    userID: ID!
    authors: String!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Mutation {
    createUser(input: CreateUserInput!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: SaveBookInput!): User
    deleteBook(userID: ID!, bookID: String!): User
}
`;

module.exports = typeDefs;


