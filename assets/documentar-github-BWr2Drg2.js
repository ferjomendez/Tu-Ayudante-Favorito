const e=`### ¿Por qué GitHub?

Porque tu código debe estar versionado (si algo se rompe, puedes volver atrás) y documentado (para que otros — incluido tu yo del futuro — entiendan qué hiciste). Además, el repo de GitHub es evidencia del trabajo de tu equipo.

### Estructura del repositorio

\`\`\`
mi-proyecto/
├── README.md          ← Lo más importante
├── codigo/
│   ├── sensor.ino     ← Código del ESP32/Arduino
│   └── dashboard/     ← Código del dashboard web
├── modelos-3d/
│   ├── carcasa.f3d    ← Archivo de Fusion 360
│   └── carcasa.stl    ← Exportado para imprimir
├── diagramas/
│   ├── conexiones.png ← Diagrama de circuito (Fritzing)
│   └── arquitectura.png
├── docs/
│   └── informe.pdf
└── fotos/
    ├── prototipo-v1.jpg
    └── prototipo-final.jpg
\`\`\`

### Cómo escribir un buen README

El README es lo primero que ve cualquiera que entre a tu repo. Debe incluir:

**1. Nombre del proyecto y descripción de una línea.**
"Sistema de monitoreo de humedad del suelo para huertos comunitarios."

**2. Problemática y ODS.**
Resumen corto de por qué existe este proyecto.

**3. Cómo funciona.**
Diagrama o explicación del flujo: sensor → ESP32 → servidor → dashboard.

**4. Componentes usados.**
Lista con links o especificaciones.

**5. Diagrama de conexiones.**
Imagen del circuito (Fritzing, draw.io, o foto del circuito etiquetada).

**6. Cómo correr el proyecto.**
Instrucciones paso a paso para alguien que quiera replicarlo.

**7. Link al dashboard.**
URL pública donde se ven los datos.

**8. Fotos del prototipo.**
Al menos una foto del prototipo armado.

**9. Equipo.**
Nombres de los integrantes.

### Buenas prácticas con Git

- **Haz commits frecuentes** con mensajes descriptivos: "Agregar lectura de sensor DHT22" en vez de "update".
- **No subas archivos enormes** (videos, STLs de más de 50MB). Usa \`.gitignore\`.
- **Cada integrante debe tener commits.** Es evidencia de trabajo colaborativo.
- **Crea un .gitignore** desde el inicio para no subir basura (node_modules, archivos temporales, etc.).

### GitHub Pages (bonus)

Si tu dashboard es una página estática (HTML + JS), puedes hostearla gratis en GitHub Pages directamente desde tu repo. Settings → Pages → selecciona la rama y carpeta.
`;export{e as default};
