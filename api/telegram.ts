export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешён' });
  }

  const { company, name, contact } = req.body || {};

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

  try {
    // Основная попытка отправки заявки
    const response = await sendToTelegram(mainMessage);
    const data = await response.json();

    if (!data.ok) {
      // Если Telegram вернул ошибку — отправляем аварийное уведомление
      await sendToTelegram(fallbackMessage);
      return res.status(500).json({ error: 'Ошибка отправки в Telegram', details: data });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    // Ловим любые ошибки на уровне try/catch
    await sendToTelegram(fallbackMessage);
    return res.status(500).json({ error: 'Внутренняя ошибка сервера', details: String(err) });
  }
}
