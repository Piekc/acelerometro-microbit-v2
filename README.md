# acelerometro-microbit-v2

# Acelerómetro con micro:bit + Pantalla LCD I2C + Sonido 

Este es un proyecto que hice usando un micro:bit y una pantalla LCD I2C para mostrar en tiempo real la aceleración en los ejes **X, Y y Z**. También agregué una alerta visual y sonora si detecta un movimiento muy brusco. Es una versión mejorada del primer proyecto que hice anteriormente.

---

## Sobre mí

Hola, soy **Pía Flores**, tengo 18 años y estudio Ingeniería en Tecnologías Computacionales. Me interesa mucho aprender cosas nuevas con hardware y sensores. Este es uno de mis primeros proyectos con una pantalla LCD y acelerómetro 💙

---

##  ¿Qué hace este proyecto?

- Mide aceleración en **X, Y y Z**
- Muestra los valores en una **pantalla LCD 1602 I2C**
- Si detecta una aceleración anormal (como un golpe o caída):
  - Muestra una **calavera** en el micro:bit ☠️
  - Suena una **alarma** 🔔

---

##  Hardware usado

- micro:bit v2
- Pantalla LCD 1602 con adaptador I2C (dirección `0x3C`)
- Zumbador (buzzer) para la alarma
- Jumpers hembra-hembra
- Conexión por USB

---

##  Conexiones

| Pantalla LCD | micro:bit (adaptador) |
|--------------|------------------------|
| VCC          | 3V                     |
| GND          | GND                    |
| SDA          | Pin 20                 |
| SCL          | Pin 19                 |

 *La conexión fue hecha con un adaptador tipo edge connector para el micro:bit.*

---


### Conexión general con imágenes
![Conexión LCD a micro:bit](https://github.com/Piekc/acelerometro-microbit-v2/blob/e5187ffb5f49f3c711c8532de0f1a72a7160f876/Conexion%20LCD%20a%20microbit.jpeg)

### 📺 Pantalla encendida mostrando aceleraciones
![LCD funcionando](https://github.com/Piekc/acelerometro-microbit-v2/blob/2022c8afd8c6996869e60a427fde84e5fa2d0ec1/LCD%20funcionando.jpeg)

### 🧠 Vista superior del micro:bit
![Vista de arriba](https://github.com/Piekc/acelerometro-microbit-v2/blob/cd3df2450ae595d404de63d393bd69a8be851b65/Vista%20arriba.jpeg )
---

## Código

> El código está en el archivo `main.js` y fue hecho en MakeCode con JavaScript. 
Click on link: https://github.com/Piekc/acelerometro-microbit-v2/blob/ef20302134f03a3cba92fdccaf18f8ecaa899348/main.js
---

## Estado del proyecto

✅ Funcional – Mide aceleración, muestra en LCD y alerta con sonido  
🔜 Próximamente: versión con visualización de datos vía Bluetooth

---

##  Contacto

📧 piaf942@gmail.com

---

### Gracias por leer mi proyecto 🫶  
¡Estoy muy orgullosa de que después de un tiempo se logró! 🌸
