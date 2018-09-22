const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')
const { prismaSecret } = require('./config/auth');

const resolvers = {
    Query,
    Mutation,
    AuthPayload
};

const server = new GraphQLServer({
    typeDefs: 'backend/schemas/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs: 'backend/schemas/prisma.graphql',
            endpoint: 'https://eu1.prisma.sh/philip-ekblom-aeae38/pricerunner-planning/dev',
            secret: prismaSecret,
            debug: true,
        })
    })
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
