function options(root, args, context, info) {
    return context.db.query.options({}, info);
}

module.exports = { options }