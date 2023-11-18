import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String1!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook(
        $userID: ID!
        $authors: String!
        $description: String!
        $bookId: String!
        $image: String
        $link: String
        $title: String!
    )   {
        saveBook(
            userID: $userID
            authors: $authors
            description: $description
            bookId: $bookId
            image: $image
            link: $link
            title: $title
        )   {
            token
            user {
                _id
                username
                email
                password
                savedBooks {
                    _id
                    authors
                    description
                    bookId
                    image
                    link
                    title
                }
            }
        }
    }
`;

export const DELETE_BOOK = gql`
    mutation deleteBook(
        $userID: ID!
        $bookId: String!
    )   {
        deleteBook(
            userID: $userID
            bookId: $bookId
        )   {
            _id
            username
            email
            password
            savedBooks {
                _id
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

