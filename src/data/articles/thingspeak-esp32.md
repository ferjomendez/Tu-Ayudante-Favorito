### ¿Qué es ThingSpeak?

ThingSpeak es una plataforma IoT de MathWorks (los de MATLAB) que permite recibir, almacenar y visualizar datos de sensores por internet. Es una de las opciones más simples para armar tu dashboard porque los gráficos se generan automáticamente.

### Configuración

**1. Crear una cuenta:**
- Ve a [thingspeak.com](https://thingspeak.com) y crea una cuenta gratuita.
- Crea un nuevo "Channel" y agrega los campos (fields) que vas a usar. Ejemplo: Field 1 = Temperatura, Field 2 = Humedad.
- Copia tu **Write API Key** (la necesitas en el código del ESP32).

**2. Código del ESP32:**

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "TU_RED";
const char* password = "TU_CONTRASEÑA";
const char* apiKey = "TU_WRITE_API_KEY";
const char* server = "http://api.thingspeak.com/update";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConectado a WiFi");
}

void loop() {
  float temperatura = 25.5;  // Reemplaza con tu lectura real
  float humedad = 60.0;      // Reemplaza con tu lectura real
  
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = String(server) + "?api_key=" + apiKey 
                 + "&field1=" + String(temperatura) 
                 + "&field2=" + String(humedad);
    http.begin(url);
    int respuesta = http.GET();
    Serial.println("ThingSpeak respuesta: " + String(respuesta));
    http.end();
  }
  
  delay(20000);  // ThingSpeak gratis acepta datos cada 15 segundos mínimo
}
```

**3. Visualizar:**
- En ThingSpeak, ve a tu Channel → visualización privada o pública.
- Los gráficos se generan solos con los datos que llegan.
- Puedes hacer el channel público para compartir la URL.

### Limitaciones del plan gratuito

- Máximo 3 millones de mensajes al año.
- Mínimo 15 segundos entre cada envío de datos.
- 4 channels, 8 fields por channel.
- Para el taller es más que suficiente.

### Nota importante

ThingSpeak es la opción más fácil, pero los dashboards que genera son básicos. Si quieres más control visual sobre tu dashboard, considera hacer tu propio frontend con los datos almacenados en Aiven, Firebase, o Supabase.
