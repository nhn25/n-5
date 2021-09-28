const { body, validationResult } = require('express-validator');

app.post(
  '/',
  body('username').isEmail(),
  body('password').isLength({ min: 5 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.check.username,
      password: req.check.password,
    }).then(user => res.json(user));
  },
);