import app from "../index";
import supertest from "supertest";

describe("Test /pithys  CRUD APIs to mongoDb", () => {
  it(" GET /Pithys list all pithys", async () => {
    const result = await supertest(app).get("/pithy");
    expect(result.statusCode).toEqual(200);
  });
  it(" POST /pithys API create test Record", async () => {
    const result = await supertest(app)
        .post("/pithy")
        .send({
            longUrl:"longUrl TEST RECORD",
            shortUrl:"12345678"});
    expect(result.statusCode).toEqual(201);
  });
  it(" GET /pithys/shortId retrieve the test Record", async () => {
    const result = await supertest(app).get("/pithy/12345678");
    expect(result.statusCode).toEqual(200);
  });
  it(" GET /pithys/shortId check for 404 for a shortId that doesn't exist", async () => {
    const result = await supertest(app).get("/pithy/ABCDEFGD");
    expect(result.statusCode).toEqual(404);
  });
  it(" DELETE /pithys/shortId check for 200  for a shortId was deleted", async () => {
    const result = await supertest(app).delete("/pithy/12345678");
    expect(result.statusCode).toEqual(200);
  });
  it(" DELETE /pithys/shortId check for 404 for a shortId that doesn't exist", async () => {
    const result = await supertest(app).delete("/pithy/ABCDEFGD");
    expect(result.statusCode).toEqual(404);
  });
});
