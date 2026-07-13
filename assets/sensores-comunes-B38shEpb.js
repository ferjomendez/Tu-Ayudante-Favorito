const e=`### ¿Cómo funciona un sensor?

Un sensor convierte una magnitud física (temperatura, distancia, luz, etc.) en una señal eléctrica que el microcontrolador puede leer. Hay dos tipos principales:

- **Analógicos:** Dan un voltaje proporcional a la medición. Se leen con \`analogRead(pin)\`. Ejemplo: LDR (luz), potenciómetro.
- **Digitales:** Comunican datos por un protocolo (I2C, SPI, OneWire, o simplemente HIGH/LOW). Se leen con librerías específicas. Ejemplo: DHT22, HC-SR04.

### Los sensores que más se usan en el taller

**Temperatura y humedad: DHT11 / DHT22**
- Mide temperatura y humedad del aire.
- DHT11: más barato, menos preciso (±2°C). DHT22: mejor precisión (±0.5°C).
- Librería: \`DHT sensor library\` de Adafruit.
- Conexión: VCC → 3.3V, GND → GND, DATA → pin digital + resistencia pull-up de 10kΩ.

\`\`\`cpp
#include <DHT.h>
#define DHTPIN 4
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(115200);
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  float hum = dht.readHumidity();
  Serial.println("Temp: " + String(temp) + "°C  Hum: " + String(hum) + "%");
  delay(2000);
}
\`\`\`

**Distancia: HC-SR04 (ultrasonido)**
- Mide distancia de 2 cm a 4 metros.
- Emite un pulso ultrasónico y mide cuánto tarda en rebotar.
- Conexión: VCC → 5V, GND → GND, TRIG → pin digital, ECHO → pin digital.

\`\`\`cpp
#define TRIG 5
#define ECHO 18

void setup() {
  Serial.begin(115200);
  pinMode(TRIG, OUTPUT);
  pinMode(ECHO, INPUT);
}

void loop() {
  digitalWrite(TRIG, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG, LOW);
  
  long duracion = pulseIn(ECHO, HIGH);
  float distancia = duracion * 0.034 / 2;
  Serial.println("Distancia: " + String(distancia) + " cm");
  delay(500);
}
\`\`\`

**Luz: LDR (fotoresistencia)**
- Cambia su resistencia según la cantidad de luz.
- Se lee con \`analogRead()\`. Más luz = menor resistencia.
- Conexión: un extremo a 3.3V, el otro al pin analógico + resistencia de 10kΩ a GND (divisor de voltaje).

**Humedad del suelo: capacitivo**
- Mide la humedad del suelo (ideal para proyectos de agricultura).
- Salida analógica. Valor bajo = suelo húmedo, valor alto = suelo seco.
- Usa la versión capacitiva, no la resistiva (se corroe rápido).

**Peso: celda de carga + HX711**
- Para medir peso necesitas una celda de carga y un amplificador HX711.
- Librería: \`HX711\` de bogde.
- Requiere calibración inicial con un peso conocido.

**Infrarrojo: sensor IR**
- Detecta presencia/ausencia de objetos cercanos.
- Salida digital (HIGH/LOW).
- Útil para contar objetos, detectar paso de personas, etc.

### Tips generales

- Siempre revisa el voltaje de operación del sensor: algunos son 5V y otros 3.3V. El ESP32 trabaja a 3.3V; conectar 5V a un pin de entrada puede dañarlo.
- Lee el datasheet al menos para saber los pines y voltaje. No necesitas entender todo, pero el pinout y el rango de operación son esenciales.
- Prueba cada sensor por separado antes de integrarlos todos. Si algo falla cuando están todos juntos, desconéctalos y prueba uno por uno.
`;export{e as default};
