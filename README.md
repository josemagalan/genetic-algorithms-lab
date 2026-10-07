# Genetic algorithms, step by step / Algoritmos genéticos, paso a paso

A bilingual, static portal for three teaching tools by José Manuel Galán, Silvia Díaz-de la Fuente, Virginia Ahedo, María Pereda and José Ignacio Santos, members of the Los Goonies research group.

Portal estático bilingüe que reúne tres herramientas docentes de los mismos autores:

| Tool / Herramienta | Application / Aplicación | Source / Código |
| --- | --- | --- |
| Selection / Selección | [selection-ga](https://josemagalan.github.io/selection-ga/) | [GitHub](https://github.com/josemagalan/selection-ga) |
| Crossover / Cruce | [crossover-ga](https://josemagalan.github.io/crossover-ga/) | [GitHub](https://github.com/josemagalan/crossover-ga) |
| Mutation / Mutación | [mutation-ga](https://josemagalan.github.io/mutation-ga/) | [GitHub](https://github.com/josemagalan/mutation-ga) |

## Uso local / Local use

Abre `index.html` en un navegador. Los enlaces y gráficos no necesitan servidor ni conexión; las aplicaciones enlazadas sí necesitan conexión. Para cambiar de idioma con una URL compartible, usa un servidor local:

Open `index.html` in a browser. Portal links and graphics work without a server or network connection; the linked applications require network access. For language switching with a shareable URL, use the local server:

```sh
npm start
```

Vista previa / Preview: [http://127.0.0.1:4173/](http://127.0.0.1:4173/).

No hay dependencias que instalar ni compilación. Node.js 22 o posterior solo es necesario para el servidor y las pruebas.

No installation or build is needed. Node.js 22 or later is only required for the preview server and tests.

## Idiomas / Languages

- Español: `?lang=es`. English: `?lang=en`.
- El idioma de la URL tiene prioridad; después se usa la elección guardada y el idioma del navegador.
- The URL language takes priority, followed by the saved choice and browser language.
- Los enlaces a herramientas y bancos Moodle conservan el idioma. / Tool and Moodle links preserve the language.
- Modo claro/oscuro según el sistema. / Light and dark appearance follows the system preference.

## Pruebas / Tests

```sh
npm test
```

Comprueban traducciones y nombres accesibles, prioridad del idioma, enlaces a aplicaciones y Moodle, navegación sin JavaScript, archivos locales y ausencia de recursos CDN.

Checks cover translations and accessible labels, language precedence, application and Moodle destinations, navigation without JavaScript, local assets and the absence of CDN resources.

## Publicación en GitHub Pages / Publishing to GitHub Pages

El nombre propuesto es `ga-tools`. Todavía no se ha creado ni conectado un repositorio remoto para este portal.

The proposed repository name is `ga-tools`. No remote repository has been created or connected for this portal yet.

Configuración contrastada con la [documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). / Configuration follows the official GitHub Pages documentation.

1. Crea un repositorio público y sube el contenido de esta carpeta a su raíz. / Create a public repository and upload this folder's contents to its root.
2. En **Settings → Pages**, elige **Deploy from a branch**, la rama del portal y **/(root)**. / In **Settings → Pages**, choose **Deploy from a branch**, the portal branch and **/(root)**.
3. Conserva `.nojekyll`. Las rutas de CSS, JavaScript e imágenes son relativas, por lo que funcionan bajo el nombre del repositorio. / Keep `.nojekyll`; relative asset paths work under the repository name.
4. Verifica la dirección publicada antes de aplicar los enlaces de vuelta en las tres aplicaciones. / Verify the published URL before applying the return links in the three applications.

Si se acepta `josemagalan/ga-tools`, la dirección prevista será `https://josemagalan.github.io/ga-tools/`. Esta dirección es una propuesta, no un despliegue verificado.

If `josemagalan/ga-tools` is chosen, the expected URL is `https://josemagalan.github.io/ga-tools/`. This is a proposal, not a verified deployment.

## Créditos y licencias / Credits and licenses

- Authors / Autores: José Manuel Galán¹, Silvia Díaz-de la Fuente², Virginia Ahedo¹, María Pereda³, José Ignacio Santos¹.
- ¹ Universidad de Burgos · ² Universidad de Salamanca · ³ Universidad Politécnica de Madrid.
- Research group / Grupo de investigación: Los Goonies.
- Code / Código: [MIT](LICENSE).
- Teaching content / Contenido docente: [CC BY 4.0](LICENSE-CONTENT.md).
- Los logotipos se reutilizan de `crossover-ga/img/logos/` y conservan los derechos de sus respectivas instituciones. / Logos are reused from `crossover-ga/img/logos/` and remain subject to their institutions' rights.
