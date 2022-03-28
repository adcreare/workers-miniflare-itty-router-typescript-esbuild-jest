import { Router, Route, Request } from "itty-router";

interface IMethods {
  get: Route;
  post: Route;
  puppy: Route;
}

const router = Router<Request, IMethods>();

router.all("*", (request) => new Response("OK", { status: 200 }));

// export async function handleRequest(request: Request, env: Bindings) {

//   return ;
// }

const worker: ExportedHandler<Bindings> = { fetch: router.handle };

export default worker;
