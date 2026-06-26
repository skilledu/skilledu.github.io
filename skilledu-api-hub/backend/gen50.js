const fs = require('fs');

const apis = [];
let routeCode = 'const express = require("express");\nconst router = express.Router();\n\n';

const addApi = (id, name, cat, desc, params, handlerStr) => {
  apis.push({
    id: 'gen-' + id,
    name: name,
    category: cat,
    desc: desc,
    url: 'http://127.0.0.1:7866/api/generated/' + id,
    originalUrl: 'http://127.0.0.1:7866/api/generated/' + id,
    params: params
  });
  routeCode += `router.get('/${id}', (req, res) => {\n  try {\n    ${handlerStr}\n  } catch(e) { res.status(500).json({error: e.message}) }\n});\n\n`;
};

// Math
addApi('add', 'Addition', 'Math', 'Adds two numbers.', [{name:'a', label:'A', default:'5'}, {name:'b', label:'B', default:'10'}], 'res.json({ result: Number(req.query.a||0) + Number(req.query.b||0) });');
addApi('sub', 'Subtraction', 'Math', 'Subtracts two numbers.', [{name:'a', label:'A', default:'10'}, {name:'b', label:'B', default:'5'}], 'res.json({ result: Number(req.query.a||0) - Number(req.query.b||0) });');
addApi('mul', 'Multiplication', 'Math', 'Multiplies two numbers.', [{name:'a', label:'A', default:'5'}, {name:'b', label:'B', default:'10'}], 'res.json({ result: Number(req.query.a||0) * Number(req.query.b||0) });');
addApi('div', 'Division', 'Math', 'Divides two numbers.', [{name:'a', label:'A', default:'10'}, {name:'b', label:'B', default:'2'}], 'res.json({ result: Number(req.query.b)==0 ? "Infinity" : Number(req.query.a||0) / Number(req.query.b||1) });');
addApi('pow', 'Power', 'Math', 'Base to the exponent power.', [{name:'base', label:'Base', default:'2'}, {name:'exp', label:'Exponent', default:'3'}], 'res.json({ result: Math.pow(Number(req.query.base||2), Number(req.query.exp||3)) });');
addApi('sqrt', 'Square Root', 'Math', 'Square root of a number.', [{name:'n', label:'Number', default:'16'}], 'res.json({ result: Math.sqrt(Number(req.query.n||16)) });');
addApi('abs', 'Absolute Value', 'Math', 'Absolute value.', [{name:'n', label:'Number', default:'-5'}], 'res.json({ result: Math.abs(Number(req.query.n||-5)) });');
addApi('ceil', 'Ceiling', 'Math', 'Round up.', [{name:'n', label:'Number', default:'4.2'}], 'res.json({ result: Math.ceil(Number(req.query.n||4.2)) });');
addApi('floor', 'Floor', 'Math', 'Round down.', [{name:'n', label:'Number', default:'4.8'}], 'res.json({ result: Math.floor(Number(req.query.n||4.8)) });');
addApi('round', 'Round', 'Math', 'Round to nearest integer.', [{name:'n', label:'Number', default:'4.5'}], 'res.json({ result: Math.round(Number(req.query.n||4.5)) });');

// Strings
addApi('uppercase', 'Uppercase', 'String', 'Convert to uppercase.', [{name:'text', label:'Text', default:'hello'}], 'res.json({ result: (req.query.text||"hello").toUpperCase() });');
addApi('lowercase', 'Lowercase', 'String', 'Convert to lowercase.', [{name:'text', label:'Text', default:'HELLO'}], 'res.json({ result: (req.query.text||"HELLO").toLowerCase() });');
addApi('length', 'String Length', 'String', 'Get length.', [{name:'text', label:'Text', default:'hello'}], 'res.json({ result: (req.query.text||"hello").length });');
addApi('trim', 'Trim Whitespace', 'String', 'Remove whitespace.', [{name:'text', label:'Text', default:'  hello  '}], 'res.json({ result: (req.query.text||"  hello  ").trim() });');
addApi('repeat', 'Repeat String', 'String', 'Repeat string.', [{name:'text', label:'Text', default:'ha'}, {name:'n', label:'Times', default:'3'}], 'res.json({ result: (req.query.text||"ha").repeat(Number(req.query.n||3)) });');
addApi('slugify', 'URL Slugify', 'String', 'Convert to URL slug.', [{name:'text', label:'Text', default:'Hello World API'}], 'res.json({ result: (req.query.text||"Hello World").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") });');
addApi('char-at', 'Character At', 'String', 'Get char at index.', [{name:'text', label:'Text', default:'hello'}, {name:'index', label:'Index', default:'1'}], 'res.json({ result: (req.query.text||"hello").charAt(Number(req.query.index||0)) });');
addApi('starts-with', 'Starts With', 'String', 'Check prefix.', [{name:'text', label:'Text', default:'hello world'}, {name:'prefix', label:'Prefix', default:'hello'}], 'res.json({ result: (req.query.text||"hello").startsWith(req.query.prefix||"h") });');
addApi('ends-with', 'Ends With', 'String', 'Check suffix.', [{name:'text', label:'Text', default:'hello world'}, {name:'suffix', label:'Suffix', default:'world'}], 'res.json({ result: (req.query.text||"hello").endsWith(req.query.suffix||"o") });');
addApi('count-spaces', 'Count Spaces', 'String', 'Count spaces in string.', [{name:'text', label:'Text', default:'hello world out there'}], 'res.json({ result: ((req.query.text||"").match(/ /g)||[]).length });');

// Formatting
addApi('url-encode', 'URL Encode', 'Formatting', 'Encode URL components.', [{name:'text', label:'Text', default:'hello world!'}], 'res.json({ result: encodeURIComponent(req.query.text||"hello") });');
addApi('url-decode', 'URL Decode', 'Formatting', 'Decode URL components.', [{name:'text', label:'Text', default:'hello%20world%21'}], 'res.json({ result: decodeURIComponent(req.query.text||"hello") });');
addApi('bin-encode', 'Binary Encode', 'Formatting', 'Text to Binary.', [{name:'text', label:'Text', default:'hello'}], 'res.json({ result: (req.query.text||"hello").split("").map(c => c.charCodeAt(0).toString(2).padStart(8,"0")).join(" ") });');
addApi('bin-decode', 'Binary Decode', 'Formatting', 'Binary to Text.', [{name:'text', label:'Binary', default:'01101000 01100101'}], 'res.json({ result: (req.query.text||"01101000").split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("") });');
addApi('hex-encode', 'Hex Encode', 'Formatting', 'Text to Hex.', [{name:'text', label:'Text', default:'hello'}], 'res.json({ result: Buffer.from(req.query.text||"hello", "utf8").toString("hex") });');
addApi('hex-decode', 'Hex Decode', 'Formatting', 'Hex to Text.', [{name:'text', label:'Hex', default:'68656c6c6f'}], 'res.json({ result: Buffer.from(req.query.text||"68656c6c6f", "hex").toString("utf8") });');
addApi('boolean-toggle', 'Toggle Boolean', 'Formatting', 'Toggle true/false.', [{name:'val', label:'Value', default:'true'}], 'res.json({ result: req.query.val === "true" ? false : true });');
addApi('is-numeric', 'Is Numeric', 'Formatting', 'Check if numeric.', [{name:'val', label:'Value', default:'123.45'}], 'res.json({ result: !isNaN(req.query.val||"0") });');
addApi('is-email', 'Is Email', 'Formatting', 'Regex email check.', [{name:'val', label:'Email', default:'test@skilledu.in'}], 'res.json({ result: /^\\S+@\\S+\\.\\S+$/.test(req.query.val||"") });');
addApi('is-url', 'Is URL', 'Formatting', 'Regex URL check.', [{name:'val', label:'URL', default:'https://skilledu.in'}], 'res.json({ result: /^https?:\\/\\/\\S+$/.test(req.query.val||"") });');

// Generators
addApi('random-color', 'Random Color', 'Generators', 'Generate HEX color.', [], 'res.json({ result: "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0") });');
addApi('random-bool', 'Random Boolean', 'Generators', 'True or False.', [], 'res.json({ result: Math.random() > 0.5 });');
addApi('random-letter', 'Random Letter', 'Generators', 'A-Z character.', [], 'res.json({ result: String.fromCharCode(65 + Math.floor(Math.random() * 26)) });');
addApi('lorem', 'Lorem Ipsum', 'Generators', 'Mock text generator.', [{name:'words', label:'Word Count', default:'10'}], 'const w=["lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit"]; let out=[]; for(let i=0;i<(Number(req.query.words)||10);i++) out.push(w[Math.floor(Math.random()*w.length)]); res.json({ result: out.join(" ")+"." });');
addApi('range', 'Number Range', 'Generators', 'Array of numbers.', [{name:'start', label:'Start', default:'1'}, {name:'end', label:'End', default:'10'}], 'let r=[]; for(let i=Number(req.query.start||1); i<=Number(req.query.end||10); i++) r.push(i); res.json({ result: r });');
addApi('fibonacci', 'Fibonacci Sequence', 'Generators', 'Generate fibonacci.', [{name:'n', label:'Length', default:'10'}], 'let f=[0,1]; for(let i=2; i<(Number(req.query.n)||10); i++) f.push(f[i-1]+f[i-2]); res.json({ result: f });');
addApi('random-date', 'Random Date', 'Generators', 'Date in past year.', [], 'res.json({ result: new Date(Date.now() - Math.floor(Math.random() * 31556952000)).toISOString() });');
addApi('random-time', 'Random Time', 'Generators', 'HH:MM:SS format.', [], 'const pad=n=>n.toString().padStart(2,"0"); res.json({ result: `${pad(Math.floor(Math.random()*24))}:${pad(Math.floor(Math.random()*60))}:${pad(Math.floor(Math.random()*60))}` });');
addApi('random-ip', 'Random IP', 'Generators', 'IPv4 Address.', [], 'res.json({ result: Array.from({length:4}, ()=>Math.floor(Math.random()*256)).join(".") });');
addApi('random-mac', 'Random MAC Address', 'Generators', 'MAC format.', [], 'res.json({ result: Array.from({length:6}, ()=>Math.floor(Math.random()*256).toString(16).padStart(2,"0")).join(":") });');

// Mock Data
addApi('mock-user', 'Mock User', 'Mock Data', 'Fake user profile.', [], 'res.json({ id: Math.floor(Math.random()*1000), name: "John Doe", email: "john"+Math.floor(Math.random()*100)+"@example.com", role: "Admin" });');
addApi('mock-product', 'Mock Product', 'Mock Data', 'Fake ecommerce product.', [], 'res.json({ id: Math.floor(Math.random()*1000), title: "Wireless Headphones", price: 99.99, stock: Math.floor(Math.random()*50) });');
addApi('mock-post', 'Mock Blog Post', 'Mock Data', 'Fake blog article.', [], 'res.json({ id: Math.floor(Math.random()*1000), title: "10 Tips for APIs", author: "Jane Smith", views: Math.floor(Math.random()*5000) });');
addApi('mock-comment', 'Mock Comment', 'Mock Data', 'Fake comment.', [], 'res.json({ id: Math.floor(Math.random()*1000), postId: 1, text: "Great article, thanks!", likes: Math.floor(Math.random()*100) });');
addApi('mock-address', 'Mock Address', 'Mock Data', 'Fake physical address.', [], 'res.json({ street: "123 Main St", city: "New York", state: "NY", zip: "10001", country: "USA" });');
addApi('mock-card', 'Mock Credit Card', 'Mock Data', 'Fake card (masked).', [], 'res.json({ network: "Visa", last4: Math.floor(1000 + Math.random()*9000).toString(), exp: "12/26" });');
addApi('mock-company', 'Mock Company', 'Mock Data', 'Fake business.', [], 'res.json({ name: "TechCorp Inc.", industry: "Software", employees: Math.floor(Math.random()*5000) });');
addApi('mock-vehicle', 'Mock Vehicle', 'Mock Data', 'Fake car data.', [], 'res.json({ make: "Toyota", model: "Camry", year: 2022, color: "Silver" });');
addApi('mock-book', 'Mock Book', 'Mock Data', 'Fake book data.', [], 'res.json({ title: "The Art of Code", author: "A. Developer", pages: 350, genre: "Technology" });');
addApi('mock-movie', 'Mock Movie', 'Mock Data', 'Fake movie data.', [], 'res.json({ title: "The Matrix Reloaded (Mock)", director: "Wachowskis", year: 2003, rating: 7.2 });');

routeCode += 'module.exports = router;';

fs.writeFileSync('./generatedApis.js', routeCode);

// Append to apiConfig.js
let apisConf = require('./apiConfig');
apisConf = apisConf.concat(apis);
const content = 'const apis = ' + JSON.stringify(apisConf, null, 2) + ';\n\nmodule.exports = apis;';
fs.writeFileSync('./apiConfig.js', content);

console.log('Successfully generated 50 new custom APIs.');
