const e=`### ¿Qué es debugging?

Es el proceso de encontrar y corregir errores en tu código o circuito. En el taller vas a pasar más tiempo debuggeando que escribiendo código nuevo, y eso es normal.

### Tipos de errores

**Errores de compilación**: El código no sube a la placa.
- Aparecen en rojo en la consola de Arduino IDE.
- Son los más fáciles: la IA los resuelve bien si le copias el error exacto.

**Errores de ejecución**: El código sube pero no hace lo esperado.
- El sensor devuelve 0 o NaN.
- El WiFi no conecta.
- El dato llega mal al servidor.
- Estos requieren que uses el Serial Monitor como tu mejor herramienta.

**Errores de hardware**: Todo está bien en el código pero algo físico falla.
- Cable suelto, pin equivocado, componente dañado, alimentación insuficiente.
- La IA no puede detectar estos. Tú debes revisar.

### Cómo usar el Serial Monitor

Es tu ventana al ESP32/Arduino. Siempre ten prints en tu código:

\`\`\`cpp
Serial.begin(115200);  // En setup()

// En loop(), imprime todo lo relevante:
Serial.println("Leyendo sensor...");
float temp = dht.readTemperature();
Serial.println("Temperatura: " + String(temp));

if (isnan(temp)) {
  Serial.println("ERROR: sensor no responde");
}
\`\`\`

### Proceso de debugging con IA

1. **Reproduce el error**: Asegúrate de que el error ocurre consistentemente.
2. **Aísla el problema**: ¿Es de código, de conexión, o de lógica? Comenta secciones del código para encontrar cuál falla.
3. **Recopila información**: Abre el Serial Monitor, copia la salida.
4. **Pregúntale a la IA con contexto:**

"Mi ESP32 compila y sube bien pero el serial muestra:
\`\`\`
Conectando a WiFi......................
ERROR: Timeout de conexión
\`\`\`
Estoy usando WiFi.begin('MiRed', '12345'). La red es de 2.4GHz y el ESP32 está a 2 metros del router. ¿Qué puede estar fallando?"

5. **Prueba la solución**: No apliques todo lo que dice la IA a ciegas. Cambia una cosa a la vez y verifica.

### Errores comunes en el taller

- **NaN en sensor DHT**: Pull-up resistor faltante o pin equivocado.
- **WiFi no conecta**: Red de 5GHz (ESP32 solo soporta 2.4GHz), o credenciales con espacio extra.
- **HTTP POST falla**: URL incorrecta, servidor no responde, o falta el header Content-Type.
- **Servo se mueve errático**: Alimentación insuficiente. Los servos necesitan su propia fuente, no alimentarlos desde el pin 3.3V del ESP32.
- **Datos llegan a 0**: Estás leyendo el pin equivocado o el sensor necesita tiempo de calentamiento (warm-up).
`;export{e as default};
