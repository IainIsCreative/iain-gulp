/**
 * Wrap our current env in a variable for easy reference in tasks later.
 */

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

export default env;
