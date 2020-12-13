import { Router } from 'express';
import auth from '../../auth';
import UserController from '../../../controllers/UserController';

const router = new Router();
const userController = new UserController();

router.get('/', auth.required, userController.index);
router.get('/:id', auth.required, userController.show);

router.post('/login', userController.login);
router.post('/register', userController.store);
router.put('/', auth.required, userController.update);
router.delete('/', auth.required, userController.remove);

router.get('/password-recovery', userController.showRecovery);
router.post('/password-recovery', userController.createRecovery);
router.get('/recovered-password', userController.showCompleteRecovery);
router.post('/recovered-password', userController.completeRecovery);

export default router;
