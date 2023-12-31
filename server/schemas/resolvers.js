const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        getSingleUser: async (parent, { username }) => {
            return User.findOne({ username })
        },
    },

    Mutation: {
        createUser: async (parent, { input }) => {
            const { username, email, password } = input;
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        saveBook: async (parent, { input }) => {
            const { userID, authors, description, bookId, image, link, title } = input;
            return User.findOneAndUpdate(
                { _id: userID },
                {
                    $addToSet: { savedBooks: { authors, description, bookId, image, link, title }}
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        deleteBook: async (parent, { userID, bookID }) => {
            return User.findOneAndUpdate(
                { _id: userID },
                { $pull: { books: { _id: bookID } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;

