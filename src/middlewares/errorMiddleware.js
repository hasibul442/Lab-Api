// ✅ Handle non-existent routes (404)
export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found - ${req.originalUrl}`,
    path: req.originalUrl,
  });
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: err.stack,
  });
};

export default { notFound, errorHandler };