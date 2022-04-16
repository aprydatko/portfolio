// eslint-disable-next-line no-undef
const mail = require('@sendgrid/mail');

// eslint-disable-next-line no-undef
const apiKey = process.env.SENDGRID_API_KEY;

mail.setApiKey(apiKey);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'artyrpridatko@gmail.com',
    from: `${body.email}`,
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  // await mail.send(data);

  res.status(200).json({ status: 'OK' });
};