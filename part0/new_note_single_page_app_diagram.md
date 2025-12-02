```mermaid
sequenceDiagram
participant browser
participant server
browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa/new_note_spa
Note left of browser: Browser sends a new note within JSON
activate server
server-->>browser: Server sends 201 
deactivate server
Note right of server: Server does not request a reload, but JS updates the page dynamically
```