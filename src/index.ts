import bot from "./bot";
import commands from "./registerCommands";

addEventListener("fetch", async (event: FetchEvent) => {
  let url = new URL(event.request.url);
  if (url.pathname === "/register") {
    event.respondWith(
      new Response(JSON.stringify(await commands()), {
        headers: { "content-type": "application/json" },
      })
    );
  } else {
    event.respondWith(bot(event.request));
  }
});
