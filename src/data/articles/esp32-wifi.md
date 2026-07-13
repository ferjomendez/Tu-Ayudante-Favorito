### ¿Por qué ESP32?

El ESP32 es un microcontrolador con WiFi y Bluetooth integrado. Esto significa que tu prototipo puede enviar datos a internet sin módulos adicionales. Es ideal para proyectos del taller porque necesitas un dashboard live accesible desde cualquier lugar.

### Configuración inicial

**1. Instalar la placa en Arduino IDE:**
- Abre Arduino IDE → Archivo → Preferencias.
- En "URLs adicionales de gestor de placas", pega:
  `https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json`
- Ve a Herramientas → Placa → Gestor de placas → busca "esp32" → Instalar.
- Selecciona tu placa (generalmente "ESP32 Dev Module").

**2. Seleccionar el puerto:**
- Conecta el ESP32 por USB.
- En Herramientas → Puerto, selecciona el COM que aparezca.
- Si no aparece, puede que necesites instalar el driver CP2102 o CH340 (depende de tu placa).

### Conectarse a WiFi

```cpp
#include <WiFi.h>

const char* ssid = "NOMBRE_DE_TU_RED";
const char* password = "TU_CONTRASEÑA";

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  Serial.print("Conectando a WiFi");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println("");
  Serial.println("Conectado!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Tu código aquí
}
```

### Enviar datos por HTTP

Una vez conectado a WiFi, puedes enviar datos a cualquier servidor. Ejemplo básico con HTTP POST:

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

void enviarDato(float valor) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin("https://tu-servidor.com/api/datos");
    http.addHeader("Content-Type", "application/json");
    
    String json = "{\"sensor\":\"temperatura\",\"valor\":" + String(valor) + "}";
    int respuesta = http.POST(json);
    
    Serial.println("Respuesta: " + String(respuesta));
    http.end();
  }
}
```

### Errores comunes

- **No conecta a WiFi:** Verifica que el nombre de la red y contraseña estén exactos (mayúsculas importan). El ESP32 solo soporta redes de 2.4 GHz, no 5 GHz.
- **Se desconecta seguido:** Agrega lógica de reconexión automática en el loop.
- **No sube el código:** Mantén presionado el botón BOOT del ESP32 mientras sube. Si aún falla, prueba bajar la velocidad de upload a 115200.
- **El serial no muestra nada:** Asegúrate de que el baud rate del Serial Monitor coincida con el de `Serial.begin()`.

### Siguiente paso

Una vez que tu ESP32 se conecta a WiFi y envía datos, necesitas un servidor que los reciba y almacene. Revisa los recursos de Dashboard para elegir tu stack.
