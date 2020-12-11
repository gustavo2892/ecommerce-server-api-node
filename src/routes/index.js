import { Router } from 'express';

import routes from './api/v1';

const router = new Router();

router.use('/v1/api', routes);
router.get('/', (req, res, next) => res.send({ ok: true }));

router.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors, key) => {
        errors[key] = err.errors[key.message];
        return errors;
      }, {}),
    });
  }
});

export default router;
