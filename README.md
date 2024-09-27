# ChatGPT Local

Este proyecto es una implementación de un chat basado en IA que utiliza un modelo de lenguaje (LLM) ejecutado localmente en el navegador. A través de **Web Workers** y el motor `@mlc-ai/web-llm`, el modelo de IA puede generar respuestas en tiempo real, evitando la necesidad de enviar solicitudes a servidores externos.

## Características

- **IA en el navegador**: El motor de IA se ejecuta completamente en el navegador, eliminando la dependencia de servidores externos.
- **Web Workers**: Se utiliza un Web Worker para manejar el procesamiento de las respuestas de IA en segundo plano, asegurando que la interfaz de usuario permanezca fluida y receptiva.
- **Interfaz de usuario simple**: Un diseño de chat minimalista que permite al usuario interactuar con el modelo de IA.
- **Soporte para flujo de datos**: El motor de IA puede enviar respuestas de manera progresiva, mejorando la experiencia de usuario.

## Tecnologías utilizadas

- **HTML5**: Estructura de la interfaz del chat.
- **CSS3**: Estilos para la interfaz de usuario.
- **JavaScript (ES6+)**: Lógica de la aplicación.
  - **Módulos ES**: Se usan módulos para importar y gestionar dependencias.
  - **Web Workers**: Para el procesamiento en segundo plano.
- **MLC AI Engine**: `@mlc-ai/web-llm` es el motor encargado de ejecutar el modelo de lenguaje natural en el navegador.
- **Plantillas HTML**: Uso de `<template>` para crear mensajes dinámicamente.

## Requisitos

Este proyecto no requiere instalación de dependencias o configuración de servidores, ya que todo se ejecuta en el navegador. Solo necesitas un entorno compatible con **JavaScript ES6** y **Web Workers** (navegadores modernos como Chrome, Firefox, Edge, etc.).

## Instalación y uso

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/amanso23/chatgpt-local.git



