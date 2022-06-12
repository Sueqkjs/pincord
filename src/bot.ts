import { verify } from "./verify";
import { APIPingInteraction } from "discord-api-types/payloads/v9/_interactions/ping";
import {
  InteractionType,
  InteractionResponseType,
  APIInteractionResponse,
  APIApplicationCommandInteraction,
} from "discord-api-types/v9";
export default async function (request: Request): Promise<Response> {
  if (
    !request.headers.get("X-Signature-Ed25519") ||
    !request.headers.get("X-Signature-Timestamp") ||
    !(await verify(request))
  )
    return new Response("", { status: 401 });
  const interaction = (await request.json()) as
    | APIPingInteraction
    | APIApplicationCommandInteraction;
  if (interaction.type === InteractionType.Ping)
    return res({
      type: InteractionResponseType.Pong,
    });
  switch (interaction.data.name) {
    case "ping":
      return res({
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: "pong!",
        },
      });
    case "pin":
      ;
  }
  return res({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      content: "Hello",
      allowed_mentions: { parse: [] },
    },
  });
}

function res(interaction: APIInteractionResponse): Response {
  return new Response(JSON.stringify(interaction), {
    headers: { "content-type": "application/json" },
  });
}
