const request = require("supertest");
const app = require("../app"); // sua app Express

describe("Teste de rota raiz", () => {
  it("Deve responder na rota /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Sistema de Denúncias Ambientais");
  });
});
