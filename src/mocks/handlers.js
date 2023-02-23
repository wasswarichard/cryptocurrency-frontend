import { rest } from 'msw';
import { LiveStorage } from '@mswjs/storage';

const users = new LiveStorage('user', []);

export const handlers = [
   rest.post('/api/user/create', (req, res, ctx) => {
      const { email, firstName, lastName, password } = req.body;
      users.update((prev) => prev.concat({ email, firstName, lastName, password }));
      return res(
         ctx.json({
            firstName,
            lastName,
            email,
         })
      );
   }),

   rest.post('/api/user/login', async (req, res, ctx) => {
      const { email, password } = req.body;
      const user = await users
         .getValue()
         ?.filter((user) => user.password === password && user.email === email)[0];
      if (!user) {
         return res(
            ctx.json({
               message: 'invalid credentials',
            })
         );
      }
      return res(
         ctx.json({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
         })
      );
   }),
];
