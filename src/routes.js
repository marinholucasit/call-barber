import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMidd from './app/middlewares/auth';
import multerConfig from './config/multer';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMidd);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/file', upload.single('file'), FileController.store);

export default routes;
