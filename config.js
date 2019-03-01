exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;
exports.DATABASE_URL = process.env.DATABASE_URL || `mongodb://${process.env.SECRET_DB_USER}:${process.env.SECRET_DB_PS}@ds155845.mlab.com:55845/flexnotedb`;
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-flex-note';
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

