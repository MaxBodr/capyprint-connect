export const config = {
  runtime: 'edge', // или можно удалить, если не нужен Edge Runtime
};

export default async function handler(req: Request) {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Метод не разрешён' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      });
    }

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

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID_1 = process.env.TELEGRAM_CHAT_ID;
    const CHAT_ID_2 = process.env.TELEGRAM_CHAT_ID_2;

    const sendToTelegram = async (chatId: string, text: string) => {
      return await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML'
        }),
      });
    };

    // отправка основного уведомления на оба чата
    const send1 = sendToTelegram(CHAT_ID_1!, mainMessage);
    const send2 = CHAT_ID_2 ? sendToTelegram(CHAT_ID_2, mainMessage) : null;

    const [response1, response2] = await Promise.all([send1, send2]);

    const data1 = await response1.json();

    if (!data1.ok) {
      // если даже первая отправка не удалась — уведомляем только первый чат
      await sendToTelegram(CHAT_ID_1!, fallbackMessage);

      return new Response(JSON.stringify({ error: 'Ошибка Telegram', details: data1 }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID_1 = process.env.TELEGRAM_CHAT_ID;

    const fallbackErrorMessage = `
💥 <b>Ошибка выполнения serverless-функции</b>
<pre>${String(error)}</pre>
    `;

    if (BOT_TOKEN && CHAT_ID_1) {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID_1,
          text: fallbackErrorMessage,
          parse_mode: 'HTML'
        }),
      });
    }

    return new Response(JSON.stringify({ error: 'Server error', details: String(error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

