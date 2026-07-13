const a=`### El problema

Diseñaste una carcasa bonita en Fusion 360, la imprimiste, y... el sensor no entra, la placa queda suelta, y los cables no tienen espacio. Esto pasa cuando no mides bien o no dejas tolerancia.

### Paso 1: Mide todo antes de modelar

Usa un calibrador (pie de metro / vernier) para medir cada componente que va dentro de la carcasa:
- Largo, ancho y alto de la placa (ESP32, Arduino, etc.).
- Posición exacta de los agujeros de montaje.
- Dimensiones del sensor y su conector.
- Diámetro de cables y conectores.
- Tamaño de la batería y su portapilas.

Si no tienes calibrador, usa una regla, pero agrega más tolerancia.

### Paso 2: Tolerancia

La impresión 3D no es perfecta. Las piezas salen ligeramente más grandes o más pequeñas dependiendo de la impresora y el material.

Reglas generales:
- **Agujeros para tornillos**: diámetro del tornillo + 0.3mm.
- **Encaje de piezas**: agregar 0.3mm a cada lado para un encaje suelto, 0.15mm para un encaje ajustado.
- **Slots para placas**: ancho de la placa + 0.5mm.
- **Pasacables**: diámetro del cable + 1mm.

### Paso 3: Diseña soportes internos

Los componentes no deben quedar sueltos dentro de la carcasa. Diseña:
- **Rieles o guías** para que la placa se deslice y quede fija.
- **Pilares con agujeros** para insertos roscados o tornillos autorroscantes.
- **Clips o snap-fits** para tapar la carcasa sin tornillos (busca "snap fit design" en YouTube).
- **Separadores** para que los componentes no hagan contacto entre sí.

### Paso 4: Prueba en cartón primero

Antes de imprimir (que toma horas y gasta material), arma un mockup en cartón:
1. Imprime las vistas del modelo a escala 1:1 en papel.
2. Recorta y arma con cartón.
3. Mete los componentes reales adentro.
4. ¿Cabe todo? ¿Hay espacio para cables? ¿Puedes acceder al puerto USB para programar?

### Paso 5: Piensa en el acceso

Tu prototipo va a necesitar mantenimiento:
- ¿Puedes sacar la batería para cargarla?
- ¿Puedes conectar el USB para reprogramar sin desarmar todo?
- ¿El sensor queda expuesto donde necesita medir (no encerrado)?
- ¿Hay ventilación si algo genera calor?

### Checklist antes de imprimir

- [ ] Medí cada componente con calibrador.
- [ ] Agregué tolerancia (mínimo 0.3mm).
- [ ] Los componentes tienen soporte (no quedan sueltos).
- [ ] Hay espacio para cables y conectores.
- [ ] El puerto USB es accesible.
- [ ] El sensor queda expuesto correctamente.
- [ ] Probé con mockup de cartón.
`;export{a as default};
