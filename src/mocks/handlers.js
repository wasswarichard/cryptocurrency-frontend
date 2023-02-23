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
      const request = req.body;
      const { email, firstName, lastName } = await users
         .getValue()
         ?.filter((user) => user.password === request.password && user.email === request.email)[0];
      return res(
         ctx.json({
            email,
            firstName,
            lastName,
         })
      );
   }),
];
