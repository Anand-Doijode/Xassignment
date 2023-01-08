module.exports = {
  createJob: {
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
  },

  getJobById: {
    id: {
      in: ['params'],
      isMongoId: true,
      trim: true,
    },
  },

  getJob: {
    title: {
      in: ['query'],
      optional: true,
      isString: true,
      trim: true,
    },
    description: {
      in: ['query'],
      optional: true,
      isString: true,
      trim: true,
    },
    email: {
      in: ['query'],
      optional: true,
      isEmail: true,
    },
    requiredSkills: {
      in: ['query'],
      optional: true,
    },
    expLevel: {
      in: ['query'],
      optional: {
        bail: true,
      },
      custom: {
        options: async (value) => {
          const expLevels = value.split(',');
          expLevels.forEach((exp) => {
            console.log(`Number.isNaN(${exp}): ${Number.isNaN(exp)}`);
            if (isNaN(exp)) {
              throw new Error('Invalid value');
            }
          });
          return true;
        },
      },
    },
  },
};
