function polls(root, args, context, info) {
    return context.db.query.polls({}, info);
}

function users(root, args, context, info) {
    return context.db.query.users({}, info);
}

module.exports = { polls, users }