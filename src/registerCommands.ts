const commands = [
  {
    name: "ping",
    description: "Ping Pong",
  },
  {
    name: "pin",
    description: "Pin Message",
    description_localizations: {
      "ja": "メッセージをピン留めします。"
    }
  }
];

/*
[
  ["da", "Danish", "Dansk"],
  ["de", "German", "Deutsch"],
  ["en-GB", "English, UK", "English, UK"],
  ["en-US", "English, US", "English, US"],
  ["es-ES", "Spanish", "Español"],
  ["fr", "French", "Français"],
  ["hr", "Croatian", "Hrvatski"],
  ["it", "Italian", "Italiano"],
  ["lt", "Lithuanian", "Lietuviškai"],
  ["hu", "Hungarian", "Magyar"],
  ["nl", "Dutch", "Nederlands"],
  ["no", "Norwegian", "Norsk"],
  ["pl", "Polish", "Polski"],
  ["pt-BR", "Portuguese, Brazilian", "Português do Brasil"],
  ["ro", "Romanian, Romania", "Română"],
  ["fi", "Finnish", "Suomi"],
  ["sv-SE", "Swedish", "Svenska"],
  ["vi", "Vietnamese", "Tiếng Việt"],
  ["tr", "Turkish", "Türkçe"],
  ["cs", "Czech", "Čeština"],
  ["el", "Greek", "Ελληνικά"],
  ["bg", "Bulgarian", "български"],
  ["ru", "Russian", "Pусский"],
  ["uk", "Ukrainian", "Українська"],
  ["hi", "Hindi", "हिन्दी"],
  ["th", "Thai", "ไทย"],
  ["zh-CN", "Chinese, China", "中文"],
  ["ja", "Japanese", "日本語"],
  ["zh-TW", "Chinese, Taiwan", "繁體中文"],
  ["ko", "Korean", "한국어"],
]
*/

export default async function () {
  let res: { err: any[]; res: any[] } = {
    err: [],
    res: [],
  };
  for (let command of commands) {
    await fetch(
      `https://discord.com/api/v9/applications/${clientId}/commands`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bot ${token}`,
        },
        body: JSON.stringify(command),
      }
    )
      .then(async (r) => res.res.push(await r.json()))
      .catch((e) => res.err.push(e));
  }
  return res;
}
