export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("ALMAZ TJ 💎 is running!");
    }

    const update = await request.json();

    if (update.message?.text === "/start") {
      await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: update.message.chat.id,
          text: "Салом! Ба ALMAZ TJ 💎 хуш омадед!"
        })
      });
    }

    return new Response("OK");
  }
};
