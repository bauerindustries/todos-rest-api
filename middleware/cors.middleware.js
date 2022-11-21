function enablecCors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_DOMAINS);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

module.exports = enablecCors;
