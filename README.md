# Genetic algorithms, step by step / Algoritmos genéticos, paso a paso

A bilingual, static portal for genetic algorithm teaching tools, their source repositories and related scientific publications.

[Open the portal / Abrir el portal](https://josemagalan.github.io/genetic-algorithms-lab/)

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

El portal está publicado en [GitHub Pages](https://josemagalan.github.io/genetic-algorithms-lab/) desde [josemagalan/genetic-algorithms-lab](https://github.com/josemagalan/genetic-algorithms-lab), rama `main`, carpeta raíz. Los cambios enviados a `main` se publican automáticamente.

The portal is published on GitHub Pages from the `main` branch and repository root. Changes pushed to `main` are deployed automatically.

Configuración contrastada con la [documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). / Configuration follows the official GitHub Pages documentation.

Para publicar una copia / To publish a fork:

1. Sube el contenido de esta carpeta a la raíz del repositorio público. / Upload this folder's contents to the public repository root.
2. En **Settings → Pages**, elige **Deploy from a branch**, `main` y **/(root)**. / In **Settings → Pages**, choose **Deploy from a branch**, `main` and **/(root)**.
3. Conserva `.nojekyll` y las rutas relativas de CSS, JavaScript e imágenes. / Keep `.nojekyll` and relative asset paths.
4. Usa la dirección de tu copia para los enlaces de vuelta. / Use your fork's published URL for return links.

Selección, cruce y mutación incluyen un enlace global de vuelta al portal que conserva el idioma. Sus README también enlazan al portal.

Selection, crossover and mutation include a global return link that preserves the language. Their README files also link to this portal.

## Créditos y licencias / Credits and licenses

- Operator series and SelectionMechanisms authors / Autores de la serie de operadores y SelectionMechanisms: José Manuel Galán¹, Silvia Díaz-de la Fuente², Virginia Ahedo¹, María Pereda³, José Ignacio Santos¹.
- EvoTraveller publication authors / Autores de la publicación de EvoTraveller: José Ignacio Santos, Virginia Ahedo, María Pereda, José Manuel Galán.
- ¹ Universidad de Burgos · ² Universidad de Salamanca · ³ Universidad Politécnica de Madrid.
- Research group / Grupo de investigación: Los Goonies.
- Code / Código: [MIT](LICENSE).
- Teaching content / Contenido docente: [CC BY 4.0](LICENSE-CONTENT.md).
- Los logotipos se reutilizan de `crossover-ga/img/logos/` y conservan los derechos de sus respectivas instituciones. / Logos are reused from `crossover-ga/img/logos/` and remain subject to their institutions' rights.
