const request = require("supertest");
const app = require("./index");

let server;

beforeAll(() => {
  server = app.listen(0); // start server on a random port
});

afterAll((done) => {
  server.close(done); // close server after tests
});

test("GET / should return hello with app name", async () => {
  const res = await request(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe(`Hello from ${process.env.APP_NAME}!`);
});
