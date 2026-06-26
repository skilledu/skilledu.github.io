const express = require("express");
const router = express.Router();

router.get('/add', (req, res) => {
  try {
    res.json({ result: Number(req.query.a||0) + Number(req.query.b||0) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/sub', (req, res) => {
  try {
    res.json({ result: Number(req.query.a||0) - Number(req.query.b||0) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mul', (req, res) => {
  try {
    res.json({ result: Number(req.query.a||0) * Number(req.query.b||0) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/div', (req, res) => {
  try {
    res.json({ result: Number(req.query.b)==0 ? "Infinity" : Number(req.query.a||0) / Number(req.query.b||1) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/pow', (req, res) => {
  try {
    res.json({ result: Math.pow(Number(req.query.base||2), Number(req.query.exp||3)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/sqrt', (req, res) => {
  try {
    res.json({ result: Math.sqrt(Number(req.query.n||16)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/abs', (req, res) => {
  try {
    res.json({ result: Math.abs(Number(req.query.n||-5)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/ceil', (req, res) => {
  try {
    res.json({ result: Math.ceil(Number(req.query.n||4.2)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/floor', (req, res) => {
  try {
    res.json({ result: Math.floor(Number(req.query.n||4.8)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/round', (req, res) => {
  try {
    res.json({ result: Math.round(Number(req.query.n||4.5)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/uppercase', (req, res) => {
  try {
    res.json({ result: (req.query.text||"hello").toUpperCase() });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/lowercase', (req, res) => {
  try {
    res.json({ result: (req.query.text||"HELLO").toLowerCase() });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/length', (req, res) => {
  try {
    res.json({ result: (req.query.text||"hello").length });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/trim', (req, res) => {
  try {
    res.json({ result: (req.query.text||"  hello  ").trim() });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/repeat', (req, res) => {
  try {
    res.json({ result: (req.query.text||"ha").repeat(Number(req.query.n||3)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/slugify', (req, res) => {
  try {
    res.json({ result: (req.query.text||"Hello World").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/char-at', (req, res) => {
  try {
    res.json({ result: (req.query.text||"hello").charAt(Number(req.query.index||0)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/starts-with', (req, res) => {
  try {
    res.json({ result: (req.query.text||"hello").startsWith(req.query.prefix||"h") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/ends-with', (req, res) => {
  try {
    res.json({ result: (req.query.text||"hello").endsWith(req.query.suffix||"o") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/count-spaces', (req, res) => {
  try {
    res.json({ result: ((req.query.text||"").match(/ /g)||[]).length });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/url-encode', (req, res) => {
  try {
    res.json({ result: encodeURIComponent(req.query.text||"hello") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/url-decode', (req, res) => {
  try {
    res.json({ result: decodeURIComponent(req.query.text||"hello") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/bin-encode', (req, res) => {
  try {
    res.json({ result: (req.query.text||"hello").split("").map(c => c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/bin-decode', (req, res) => {
  try {
    res.json({ result: (req.query.text||"01101000").split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/hex-encode', (req, res) => {
  try {
    res.json({ result: Buffer.from(req.query.text||"hello", "utf8").toString("hex") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/hex-decode', (req, res) => {
  try {
    res.json({ result: Buffer.from(req.query.text||"68656c6c6f", "hex").toString("utf8") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/boolean-toggle', (req, res) => {
  try {
    res.json({ result: req.query.val === "true" ? false : true });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/is-numeric', (req, res) => {
  try {
    res.json({ result: !isNaN(req.query.val||"0") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/is-email', (req, res) => {
  try {
    res.json({ result: /^\S+@\S+\.\S+$/.test(req.query.val||"") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/is-url', (req, res) => {
  try {
    res.json({ result: /^https?:\/\/\S+$/.test(req.query.val||"") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-color', (req, res) => {
  try {
    res.json({ result: "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-bool', (req, res) => {
  try {
    res.json({ result: Math.random() > 0.5 });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-letter', (req, res) => {
  try {
    res.json({ result: String.fromCharCode(65 + Math.floor(Math.random() * 26)) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/lorem', (req, res) => {
  try {
    const w=["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit"]; let out=[]; for(let i=0;i<(Number(req.query.words)||10);i++) out.push(w[Math.floor(Math.random()*w.length)]); res.json({ result: out.join(" ")+"." });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/range', (req, res) => {
  try {
    let r=[]; for(let i=Number(req.query.start||1); i<=Number(req.query.end||10); i++) r.push(i); res.json({ result: r });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/fibonacci', (req, res) => {
  try {
    let f=[0,1]; for(let i=2; i<(Number(req.query.n)||10); i++) f.push(f[i-1]+f[i-2]); res.json({ result: f });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-date', (req, res) => {
  try {
    res.json({ result: new Date(Date.now() - Math.floor(Math.random() * 31556952000)).toISOString() });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-time', (req, res) => {
  try {
    const pad=n=>n.toString().padStart(2,"0"); res.json({ result: `${pad(Math.floor(Math.random()*24))}:${pad(Math.floor(Math.random()*60))}:${pad(Math.floor(Math.random()*60))}` });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-ip', (req, res) => {
  try {
    res.json({ result: Array.from({length:4}, ()=>Math.floor(Math.random()*256)).join(".") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/random-mac', (req, res) => {
  try {
    res.json({ result: Array.from({length:6}, ()=>Math.floor(Math.random()*256).toString(16).padStart(2,"0")).join(":") });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-user', (req, res) => {
  try {
    res.json({ id: Math.floor(Math.random()*1000), name: "John Doe", email: "john"+Math.floor(Math.random()*100)+"@example.com", role: "Admin" });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-product', (req, res) => {
  try {
    res.json({ id: Math.floor(Math.random()*1000), title: "Wireless Headphones", price: 99.99, stock: Math.floor(Math.random()*50) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-post', (req, res) => {
  try {
    res.json({ id: Math.floor(Math.random()*1000), title: "10 Tips for APIs", author: "Jane Smith", views: Math.floor(Math.random()*5000) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-comment', (req, res) => {
  try {
    res.json({ id: Math.floor(Math.random()*1000), postId: 1, text: "Great article, thanks!", likes: Math.floor(Math.random()*100) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-address', (req, res) => {
  try {
    res.json({ street: "123 Main St", city: "New York", state: "NY", zip: "10001", country: "USA" });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-card', (req, res) => {
  try {
    res.json({ network: "Visa", last4: Math.floor(1000 + Math.random()*9000).toString(), exp: "12/26" });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-company', (req, res) => {
  try {
    res.json({ name: "TechCorp Inc.", industry: "Software", employees: Math.floor(Math.random()*5000) });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-vehicle', (req, res) => {
  try {
    res.json({ make: "Toyota", model: "Camry", year: 2022, color: "Silver" });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-book', (req, res) => {
  try {
    res.json({ title: "The Art of Code", author: "A. Developer", pages: 350, genre: "Technology" });
  } catch(e) { res.status(500).json({error: e.message}) }
});

router.get('/mock-movie', (req, res) => {
  try {
    res.json({ title: "The Matrix Reloaded (Mock)", director: "Wachowskis", year: 2003, rating: 7.2 });
  } catch(e) { res.status(500).json({error: e.message}) }
});

module.exports = router;