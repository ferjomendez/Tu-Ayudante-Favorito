const e=`### La regla de oro

**La IA no conoce tu circuito físico.** No sabe qué placa tienes, qué pines usaste, qué sensor conectaste, ni cómo está cableado. Si no se lo dices, va a inventar.

### Anatomía de un buen prompt

Un buen prompt para código de microcontrolador incluye:

1. **Microcontrolador**: "Estoy usando un ESP32 Dev Module" (no solo "un ESP32").
2. **Sensor/actuador**: "Tengo un sensor DHT22 conectado al pin GPIO 4".
3. **Conexiones**: "El sensor de ultrasonido tiene TRIG en pin 5 y ECHO en pin 18".
4. **Comportamiento esperado**: "Quiero que lea la temperatura cada 10 segundos y la envíe por serial".
5. **Contexto adicional**: "Ya tengo WiFi configurado con la librería WiFi.h".

### Ejemplo: mal prompt vs buen prompt

**Mal prompt:**
"Hazme el código para leer un sensor y enviarlo a internet"

**Buen prompt:**
"Estoy usando un ESP32 Dev Module con Arduino IDE. Tengo un sensor DHT22 conectado al pin GPIO 4 con resistencia pull-up de 10kΩ. Necesito que:
1. Lea temperatura y humedad cada 30 segundos.
2. Se conecte a mi red WiFi (SSID: 'MiRed', password: '12345').
3. Envíe los datos como JSON por HTTP POST a la URL 'https://mi-api.com/datos'.
4. Si pierde la conexión WiFi, intente reconectar automáticamente.
Usa las librerías DHT de Adafruit y HTTPClient."

### Para debugging

Cuando algo no funciona, no le digas "no funciona, arréglalo". En cambio:

1. Copia el **mensaje de error exacto** del compilador o serial monitor.
2. Indica **qué esperabas** que pasara vs **qué pasa realmente**.
3. Si es un error de hardware (sensor no lee), describe tu conexión física.

Ejemplo:
"Mi código compila bien pero el sensor DHT22 siempre devuelve NaN. Está conectado al pin GPIO 4 del ESP32 con resistencia pull-up de 10kΩ entre DATA y 3.3V. Uso la librería DHT de Adafruit versión 1.4.6. ¿Qué puede estar pasando?"

### Cosas que la IA hace bien

- Generar código base para leer sensores estándar.
- Explicar errores de compilación.
- Adaptar código entre Arduino y ESP32.
- Crear funciones auxiliares (formateo de datos, manejo de tiempo, etc.).

### Cosas que la IA NO puede hacer

- Verificar que tu circuito está bien conectado.
- Saber si un componente está dañado.
- Garantizar que el código funcione con tu hardware específico sin probarlo.
- Reemplazar tu entendimiento de lo que hace el código.

**Regla: si no puedes explicar en una oración qué hace cada bloque de tu código, no lo entiendes lo suficiente.**
`;export{e as default};
