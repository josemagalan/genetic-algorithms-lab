# Genetic algorithms, step by step / Algoritmos genéticos, paso a paso

A bilingual, static portal for genetic algorithm teaching tools, their source repositories and related scientific publications.

Portal estático bilingüe que reúne cinco herramientas docentes. La autoría y la licencia de cada herramienta se indican en sus repositorios y publicaciones:

| Tool / Herramienta | Application / Aplicación | Source / Código |
| --- | --- | --- |
| Selection / Selección | [selection-ga](https://josemagalan.github.io/selection-ga/) | [GitHub](https://github.com/josemagalan/selection-ga) |
| Crossover / Cruce | [crossover-ga](https://josemagalan.github.io/crossover-ga/) | [GitHub](https://github.com/josemagalan/crossover-ga) |
| Mutation / Mutación | [mutation-ga](https://josemagalan.github.io/mutation-ga/) | [GitHub](https://github.com/josemagalan/mutation-ga) |
| EvoTraveller | [Streamlit application / Aplicación](https://evotraveller.streamlit.app/) | [GitHub](https://github.com/jismartin/evotraveller) |
| SelectionMechanisms | [Shiny application / Aplicación](https://josemagalan.shinyapps.io/SelectionMechanisms/) | [GitHub](https://github.com/josemagalan/SelectionMechanisms) |

La serie de operadores enseña cada decisión paso a paso. EvoTraveller muestra un algoritmo completo aplicado al viajante. SelectionMechanisms permite comparar dinámicas de selección, convergencia y diversidad a lo largo de generaciones.

The operator series explains each decision step by step. EvoTraveller shows a complete algorithm applied to the travelling salesman problem. SelectionMechanisms compares selection, convergence and diversity dynamics across generations.

## Publicaciones / Publications

- **Publicado / Published (2025):** Santos, J. I., Ahedo, V., Pereda, M., Galán, J. M. *Interactive Visualization of Genetic Algorithm Solutions for the Traveling Salesman Problem: An Educational Tool*. In *Organizational Engineering, Coping with Complexity*, CIO 2024, Lecture Notes on Data Engineering and Communications Technologies, vol. 239, pp. 6–10. Springer. [DOI: 10.1007/978-3-031-82334-3_2](https://doi.org/10.1007/978-3-031-82334-3_2).
- **Aceptado, pendiente de publicación / Accepted, awaiting publication:** Galán, J. M., Díaz-de la Fuente, S., Ahedo, V., Pereda, M., Santos, J. I. *Visualizing Selection Pressure in Genetic Algorithms: An Interactive Tool for Convergence and Diversity Analysis*. CIO 2026; accepted for publication in Springer Lecture Notes. The final volume, pages and DOI will be added when available.

La aceptación del segundo artículo fue comunicada por el autor el 7 de octubre de 2026. No se distribuyen copias del manuscrito ni del PDF editorial desde este repositorio.

The second paper's acceptance was confirmed by the author on 7 October 2026. This repository does not distribute manuscript or publisher PDF copies.

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
- Los enlaces a la serie de operadores y bancos Moodle conservan el idioma. EvoTraveller y Shiny conservan sus direcciones oficiales. / Operator and Moodle links preserve the language. EvoTraveller and Shiny use their official URLs.
- Modo claro/oscuro según el sistema. / Light and dark appearance follows the system preference.

## Pruebas / Tests

```sh
npm test
```

Comprueban traducciones y nombres accesibles, prioridad del idioma, enlaces a aplicaciones y Moodle, navegación sin JavaScript, archivos locales y ausencia de recursos CDN.

Checks cover translations and accessible labels, language precedence, application and Moodle destinations, navigation without JavaScript, local assets and the absence of CDN resources.

## Publicación en GitHub Pages / Publishing to GitHub Pages

El nombre confirmado es `genetic-algorithms-lab`. El repositorio local está creado. Todavía no se ha conectado un repositorio remoto para este portal.

The confirmed name is `genetic-algorithms-lab`. The local repository exists. No remote repository has been connected for this portal yet.

Configuración contrastada con la [documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). / Configuration follows the official GitHub Pages documentation.

1. Crea un repositorio público y sube el contenido de esta carpeta a su raíz. / Create a public repository and upload this folder's contents to its root.
2. En **Settings → Pages**, elige **Deploy from a branch**, la rama del portal y **/(root)**. / In **Settings → Pages**, choose **Deploy from a branch**, the portal branch and **/(root)**.
3. Conserva `.nojekyll`. Las rutas de CSS, JavaScript e imágenes son relativas, por lo que funcionan bajo el nombre del repositorio. / Keep `.nojekyll`; relative asset paths work under the repository name.
4. Verifica la dirección publicada antes de aplicar los enlaces de vuelta en las tres aplicaciones. / Verify the published URL before applying the return links in the three applications.

Para `josemagalan/genetic-algorithms-lab`, la dirección prevista es `https://josemagalan.github.io/genetic-algorithms-lab/`. El despliegue sigue pendiente.

For `josemagalan/genetic-algorithms-lab`, the expected URL is `https://josemagalan.github.io/genetic-algorithms-lab/`. Deployment is still pending.

## Créditos y licencias / Credits and licenses

- Operator series and SelectionMechanisms authors / Autores de la serie de operadores y SelectionMechanisms: José Manuel Galán¹, Silvia Díaz-de la Fuente², Virginia Ahedo¹, María Pereda³, José Ignacio Santos¹.
- EvoTraveller publication authors / Autores de la publicación de EvoTraveller: José Ignacio Santos, Virginia Ahedo, María Pereda, José Manuel Galán.
- ¹ Universidad de Burgos · ² Universidad de Salamanca · ³ Universidad Politécnica de Madrid.
- Research group / Grupo de investigación: Los Goonies.
- Code / Código: [MIT](LICENSE).
- Teaching content / Contenido docente: [CC BY 4.0](LICENSE-CONTENT.md).
- Los logotipos se reutilizan de `crossover-ga/img/logos/` y conservan los derechos de sus respectivas instituciones. / Logos are reused from `crossover-ga/img/logos/` and remain subject to their institutions' rights.
