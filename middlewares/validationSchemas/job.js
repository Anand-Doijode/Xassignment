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
  experienceLevel: {
    in: ['body'],
    optional: true,
    isInt: true,
    toInt: true,
  },
};
