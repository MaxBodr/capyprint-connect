export const config = {
  runtime: 'edge', // или можно удалить, если не нужен Edge Runtime
};

export default async function handler(req: Request) {
  try {
    const body = await req.json();

    const { company, name, contact } = body;

    const mainMessage = `
📬 <b>Новая заявка на CapyPrint</b>
🏢 <b>Компания:</b> ${company || '–'}
👤 <b>Имя:</b> ${name || '–'}
📞 <b>Контакт:</b> ${contact || '–'}
`;

    const fallbackMessage = `
⚠️ <b>Ошибка при обработке заявки</b>
📤 <b>Данные:</b>
<pre>${JSON.stringify({ company, name, contact }, null, 2)}</pre>
`;

    const sendToTelegram = async (text: string) => {
      return await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML'
        }),
      });
    };

    const response = await sendToTelegram(mainMessage);
    const data = await response.json();

    if (!data.ok) {
      await sendToTelegram(fallbackMessage);
      return new Response(JSON.stringify({ error: 'Ошибка Telegram', details: data }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    const fallbackMessage = `
⚠️ <b>Ошибка при выполнении кода</b>
<pre>${String(error)}</pre>
    `;
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: fallbackMessage,
        parse_mode: 'HTML',
      }),
    });

    return new Response(JSON.stringify({ error: 'Server error', details: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
