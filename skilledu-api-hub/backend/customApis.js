const express = require('express');
const crypto = require('crypto');
const QRCode = require('qrcode');

const router = express.Router();

// 1. UUID Generator
router.get('/uuid', (req, res) => {
  res.json({ uuid: crypto.randomUUID() });
});

// 2. Hash Generator
router.get('/hash', (req, res) => {
  const text = req.query.text || 'skilledu';
  const md5 = crypto.createHash('md5').update(text).digest('hex');
  const sha256 = crypto.createHash('sha256').update(text).digest('hex');
  res.json({ text, md5, sha256 });
});

// 3. Base64 Encode
router.get('/base64-encode', (req, res) => {
  const text = req.query.text || 'Hello World';
  const encoded = Buffer.from(text).toString('base64');
  res.json({ original: text, encoded });
});

// 4. Base64 Decode
router.get('/base64-decode', (req, res) => {
  const encoded = req.query.text || 'SGVsbG8gV29ybGQ=';
  const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
  res.json({ original: encoded, decoded });
});

// 5. Random Number
router.get('/random-number', (req, res) => {
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  res.json({ min, max, result });
});

// 6. Timestamp Converter
router.get('/timestamp', (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString(),
    iso: now.toISOString()
  });
});

// 7. Text Stats
router.get('/text-stats', (req, res) => {
  const text = req.query.text || 'Skilled.u empowers future developers.';
  res.json({
    text,
    length: text.length,
    words: text.trim().split(/\s+/).length,
    vowels: (text.match(/[aeiou]/gi) || []).length
  });
});

// 8. Dice Roll
router.get('/dice-roll', (req, res) => {
  const sides = parseInt(req.query.sides) || 6;
  const roll = Math.floor(Math.random() * sides) + 1;
  res.json({ sides, roll });
});

// 9. Coin Flip
router.get('/coin-flip', (req, res) => {
  const result = Math.random() > 0.5 ? 'Heads' : 'Tails';
  res.json({ result });
});

// 10. Password Generator
router.get('/password-gen', (req, res) => {
  const length = parseInt(req.query.length) || 12;
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for(let i=0; i<length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  res.json({ password, length });
});

// 11. Reverse String
router.get('/reverse-string', (req, res) => {
  const text = req.query.text || 'Skilled.u';
  const reversed = text.split('').reverse().join('');
  res.json({ original: text, reversed });
});

// 12. QR Code Generator
router.get('/qr-code', async (req, res) => {
  const text = req.query.text || 'https://skilledu.in';
  try {
    const dataUrl = await QRCode.toDataURL(text);
    res.json({ text, qrCodeImage: dataUrl });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

module.exports = router;
