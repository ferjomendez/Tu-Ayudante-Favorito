## ¿Qué es GitHub?

GitHub es una plataforma web donde puedes guardar tu código, colaborar con tu equipo, y tener un historial completo de cada cambio que hiciste. Piensa en él como un Google Drive para código, pero con superpoderes: sabe exactamente qué cambió, quién lo cambió, y cuándo.

Para el taller lo necesitas por tres razones: versionar tu código (volver atrás si algo se rompe), colaborar con tu equipo sin pisarse, y documentar tu proyecto para la entrega.

## Conceptos clave

### Repositorio (repo)

Es la carpeta de tu proyecto en GitHub. Contiene todos los archivos: código, documentación, diagramas, modelos 3D, fotos. Cada proyecto tiene un repo.

### Commit

Un commit es una "foto" del estado de tu proyecto en un momento específico. Cada vez que haces un cambio significativo, creas un commit con un mensaje que describe qué cambiaste. Así puedes volver a cualquier punto anterior si algo sale mal.

Ejemplo de buenos mensajes de commit:
- `Agregar lectura de sensor DHT22`
- `Corregir error en conexión WiFi`
- `Añadir modelo 3D de la carcasa v2`

Ejemplo de malos mensajes de commit:
- `update`
- `fix`
- `asdfg`
- `cambios`

### Branch (rama)

Una rama es una línea paralela de desarrollo. La rama principal se llama `main`. Si quieres probar algo sin afectar lo que ya funciona, creas una rama nueva, trabajas ahí, y cuando estés seguro de que funciona, la fusionas (merge) con `main`.

Para el taller, pueden trabajar así: cada integrante en su propia rama y luego juntar todo en `main`.

### .gitignore

Un archivo que le dice a Git qué archivos NO subir. Es esencial para no llenar el repo de basura.

Ejemplo de `.gitignore` para un proyecto del taller:

```
# Archivos del sistema
.DS_Store
Thumbs.db

# Dependencias
node_modules/

# Archivos compilados
*.o
*.elf

# Archivos temporales de Arduino
build/

# Archivos grandes
*.mp4
*.zip
```

## Crear un repositorio

### Desde la web de GitHub

1. Ve a [github.com](https://github.com) e inicia sesión (o crea una cuenta).
2. Click en el botón verde **"New"** (o el **+** arriba a la derecha → "New repository").
3. Ponle nombre a tu repo (ejemplo: `monitoreo-huerto-uai`). Usa guiones, no espacios.
4. Agrega una descripción corta (ejemplo: "Sistema de monitoreo de humedad del suelo para huerto comunitario, Taller de Diseño UAI 2026").
5. Selecciona **Public** (para que el profe y ayudante puedan verlo).
6. Marca **"Add a README file"**: esto crea el archivo README.md inicial.
7. En "Add .gitignore", selecciona **"C++"** si tu proyecto es solo Arduino/ESP32, o **"Node"** si incluye un dashboard web.
8. Click en **"Create repository"**.

¡Listo! Ya tienes tu repo.

## Subir archivos desde la web

No necesitas instalar Git en tu computador para lo básico. Puedes subir archivos directamente desde la página web de GitHub:

### Subir archivos

1. Entra a tu repositorio en GitHub.
2. Click en **"Add file"** → **"Upload files"**.
3. Arrastra tus archivos o haz click para seleccionarlos.
4. Abajo, escribe un mensaje de commit que describa qué subiste (ejemplo: "Subir código del sensor de temperatura").
5. Click en **"Commit changes"**.

### Crear un archivo nuevo

1. En tu repo, click en **"Add file"** → **"Create new file"**.
2. Escribe el nombre del archivo arriba (ejemplo: `sensor.ino` o `README.md`).
3. Escribe o pega el contenido.
4. Abajo, escribe un mensaje de commit.
5. Click en **"Commit new file"**.

### Editar un archivo existente

1. Navega al archivo que quieres editar.
2. Click en el ícono del lápiz (✏️) arriba a la derecha del archivo.
3. Haz tus cambios.
4. Abajo, escribe un mensaje de commit describiendo qué cambiaste.
5. Click en **"Commit changes"**.

## ¿Qué es un archivo .md (Markdown)?

Los archivos `.md` usan un formato llamado **Markdown**: una forma simple de escribir texto con formato sin necesitar Word o Google Docs. GitHub los renderiza automáticamente con formato bonito.

### Sintaxis básica

```
# Título grande
## Subtítulo
### Sub-subtítulo

Texto normal. **Esto es negrita.** *Esto es cursiva.*

- Elemento de lista
- Otro elemento
  - Sub-elemento

1. Lista numerada
2. Segundo punto

[Texto del link](https://url.com)

![Texto alternativo](ruta/imagen.png)

`código inline`
```

### Bloques de código

Para mostrar código, usa triple backtick con el lenguaje:

````
```cpp
void setup() {
  Serial.begin(115200);
}
```
````

### Tablas

```
| Componente | Cantidad | Precio |
|---|---|---|
| ESP32 | 1 | $5.000 |
| DHT22 | 2 | $3.000 |
```

### Por qué importa

El README.md es lo primero que ve cualquiera que entre a tu repo. Si está vacío o mal escrito, da mala impresión. Si está bien hecho, demuestra profesionalismo y facilita que otros (incluido el profe) entiendan tu proyecto sin tener que preguntarte.

## Escribir un buen README.md

Tu README debe responder estas preguntas en orden:

### 1. ¿Qué es esto?

Nombre del proyecto y una descripción de 1-2 líneas.

```markdown
# MonitorHuerto 🌱

Sistema de monitoreo de humedad del suelo para el huerto comunitario del campus UAI.
Mide humedad, temperatura y luminosidad, y muestra los datos en un dashboard live.
```

### 2. ¿Qué problema resuelve?

Problemática y ODS relacionado.

```markdown
## Problemática

Los voluntarios del huerto riegan de forma irregular porque no hay forma de saber
el estado real del suelo. Esto provoca pérdida del 40% de los cultivos.

**ODS 12:** Producción y consumo responsables.
```

### 3. ¿Cómo funciona?

Diagrama o explicación del flujo del sistema.

```markdown
## Arquitectura

Sensor (DHT22 + capacitivo) → ESP32 → WiFi → Firebase → Dashboard React

![Diagrama](diagramas/arquitectura.png)
```

### 4. ¿Qué componentes usa?

Lista con especificaciones.

```markdown
## Componentes

| Componente | Modelo | Cantidad |
|---|---|---|
| Microcontrolador | ESP32 DevKit v1 | 1 |
| Sensor temperatura/humedad | DHT22 | 1 |
| Sensor humedad suelo | Capacitivo v1.2 | 2 |
| Batería | 18650 3.7V 3000mAh | 1 |
| Cargador | TP4056 con protección | 1 |
```

### 5. ¿Cómo lo replico?

Instrucciones paso a paso.

```markdown
## Instalación

1. Clonar el repositorio: `git clone https://github.com/usuario/monitorhuerto.git`
2. Abrir `codigo/sensor.ino` en Arduino IDE.
3. Instalar librerías: DHT (Adafruit), Firebase ESP Client (mobizt).
4. Configurar WiFi y credenciales de Firebase en el código.
5. Subir al ESP32.
```

### 6. ¿Dónde veo los datos?

Link al dashboard.

```markdown
## Dashboard

🔗 [Ver dashboard live](https://monitorhuerto.web.app)
```

### 7. ¿Quién lo hizo?

```markdown
## Equipo

- María González: Electrónica y sensores
- Juan Pérez: Dashboard y backend
- Ana López: Modelado 3D y documentación
```

## Estructura recomendada del repo

```
mi-proyecto/
├── README.md              ← Documentación principal
├── .gitignore             ← Archivos que Git debe ignorar
├── codigo/
│   └── sensor/
│       └── sensor.ino     ← Código del ESP32/Arduino
├── dashboard/
│   ├── index.html         ← Frontend del dashboard
│   ├── app.js
│   └── style.css
├── modelos-3d/
│   ├── carcasa.f3d        ← Archivo editable de Fusion 360
│   └── carcasa.stl        ← Exportado para impresión
├── diagramas/
│   ├── conexiones.png     ← Diagrama de circuito (Fritzing)
│   └── arquitectura.png   ← Diagrama del sistema
├── docs/
│   └── informe.pdf        ← Informe técnico
└── fotos/
    ├── prototipo-v1.jpg
    └── prototipo-final.jpg
```

## Buenas prácticas

- **Haz commits frecuentes** con mensajes claros. Mejor muchos commits pequeños que uno gigante al final.
- **Cada integrante debe tener commits.** Es evidencia de trabajo en equipo. Si una sola persona sube todo, no se ve colaboración.
- **No subas archivos enormes** (videos de más de 50MB, carpetas de dependencias). Usa `.gitignore`.
- **Sube fotos del proceso**, no solo del resultado final. El repo es tu bitácora.
- **Mantén el README actualizado.** No lo escribas solo al final del semestre.

## Errores comunes

- **Subir `node_modules/`**: Pesa cientos de MB y no sirve. Agrega `node_modules/` a `.gitignore`.
- **README vacío**: Un repo sin README es como un libro sin portada.
- **Un solo commit al final**: "subir todo el proyecto" el día de la entrega. Se nota, y no demuestra proceso.
- **Archivos sueltos sin estructura**: Todo en la raíz del repo. Organiza en carpetas.
- **No poner .gitignore**: Terminas subiendo archivos del sistema (.DS_Store, Thumbs.db) y basura.

## GitHub Pages (bonus)

Si tu dashboard es una página web estática (HTML + CSS + JS), puedes hostearla gratis en GitHub Pages:

1. Sube tus archivos del dashboard a una carpeta (por ejemplo `docs/` o `dashboard/`).
2. Ve a **Settings** → **Pages**.
3. En "Source", selecciona la rama `main` y la carpeta donde está tu HTML.
4. GitHub te da una URL pública: `https://usuario.github.io/nombre-repo/`.

Esto puede servir como la URL pública de tu dashboard si no usas Firebase Hosting, Railway, o Vercel.
