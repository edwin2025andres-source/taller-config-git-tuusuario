# Ejemplo Git: TDD para calcular un descuento

Este ejercicio crea una rama, agrega primero los casos de prueba, implementa la función, revisa el cambio y publica un Pull Request a `develop`. Usa Node.js 18 o superior; no requiere paquetes de terceros porque emplea `node:test`.

## 1. Crear una rama de trabajo

Desde la raíz del repositorio:

```bash
git switch develop
git pull origin develop
git switch -c feature/tdd-descuento
```

## 2. Escribir los casos antes de la implementación

Crea `tdd-mutation-testing/discount.test.js`:

```js
const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateDiscount } = require("./discount");

test("aplica un descuento del 10 % a 100", () => {
  assert.equal(calculateDiscount(100, 10), 90);
});

test("no cambia el precio cuando el descuento es 0 %", () => {
  assert.equal(calculateDiscount(80, 0), 80);
});

test("aplica un descuento del 20 % a 50", () => {
  assert.equal(calculateDiscount(50, 20), 40);
});
```

Guarda y confirma el primer cambio. En este punto el módulo de producción todavía no existe; al ejecutar la suite, Node informará que no puede cargar `discount.js`. Ese es el primer resultado rojo.

```bash
git add tdd-mutation-testing/discount.test.js
git commit -m "test: agrega casos para descuento"
node --test tdd-mutation-testing/discount.test.js
```

## 3. Implementar el comportamiento mínimo

Crea `tdd-mutation-testing/discount.js`:

```js
function calculateDiscount(price, percentage) {
  return price * (1 - percentage / 100);
}

module.exports = { calculateDiscount };
```

Ejecuta la suite y confirma el cambio cuando los tres casos pasen:

```bash
node --test tdd-mutation-testing/discount.test.js
git add tdd-mutation-testing/discount.js
git commit -m "feat: calcula descuento porcentual"
```

Como paso de refactorización, expresa la tasa como una variable con nombre y vuelve a ejecutar las pruebas:

```js
function calculateDiscount(price, percentage) {
  const discountRate = percentage / 100;
  return price * (1 - discountRate);
}

module.exports = { calculateDiscount };
```

```bash
node --test tdd-mutation-testing/discount.test.js
git add tdd-mutation-testing/discount.js
git commit -m "refactor: aclara la tasa de descuento"
```

## 4. Revisar una mutación

Prueba temporalmente esta implementación defectuosa:

```js
function calculateDiscount(price, percentage) {
  return price * (1 + percentage / 100);
}
```

Vuelve a ejecutar `node --test tdd-mutation-testing/discount.test.js`: los casos con descuento positivo deben fallar. Inspecciona el cambio y luego restaura la fórmula correcta:

```bash
git diff -- tdd-mutation-testing/discount.js
git restore tdd-mutation-testing/discount.js
node --test tdd-mutation-testing/discount.test.js
```

La edición temporal no se confirma. Así se ilustra manualmente una mutación muerta: una prueba falla cuando el error simulado está activo.

## 5. Revisar y publicar la rama

```bash
git status --short
git diff --check
git log --oneline --graph --decorate -5
git push -u origin feature/tdd-descuento
```

En GitHub abre un Pull Request con base `develop` y compare `feature/tdd-descuento`. Revisa el diff y el resultado de las pruebas antes de integrar.

Un historial posible se ve así:

```text
* feat: calcula descuento porcentual
* test: agrega casos para descuento
* (base develop)
```

El ejemplo de Mutation Testing es manual: se cambia un operador, se comprueba si las pruebas fallan y se revierte el cambio. La página interactiva del proyecto automatiza tres variantes didácticas.
