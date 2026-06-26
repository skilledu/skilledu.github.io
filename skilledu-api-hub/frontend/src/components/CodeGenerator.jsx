import React, { useState } from 'react';

const CodeGenerator = ({ url, method = 'GET' }) => {
  const [activeLang, setActiveLang] = useState('curl');
  
  const snippets = {
    curl: `curl -X ${method} "${url}"`,
    fetch: `fetch("${url}", {\n  method: "${method}"\n})\n.then(response => response.json())\n.then(data => console.log(data))\n.catch(error => console.error(error));`,
    axios: `const axios = require('axios');\n\naxios.${method.toLowerCase()}("${url}")\n  .then(response => {\n    console.log(response.data);\n  })\n  .catch(error => {\n    console.error(error);\n  });`,
    python: `import requests\n\nurl = "${url}"\nresponse = requests.${method.toLowerCase()}(url)\n\nif response.status_code == 200:\n    print(response.json())\nelse:\n    print("Error:", response.status_code)`,
    php: `<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, "${url}");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n$result = curl_exec($ch);\ncurl_close($ch);\n\n$data = json_decode($result, true);\nprint_r($data);\n?>`,
    java: `import java.net.URI;\nimport java.net.http.HttpClient;\nimport java.net.http.HttpRequest;\nimport java.net.http.HttpResponse;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        HttpClient client = HttpClient.newHttpClient();\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create("${url}"))\n            .build();\n\n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        System.out.println(response.body());\n    }\n}`,
    go: `package main\n\nimport (\n\t"fmt"\n\t"io/ioutil"\n\t"net/http"\n)\n\nfunc main() {\n\tresp, err := http.Get("${url}")\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\tdefer resp.Body.Close()\n\tbody, _ := ioutil.ReadAll(resp.Body)\n\tfmt.Println(string(body))\n}`,
    csharp: `using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\n\nclass Program\n{\n    static async Task Main()\n    {\n        using HttpClient client = new HttpClient();\n        string response = await client.GetStringAsync("${url}");\n        Console.WriteLine(response);\n    }\n}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(snippets[activeLang]);
    alert(`${activeLang.toUpperCase()} code copied to clipboard!`);
  };

  return (
    <div className="code-generator">
      <div className="code-tabs">
        {Object.keys(snippets).map(lang => (
          <button 
            key={lang} 
            className={`code-tab-btn ${activeLang === lang ? 'active' : ''}`}
            onClick={() => setActiveLang(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
        <button className="code-tab-btn copy-btn" onClick={copyToClipboard} style={{marginLeft: 'auto'}}>Copy Code</button>
      </div>
      <pre className="code-snippet-box">
        <code>{snippets[activeLang]}</code>
      </pre>
    </div>
  );
};

export default CodeGenerator;
