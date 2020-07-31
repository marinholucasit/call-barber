import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'userTeste',
    email: 'teste@email.com.br',
    password_hash: '123456789',
    provider: false,
  });

  return res.json(user);
});

export default routes;
