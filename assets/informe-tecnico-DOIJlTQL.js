const e=`### ¿Por qué un informe técnico?

Porque tu proyecto no es solo el prototipo físico. La documentación demuestra que entiendes lo que hiciste, por qué lo hiciste, y cómo funciona. Un informe bien hecho puede salvar un proyecto con problemas técnicos, y un informe malo puede hundir un proyecto que funciona perfecto.

### Estructura recomendada

**1. Portada**
Nombre del proyecto, integrantes, fecha, curso, sección.

**2. Resumen ejecutivo (máximo media página)**
¿Cuál es el problema? ¿Qué solución proponen? ¿Funciona? Este resumen debe permitir que alguien que no leyó nada más entienda tu proyecto.

**3. Problemática**
- Contexto y observación.
- Evidencia (datos, entrevistas, estadísticas).
- ODS relacionado.
- Justificación de por qué este problema vale la pena.

**4. Propuesta de solución**
- Descripción general de la solución.
- Diagrama de bloques del sistema.
- Justificación técnica de las decisiones (¿por qué ESP32 y no Arduino? ¿por qué ese sensor?).

**5. Desarrollo técnico**
- Diagrama de conexiones (usa Fritzing o similar).
- Lista de componentes con especificaciones.
- Explicación del código (no todo el código, sino la lógica principal).
- Diseño 3D: capturas del modelo, decisiones de diseño, tolerancias.
- Dashboard: qué muestra, cómo se conecta, URL.

**6. Resultados**
- ¿El prototipo cumple lo propuesto?
- Datos reales del dashboard (capturas con datos).
- Pruebas realizadas.

**7. Conclusiones**
- ¿Qué funcionó y qué no?
- ¿Qué mejorarías con más tiempo?
- Aprendizajes del equipo.

**8. Anexos**
- Código completo.
- Links (repo de GitHub, dashboard, videos).
- Datasheets de componentes clave.

### Tips de redacción

- Escribe en tercera persona o impersonal ("se diseñó", "se utilizó", no "yo hice").
- Sé específico: "el sensor tiene precisión de ±0.5°C" es mejor que "el sensor es preciso".
- Incluye diagramas y fotos. Una imagen del circuito armado vale más que tres párrafos describiéndolo.
- Cita tus fuentes si usas datos o información externa.
- Revisa la ortografía. Un informe con errores de escritura resta profesionalismo.
`;export{e as default};
