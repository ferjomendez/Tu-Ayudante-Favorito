const a=`### ¿Por qué batería?

Tu prototipo debe ser autónomo la mayoría de las veces. Eso significa que no puede depender de estar conectado a un computador por USB. Necesita su propia fuente de energía.

### Opciones comunes

**Baterías LiPo (Litio-Polímero)**
- Voltaje: 3.7V nominal (4.2V cargada, 3.0V descargada).
- Ventajas: livianas, compactas, recargables.
- Desventajas: pueden ser peligrosas si se perforan o se sobredescargan.
- Capacidad típica: 500mAh a 5000mAh.

**Baterías 18650 (Litio-Ion)**
- Voltaje: 3.7V nominal.
- Ventajas: robustas, fáciles de conseguir, recargables, con portapilas estándar.
- Son las que vienen dentro de los powerbanks.
- Capacidad típica: 2000mAh a 3500mAh.

**Powerbank USB**
- La opción más simple: conectas el ESP32/Arduino por USB al powerbank.
- Problema: algunos powerbanks se apagan si el consumo es muy bajo (el ESP32 consume poco). Busca uno que no tenga auto-off.

### ¿Cuánto dura la batería?

Fórmula simplificada:

**Duración (horas) = Capacidad (mAh) / Consumo (mA)**

Ejemplo: batería de 2000mAh con un ESP32 que consume ~80mA activo:
2000 / 80 = 25 horas aproximadas.

Para aumentar la duración:
- Usa \`deep sleep\` en el ESP32: el consumo baja a ~10μA. Despierta, mide, envía, y vuelve a dormir.
- Reduce la frecuencia de mediciones (cada 5 minutos en vez de cada segundo).
- Apaga el WiFi cuando no lo necesites.

### Circuito básico con 18650

Necesitas:
1. **Portapilas para 18650** — donde va la batería.
2. **Módulo TP4056** — para cargar la batería por micro-USB.
3. **Regulador de voltaje** — si tu circuito necesita un voltaje estable. Muchas placas ESP32 tienen regulador integrado y aceptan alimentación por el pin VIN (hasta ~12V).

Conexión simple:
- Batería → TP4056 (para carga).
- Salida del TP4056 → VIN del ESP32 (o 3.3V si usas un regulador externo).
- GND común para todo.

### Cosas importantes

- **Nunca conectes la batería al revés.** Puede dañar todo el circuito.
- **No descargues una LiPo por debajo de 3.0V.** Usa el TP4056 con protección integrada (versión con chip DW01).
- **Cuidado con los cortocircuitos.** Las baterías de litio entregan mucha corriente instantánea. Un corto puede causar calor extremo o incluso fuego.
- **Calcula tu consumo real.** Mide con un multímetro cuánta corriente usa tu circuito completo antes de elegir la batería.
- **Si usas servomotores o motores DC**, necesitan más corriente. Considera alimentarlos desde una fuente separada.
`;export{a as default};
