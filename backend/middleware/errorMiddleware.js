const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next();
};

const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message,
    stack: process.env.NODE_ENV == "development" ? err.stack : null
  });
};

export { notFound, errorHandler };
