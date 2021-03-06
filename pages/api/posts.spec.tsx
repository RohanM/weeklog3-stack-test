import Posts from './posts'

import httpMocks from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next'


describe("posts API", () => {
  describe("create post", () => {
    it("creates a post", async () => {
      const req = httpMocks.createRequest<NextApiRequest>({
        method: "POST",
        body: {
          author: "author",
          message: "message"
        },
      });
      const res = httpMocks.createResponse<NextApiResponse>();

      await Posts(req, res);

      expect(res.statusCode).toEqual(200);
      expect(res._getJSONData()).toMatchObject({
        post: {
          id: expect.any(Number),
          author: "author",
          message: "message",
          createdAt: expect.any(String),
        },
      });
    });

    describe("when invalid parameters are passed", () => {
      it("responds with an error", async () => {
        const req = httpMocks.createRequest<NextApiRequest>({
          method: "POST",
          body: {
            id: 123,
            author: "author",
            message: "message",
            createdAt: "1111-11-11",
            haha: "lol",
          },
        });
        const res = httpMocks.createResponse<NextApiResponse>();

        await Posts(req, res);

        expect(res.statusCode).toEqual(422);
      });
    });
  });
});
