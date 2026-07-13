const e=`### ¿Qué es Firebase?

Firebase es una plataforma de Google que incluye base de datos en tiempo real, hosting, autenticación, y más. Para el taller, nos interesa la **Realtime Database**: una base de datos NoSQL en la nube que se actualiza instantáneamente en todos los clientes conectados.

### ¿Por qué Firebase?

- Se actualiza en tiempo real (sin necesidad de recargar la página).
- Tier gratuito generoso (1GB de almacenamiento, 10GB de transferencia/mes).
- Buena documentación y muchos tutoriales en español.
- Puedes hostear tu dashboard web en Firebase Hosting (también gratis).

### Configuración paso a paso

**1. Crear proyecto en Firebase:**
- Ve a [console.firebase.google.com](https://console.firebase.google.com).
- Crea un nuevo proyecto.
- En la sección "Realtime Database", crea una base de datos.
- En las reglas de seguridad, para desarrollo usa (cambiar luego):
\`\`\`json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
\`\`\`

**2. Enviar datos desde el ESP32:**

Necesitas la librería \`Firebase ESP32 Client\` de mobizt.

\`\`\`cpp
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include <addons/TokenHelper.h>

#define WIFI_SSID "TU_RED"
#define WIFI_PASSWORD "TU_CONTRASEÑA"
#define DATABASE_URL "https://tu-proyecto.firebaseio.com"
#define API_KEY "TU_API_KEY_DE_FIREBASE"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

void setup() {
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) delay(300);
  
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  auth.user.email = "tu@email.com";      // Crear usuario en Firebase Auth
  auth.user.password = "tupassword";
  config.token_status_callback = tokenStatusCallback;
  
  Firebase.begin(&config, &auth);
}

void loop() {
  float temp = 25.5;  // Tu lectura real
  
  Firebase.RTDB.setFloat(&fbdo, "/sensores/temperatura", temp);
  Firebase.RTDB.setInt(&fbdo, "/sensores/timestamp", millis());
  
  delay(10000);
}
\`\`\`

**3. Leer datos en tu dashboard web:**

\`\`\`javascript
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const app = initializeApp({ /* tu config de Firebase */ });
const db = getDatabase(app);

// Se actualiza en tiempo real automáticamente
onValue(ref(db, "/sensores/temperatura"), (snapshot) => {
  const temp = snapshot.val();
  document.getElementById("temp").textContent = temp + "°C";
});
\`\`\`

### La ventaja sobre ThingSpeak

Con Firebase tú controlas completamente cómo se ve tu dashboard. Puedes usar React, Chart.js, o cualquier librería de gráficos para mostrar los datos exactamente como quieras. Es más trabajo pero el resultado es más profesional.
`;export{e as default};
