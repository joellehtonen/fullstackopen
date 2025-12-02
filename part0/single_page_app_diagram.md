```mermaid
sequenceDiagram
participant browser
participant server
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server activate
server-->>browser: Server sends HTML document with Javascript
server deactivate
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: CSS file
deactivate server
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: JS file
deactivate server
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: JSON file
deactivate server
Note left of browser: Browser runs the JS script it received
```