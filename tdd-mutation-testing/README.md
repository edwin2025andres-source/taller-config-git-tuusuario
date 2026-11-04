# TDD y Mutation Testing

Trabajo de investigación e implementación para Grupo 02. La página presenta las definiciones, ciclo Red-Green-Refactor, casos de uso, beneficios, límites, un diagrama y un laboratorio interactivo autónomo.

## Abrir el prototipo

Abre `index.html` en un navegador. No requiere instalación ni servidor. En el laboratorio:

1. Ejecuta el código original: las tres pruebas deben pasar.
2. Activa y ejecuta M1, M2 y M3, una variante a la vez.
3. Comprueba que las pruebas detecten cada cambio y observa cómo el puntaje llega al 100 % si los tres mutantes mueren.

El puntaje es `mutantes detectados / mutantes válidos × 100`. Un mutante sobrevive si las pruebas siguen pasando. El prototipo no incluye mutantes equivalentes ni errores de ejecución; herramientas como Stryker manejan más estados y casos.

## Ejemplo de TDD aplicado

Funcionalidad: calcular el precio tras un descuento porcentual.

1. **Red:** escribe `discount(100, 10) === 90`; falla porque la función aún no existe.
2. **Green:** implementa lo mínimo: `price * (1 - rate / 100)`; pasa.
3. **Refactor:** mejora nombres o estructura manteniendo las pruebas verdes.
4. Agrega casos para 0 % y otros importes; después evalúa si las pruebas detectarían mutaciones.

Los tres casos incluidos son 10 % de 100 → 90, 0 % de 80 → 80 y 20 % de 50 → 40. Las mutaciones didácticas ignoran el descuento, suman el porcentaje o dividen por una base incorrecta.

## Puntaje de mutación

`puntaje = (mutantes muertos / mutantes válidos) × 100`

Un mutante muerto ocasiona al menos una prueba fallida. Un sobreviviente no cambia el resultado observado por la suite. El porcentaje sirve para orientar mejoras, pero no certifica que el producto esté libre de defectos.

## Referencias

- [Martin Fowler: Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [Stryker Mutator: Documentation](https://stryker-mutator.io/docs/)
- [Stryker: Mutant states and metrics](https://stryker-mutator.io/docs/mutation-testing-elements/mutant-states-and-metrics/)
- [Martin Fowler: Workflows of Refactoring](https://martinfowler.com/articles/workflowsOfRefactoring/)

Completar integrantes del grupo antes de presentar.
