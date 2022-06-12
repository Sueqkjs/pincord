import {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
  InteractionResponseType,
} from "discord-api-types/v9";
import admin from "firebase-admin";

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const db = admin.firestore();

export default async function (
  interaction: APIApplicationCommandInteraction
): Promise<APIInteractionResponse> {
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: { content: "F" },
  };
}
