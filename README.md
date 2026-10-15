# Taller: configuración y Git

Repositorio de práctica para aprender a configurar una aplicación con variables de entorno y a colaborar con Git y GitHub.

> Completa tu nombre y grupo antes de entregar. Usa solamente valores ficticios: nunca guardes contraseñas, tokens ni claves en este repositorio.

## Datos del estudiante

- **Nombre:** _Escribe tu nombre_
- **Grupo:** _Escribe tu grupo_

## Requisitos

- Git
- Node.js 18 o superior
- Visual Studio Code (opcional, para usar la configuración de depuración)

## Ejecutar la práctica

1. Clona el repositorio y entra en la carpeta:

   ```bash
   git clone https://github.com/edwin2025andres-source/taller-config-git-tuusuario.git
   cd taller-config-git-tuusuario
   ```

2. Copia `.env.example` como `.env` y cambia `APP_MODE` por `prueba`. El archivo `.env` es local y está excluido por `.gitignore`.

3. Ejecuta el ejemplo:

   ```bash
   node app.js
   ```

   También puedes abrir `app.js` en VS Code y ejecutar la configuración **Ejecutar app.js**. Esta define `APP_MODE=desarrollo` mediante `.vscode/launch.json`.

4. Comprueba que Git no propone subir la configuración local:

   ```bash
   git status --short
   ```

## Qué demuestra este repositorio

- **Variable de entorno:** configuración que el proceso recibe al iniciarse y que el programa consulta en tiempo de ejecución. `APP_MODE` selecciona el ambiente; si no está definida, el ejemplo usa `local`.
- **`.env.example`:** plantilla con valores ficticios que sí se puede compartir. `.env` contiene la configuración local y se ignora.
- **`.gitignore`:** evita que Git empiece a rastrear `.env` y el archivo de práctica `borrame.txt`.
- **`git rm --cached`:** retira del índice un archivo que ya estaba rastreado, sin borrarlo de la carpeta local. La exclusión no elimina ese archivo de commits anteriores.
- **Gitflow básico:** `main` conserva la versión estable, `develop` integra trabajo y `feature/descripcion` contiene el cambio propuesto mediante un Pull Request hacia `develop`.

## Lo que aprendí

- Una variable de entorno permite cambiar la configuración que recibe un programa sin modificar su código.
- `.gitignore` evita incorporar archivos locales nuevos al índice de Git; no quita del historial un archivo que ya se había confirmado.
- `git rm --cached` deja de rastrear un archivo sin eliminar la copia local.
- Una rama `feature` aísla un cambio para que pueda revisarse en un Pull Request antes de integrarlo a `develop`.

## Flujo de ramas del taller

Partiendo de `main`, crea `develop` y publícala:

```bash
git switch main
git pull
git switch -c develop
git push -u origin develop
```

Crea una rama de función, añade una sección **Lo que aprendí** a este README y publica la rama:

```bash
git switch -c feature/descripcion
git add README.md
git commit -m "Agrega aprendizajes al README"
git push -u origin feature/descripcion
```

En GitHub, abre un Pull Request con base `develop` y compare `feature/descripcion`. Revisa el diff antes de integrar el cambio.

## Evidencias para la entrega

1. VS Code con el repositorio abierto y el primer commit visible en la terminal.
2. `.vscode/launch.json` y el programa mostrando el valor de `APP_MODE`.
3. `.gitignore` y `git status` sin `.env` entre los cambios propuestos.
4. GitHub mostrando `borrame.txt` retirado de la versión actual y la terminal con el commit correspondiente.
5. Pull Request de `feature/descripcion` hacia `develop` y su estado final.

Adjunta las capturas y responde: ¿qué es una variable de entorno?, ¿qué hace `.gitignore`?, ¿qué hace `git rm --cached`? y ¿qué se revisa en un Pull Request?

## Seguridad

No subas secretos. Si publicas una credencial real, revócala o cámbiala de inmediato. Un commit posterior que retire el archivo no lo elimina del historial anterior.
