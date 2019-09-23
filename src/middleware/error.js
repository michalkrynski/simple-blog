export function notFound(req, res, next) {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
}

export function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
}

export function catchAsync(fn) {
  return (req, res, next) => {
    fn(req, res, next).cach(err => next(err));
  }
}