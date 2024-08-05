# Aplicación de Encriptación Desencriptación de Textos

Esta aplicación está diseñada para encriptar y desencriptar textos, permitiendo intercambiar mensajes secretos con otras personas.

## Método de Encriptación

Utilizamos las siguientes "llaves" de encriptación:

- La letra `e` se convierte en `enter`.
- La letra `i` se convierte en `imes`.
- La letra `a` se convierte en `ai`.
- La letra `o` se convierte en `ober`.
- La letra `u` se convierte en `ufat`.

## Requisitos

- La aplicación debe funcionar exclusivamente con letras minúsculas.
- No se deben utilizar letras acentuadas ni caracteres especiales.
- Debe ser posible convertir un texto a su versión encriptada y revertir un texto encriptado a su versión original.

## Ejemplos

- Texto original: `gato` → Texto encriptado: `gaitober`
- Texto encriptado: `gaitober` → Texto original: `gato`

## Interfaz de la Página Web

La aplicación incluye:

- Campos para ingresar el texto que se encriptará o desencriptará.
- Una opción para elegir entre encriptar o desencriptar.
- Un área para mostrar el resultado final en la pantalla.

## Tecnologías

* **Frontend:** HTML, CSS, JavaScript, **Toastr** (para notificaciones al usuario)
---

