const n=`### ¿Qué es ESP-NOW?

ESP-NOW es un protocolo de comunicación inalámbrica de Espressif (los creadores del ESP32) que permite enviar datos entre dos o más ESP32 sin necesidad de un router WiFi. Es como un walkie-talkie digital entre microcontroladores.

### ¿Cuándo usarlo?

- Cuando tu prototipo tiene múltiples nodos (un sensor en un lugar y un receptor en otro).
- Cuando no hay WiFi disponible en el lugar donde operas.
- Cuando necesitas comunicación rápida y de baja latencia entre dispositivos.
- Cuando quieres que un ESP32 recopile datos de varios sensores distribuidos y luego solo uno se conecte a internet.

### Características

- Alcance: hasta ~200 metros en línea vista (sin obstáculos).
- Latencia: muy baja (~1-2ms).
- No requiere router WiFi ni conexión a internet.
- Soporta comunicación uno-a-uno y uno-a-muchos.
- Máximo 250 bytes por mensaje.
- Puede funcionar simultáneamente con WiFi (el ESP32 que recibe puede también enviar a internet).

### Código del transmisor (sender)

\`\`\`cpp
#include <esp_now.h>
#include <WiFi.h>

// MAC address del receptor (la encuentras con el código de abajo)
uint8_t receptorMAC[] = {0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF};

// Estructura de datos a enviar (debe ser igual en ambos ESP32)
typedef struct {
  float temperatura;
  float humedad;
  int id;
} DatosSensor;

DatosSensor datos;

// Callback cuando se envía
void onSent(const uint8_t *mac, esp_now_send_status_t status) {
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Enviado OK" : "Error al enviar");
}

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error iniciando ESP-NOW");
    return;
  }
  
  esp_now_register_send_cb(onSent);
  
  // Registrar receptor
  esp_now_peer_info_t peerInfo;
  memcpy(peerInfo.peer_addr, receptorMAC, 6);
  peerInfo.channel = 0;
  peerInfo.encrypt = false;
  esp_now_add_peer(&peerInfo);
}

void loop() {
  datos.temperatura = 25.5;  // Tu lectura real
  datos.humedad = 60.0;
  datos.id = 1;
  
  esp_now_send(receptorMAC, (uint8_t *)&datos, sizeof(datos));
  delay(5000);
}
\`\`\`

### Código del receptor (receiver)

\`\`\`cpp
#include <esp_now.h>
#include <WiFi.h>

typedef struct {
  float temperatura;
  float humedad;
  int id;
} DatosSensor;

DatosSensor datosRecibidos;

void onReceive(const uint8_t *mac, const uint8_t *data, int len) {
  memcpy(&datosRecibidos, data, sizeof(datosRecibidos));
  Serial.printf("Sensor %d: Temp=%.1f°C Hum=%.1f%%\\n", 
                datosRecibidos.id, 
                datosRecibidos.temperatura, 
                datosRecibidos.humedad);
}

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error iniciando ESP-NOW");
    return;
  }
  
  esp_now_register_recv_cb(onReceive);
  Serial.println("Receptor listo, esperando datos...");
}

void loop() {
  // Los datos llegan por el callback, no necesitas hacer nada aquí
}
\`\`\`

### Obtener la MAC address de un ESP32

Sube este código al ESP32 receptor para saber su MAC:

\`\`\`cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  Serial.print("MAC Address: ");
  Serial.println(WiFi.macAddress());
}

void loop() {}
\`\`\`

### Arquitectura típica para el taller

\`\`\`
[Sensor 1 + ESP32] --ESP-NOW--> [ESP32 central] --WiFi--> [Dashboard]
[Sensor 2 + ESP32] --ESP-NOW--->      ↑
[Sensor 3 + ESP32] --ESP-NOW--->      |
                                  Este ESP32 recopila 
                                  todo y lo envía por 
                                  HTTP a tu servidor
\`\`\`

### Tips

- La MAC address es única para cada ESP32 — anótala.
- Ambos ESP32 deben usar la misma estructura de datos (\`struct\`), con los mismos tipos y orden.
- Si combinas ESP-NOW con WiFi en el mismo ESP32, ambos deben usar el mismo canal WiFi.
- Para transmisión uno-a-muchos (broadcast), usa la MAC \`FF:FF:FF:FF:FF:FF\`.
`;export{n as default};
