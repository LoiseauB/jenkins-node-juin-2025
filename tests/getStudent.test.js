const request = require("supertest");
const  app  = require("../app");

describe("GET /student/:id", function () {
  it("responds with name, age, id", function (done) {
    request(app)
      .get("/student/1")
      .set("Accept", "application/json")
      .expect(200, { id: 1, name: "Alain", age: 22 }, done);
  });
});
