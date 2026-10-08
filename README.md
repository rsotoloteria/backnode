# Aplicacion Node.js con Docker Compose

Ejemplo mínimo de un servidor HTTP de Node.js, sin dependencias externas.

## Iniciar

Desde este directorio, ejecuta:

```sh
docker compose up --build
```

La aplicación estará disponible en <http://localhost:3000>. El endpoint
<http://localhost:3000/health> devuelve `{"status":"ok"}`.

Para detenerla, presiona `Ctrl+C`. También puedes iniciarla en segundo plano
con `docker compose up --build -d` y detenerla con `docker compose down`.
