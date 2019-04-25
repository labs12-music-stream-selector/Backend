const db = require("../dbConfig.js");

describe("migrations - users", () => {
  afterEach(async () => {
    await db("users").truncate();
  });

  it("creates new user with required values", async () => {
    await db("users").insert({ username: "testName", password: "testPass" });

    const testUser = await db("users").first();
    expect(testUser).toEqual({
      id: 1,
      username: "testName",
      password: "testPass",
      email: null,
      patreon_support: 0
    });
  });

  it("creates new user with required and optional values", async () => {
    await db("users").insert({
      username: "testName",
      password: "testPass",
      email: "someone@something.com",
      patreon_support: 1
    });

    const testUser = await db("users").first();
    expect(testUser).toEqual({
      id: 1,
      username: "testName",
      password: "testPass",
      email: "someone@something.com",
      patreon_support: 1
    });
  });

  // Failure tests
  it("No username", async () => {
    try {
      await db("users").insert({
        password: "testPass",
        email: "someone@something.com",
        patreon_support: 1
      });
    } catch (err) {}

    const testUser = await db("users");
    expect(testUser).toHaveLength(0);
  });

  it("No password", async () => {
    try {
      await db("users").insert({
        username: "testName",
        email: "someone@something.com",
        patreon_support: 1
      });
    } catch (err) {}

    const testUser = await db("users");
    expect(testUser).toHaveLength(0);
  });
});
