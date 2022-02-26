## TypeScript Template for Express.js Server

---

### CLI Commands:

(you may do `sudo chmod +x cli.py` to use `./cli.py`)

1. Command to create a middleware: `python3 cli.py middleware myAwesomeMiddleware.ts /path/of/middleware`

2. Command to create a controller/endpoint: `python3 cli.py controller myAwesomeController.ts /path/of/controller`

---

In `server.ts` endpoints and middlewares are marked under comments as `// MIDDLEWARES` & `// ENDPOINTS`, not removing these flags ensures the snippet to insert import statements & endpoints/middlewares in the file. Please edit the `cli.py` file to customize this behavior.
