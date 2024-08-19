import { rest } from "msw";

export const handlers = [
  rest.get("https://dog.ceo/api/breeds/image/random", (req, res, ctx) => {
    return res(
      ctx.json({
        message: "https://images.dog.ceo/breeds/bulldog-english/mami.jpg",
      })
    );
  }),
];

import { setupServer } from "msw/node";
export const server = setupServer(...handlers);
