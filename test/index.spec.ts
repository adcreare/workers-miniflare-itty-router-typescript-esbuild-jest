import handleRequest from "@/index";

// Now passes 👍
test("should redirect to example page on no route match", async () => {
  const result = handleRequest.fetch;
  if (!result) {
    throw new Error();
  }
  const env = getMiniflareBindings();
  const res = await result(new Request("http://localhost"), env, {
    waitUntil: () => {},
    passThroughOnException: () => {},
  });
  expect(res.status).toBe(200);
  expect(await res.text()).toContain("OK");
});
