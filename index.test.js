const request = require("supertest");
const app = require("./index");

test("GET / should return hello with app name", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe(`Hello from ${process.env.APP_NAME}!`);
});
