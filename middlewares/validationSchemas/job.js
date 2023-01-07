module.exports = {
  title: {
    in: ['body'],
    exists: true,
    isString: true,
    trim: true,
  },
  description: {
    in: ['body'],
    exists: true,
    isString: true,
    trim: true,
  },
  email: {
    in: ['body'],
    isEmail: true,
    normalizeEmail: true,
  },
  requiredSkills: {
    in: ['body'],
    optional: true,
    isArray: true,
  },
  expLevel: {
    in: ['body'],
    optional: true,
    isInt: {
      options: {
        min: 0,
        max: 10,
      },
    },
    toInt: true,
  },
};
