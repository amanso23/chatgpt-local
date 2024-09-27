// Beneficios de usar Web Workers:
// Evita el bloqueo de la interfaz de usuario (UI): Sin Web Workers, todas las operaciones en JavaScript se ejecutan en un único hilo, el mismo que controla la UI. 
// Si ejecutas tareas intensivas (como procesar datos de un modelo de IA) en este hilo, podrías hacer que la página se vuelva lenta o poco receptiva. 
// Con un Web Worker, esas tareas se ejecutan en paralelo sin afectar la fluidez de la UI.
// Mejor rendimiento en tareas intensivas: Operaciones costosas en términos de tiempo de procesamiento, 
// como el uso de modelos de IA o cálculos matemáticos complejos, pueden realizarse sin impacto perceptible en el rendimiento de la página.
// Mejor experiencia de usuario (UX): Dado que la página no se "congela" mientras realiza operaciones complejas, la experiencia del usuario es más fluida y sin interrupciones.

import { WebWorkerMLCEngineHandler , MLCEngine } from "https://esm.sh/@mlc-ai/web-llm";

const engine = new MLCEngine()
const handler = new WebWorkerMLCEngineHandler(engine)

onmessage = msg =>{
    handler.onmessage(msg)
}

