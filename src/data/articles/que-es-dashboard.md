### Concepto

Un dashboard es una página web (o app) que muestra los datos que tu prototipo recopila, en forma de gráficos, números y tablas. "Live" significa que se actualiza con datos nuevos sin que tengas que recargar la página.

### ¿Por qué lo necesitas?

Porque tu prototipo mide cosas (temperatura, distancia, humedad, peso, etc.) y esas mediciones deben ser visibles para demostrar que tu solución funciona. Además, el dashboard debe ser accesible desde cualquier dispositivo con internet — no vale un localhost que solo funciona en tu computador.

### Componentes de un dashboard

1. **El prototipo (ESP32/Arduino)** — Lee los sensores y envía los datos.
2. **Un servidor/base de datos** — Recibe y almacena los datos. Puede ser Aiven (PostgreSQL en la nube), Firebase, Supabase, o cualquier base de datos accesible por internet.
3. **Una aplicación web** — Muestra los datos con gráficos. Puede estar hosteada en Railway, Vercel, Render, GitHub Pages (si es estática), o cualquier servicio que dé una URL pública.

### Flujo de datos

```
Sensor → ESP32 → WiFi → API/Servidor → Base de datos → Dashboard web
```

El ESP32 hace un HTTP POST con los datos del sensor. El servidor los guarda. El dashboard los lee y los muestra en gráficos.

### ¿Qué debe mostrar tu dashboard?

Mínimo:
- Valor actual del sensor en tiempo real (o casi — cada 10-30 segundos está bien).
- Gráfico histórico (cómo ha cambiado el valor en el tiempo).
- Indicador de estado (¿el prototipo está conectado o no?).

Ideal:
- Alertas cuando un valor sale de rango.
- Múltiples sensores en un solo dashboard.
- Filtros por fecha o rango de tiempo.

### Stack recomendado para el taller

Cada grupo elige su stack, pero acá van combinaciones que funcionan bien:

**Opción simple: Aiven + Railway**
- Aiven: base de datos PostgreSQL gratuita en la nube.
- Railway: hostear tu backend (Node.js, Python) y frontend.
- El ESP32 envía datos al backend por HTTP.

**Opción intermedia: Firebase**
- Firebase Realtime Database o Firestore: almacena datos, se actualiza en tiempo real.
- Firebase Hosting para el frontend.
- Buena documentación, tier gratuito generoso.

**Opción avanzada: Supabase + Vercel**
- Supabase: base de datos PostgreSQL con API REST automática.
- Vercel: hostear el frontend (React, Next.js).
- Más flexible pero requiere más configuración.

Lo importante no es qué tecnología uses, sino que el resultado sea una URL pública donde cualquiera pueda ver los datos de tu prototipo.
