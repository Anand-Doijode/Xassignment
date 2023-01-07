class StandardResponse {
  static success(res, data) {
    const response = {
      error: null,
      data: { ...data },
    };
    res.status(200).json(response);
  }

  static failure(res, error, code = 400) {
    const response = {
      error: { ...error },
      data: null,
    };
    return res.status(code).json(response);
  }
}

module.exports = StandardResponse;
