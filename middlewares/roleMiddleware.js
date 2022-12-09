module.exports = (roles) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (roles.inculudes(userRole)) {
        next();
    } else {
        return res.status(404).send('You cant do it');
    }
  };
};
