// ✅ Handle non-existent routes (404)
export const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found - ${req.originalUrl}`,
    path: req.originalUrl,
  });
};