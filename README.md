# Genetic Algorithms Lab / Laboratorio de algoritmos genéticos

A bilingual, static portal for genetic algorithm teaching modules, simulators, a book, their source repositories and related scientific publications.

[Open the portal / Abrir el portal](https://josemagalan.github.io/genetic-algorithms-lab/)

Portal estático bilingüe que reúne cinco módulos interactivos, dos simuladores y un libro, *Evolución a la vista*. La autoría y la licencia de cada recurso se indican en sus repositorios y publicaciones:

## Estado, versiones y archivo / Status, versions and archiving

El portal está en la versión **1.0.0**; el libro conserva su identificación como beta. El portal, el libro y cada herramienta tienen sus propias versiones; una entrega del portal no cambia automáticamente la versión de los demás recursos.

The portal is at version **1.0.0**; the book retains its beta status. The portal, book and individual tools are versioned separately; a portal release does not automatically change the other resources' versions.

El [inventario de herramientas](HERRAMIENTAS.md), también disponible como [JSON](herramientas.json), identifica las siete aplicaciones externas, sus repositorios, commits consultados y revisados, commits y fechas de ejecución de ejemplos registrados en el libro, autorías y licencias. Distingue la revisión del repositorio de la comprobación del servicio desplegado.

The [tool inventory](HERRAMIENTAS.md), also available as [JSON](herramientas.json), records the seven external applications, their repositories, consulted and reviewed commits, example commits and execution dates recorded by the book, authorship and licences. Repository review is distinct from checking the deployed service.

Una entrega archivada de este repositorio conserva los archivos del portal y su inventario. Los enlaces no archivan el código de las herramientas, sus dependencias, las aplicaciones desplegadas, el libro ni las publicaciones. Cada recurso conserva su autoría y licencia.

An archived release of this repository preserves the portal files and its inventory. Links do not archive tool source code, dependencies, deployed applications, the book or publications. Each resource retains its own authorship and licence.

Para citar el portal, consulta [CITATION.cff](CITATION.cff). El DOI de versión se incorporará cuando exista una entrega archivada; la dirección de GitHub Pages sigue siendo el acceso a la web activa.

To cite the portal, see [CITATION.cff](CITATION.cff). A version DOI will be added when an archived release exists; the GitHub Pages address remains the entry point for the live website.

<!-- ga-series-links:start -->
## Teaching resources / Materiales docentes

[Portal en español](https://josemagalan.github.io/genetic-algorithms-lab/?lang=es) · [Portal in English](https://josemagalan.github.io/genetic-algorithms-lab/?lang=en)

| Resource / Recurso | Use or read / Usar o leer | Repository / Repositorio |
| --- | --- | --- |
| Portal: Genetic Algorithms Lab / Laboratorio de algoritmos genéticos | [Open / Abrir](https://josemagalan.github.io/genetic-algorithms-lab/) | [GitHub](https://github.com/josemagalan/genetic-algorithms-lab) |
| Representation / Representación | [Open / Abrir](https://josemagalan.github.io/representation-ga/) | [GitHub](https://github.com/josemagalan/representation-ga) |
| Initialisation and evaluation / Inicialización y evaluación | [Open / Abrir](https://josemagalan.github.io/initialization-and-evaluation-ga/) | [GitHub](https://github.com/josemagalan/initialization-and-evaluation-ga) |
| Selection / Selección | [Open / Abrir](https://josemagalan.github.io/selection-ga/) | [GitHub](https://github.com/josemagalan/selection-ga) |
| Crossover / Cruce | [Open / Abrir](https://josemagalan.github.io/crossover-ga/) | [GitHub](https://github.com/josemagalan/crossover-ga) |
| Mutation / Mutación | [Open / Abrir](https://josemagalan.github.io/mutation-ga/) | [GitHub](https://github.com/josemagalan/mutation-ga) |
| EvoTraveller | [Open / Abrir](https://evotraveller.streamlit.app/) | [GitHub](https://github.com/jismartin/evotraveller) |
| SelectionMechanisms | [Open / Abrir](https://josemagalan.shinyapps.io/SelectionMechanisms/) | [GitHub](https://github.com/josemagalan/SelectionMechanisms) |
| Book / Libro: *Evolución a la vista* | [Read / Leer](https://josemagalan.github.io/genetic-algorithms-lab-book/) | [GitHub](https://github.com/josemagalan/genetic-algorithms-lab-book) |

El libro está en versión beta: su contenido y estructura pueden cambiar. / The book, in Spanish, is in beta: its content and structure may change.
<!-- ga-series-links:end -->

La serie interactiva cubre representación, inicialización, evaluación, selección, cruce y mutación paso a paso. EvoTraveller muestra un algoritmo completo aplicado al viajante. SelectionMechanisms permite comparar dinámicas de selección, convergencia y diversidad. El libro *Evolución a la vista*, todavía en construcción, organiza estos materiales en un itinerario con explicaciones, actividades y ejercicios.

The interactive series covers representation, initialisation, evaluation, selection, crossover and mutation step by step. EvoTraveller shows a complete algorithm applied to the travelling salesman problem. SelectionMechanisms compares selection, convergence and diversity dynamics. The book *Evolución a la vista* (in Spanish), still a work in progress, organises these materials into a route with explanations, activities and exercises.

## Publicaciones / Publications

- **Publicado / Published (2025):** Santos, J. I., Ahedo, V., Pereda, M., Galán, J. M. *Interactive Visualization of Genetic Algorithm Solutions for the Traveling Salesman Problem: An Educational Tool*. In *Organizational Engineering, Coping with Complexity*, CIO 2024, Lecture Notes on Data Engineering and Communications Technologies, vol. 239, pp. 6–10. Springer. [DOI: 10.1007/978-3-031-82334-3_2](https://doi.org/10.1007/978-3-031-82334-3_2).
- **Aceptado, pendiente de publicación / Accepted, awaiting publication:** Galán, J. M., Díaz-de la Fuente, S., Ahedo, V., Pereda, M., Santos, J. I. *Visualizing Selection Pressure in Genetic Algorithms: An Interactive Tool for Convergence and Diversity Analysis*. CIO 2026; accepted for publication in Springer Lecture Notes. The final volume, pages and DOI will be added when available.

La aceptación del segundo artículo fue comunicada por el autor el 7 de octubre de 2026. No se distribuyen copias del manuscrito ni del PDF editorial desde este repositorio.

The second paper's acceptance was confirmed by the author on 7 October 2026. This repository does not distribute manuscript or publisher PDF copies.

## Uso local / Local use

Abre `index.html` en un navegador. La interfaz y los gráficos del portal funcionan sin servidor ni conexión; abrir las aplicaciones, el libro, los repositorios y las publicaciones enlazados requiere conexión. Para cambiar de idioma con una URL compartible, usa un servidor local:

Open `index.html` in a browser. The portal interface and graphics work without a server or network connection; opening the linked applications, book, repositories and publications requires network access. For language switching with a shareable URL, use the local server:

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
- Los pasos del ciclo con pantalla propia la abren directamente: crear la población inicial (`item=uniform`), evaluar (`item=pipeline`) y reemplazar (`op=elitism`); las pantallas admitidas están en `screens` (`js/content.js`). / Cycle steps with their own screen open it directly; allowed screens are listed in `screens`.
- Los enlaces a los cinco módulos y sus bancos Moodle disponibles conservan el idioma. EvoTraveller, Shiny y el libro conservan sus direcciones oficiales. / Module links and available Moodle banks preserve the language. EvoTraveller, Shiny and the book use their official URLs.
- Modo claro/oscuro según el sistema. / Light and dark appearance follows the system preference.

## Pruebas / Tests

```sh
npm test
```

Comprueban traducciones y nombres accesibles, prioridad del idioma, enlaces a aplicaciones, pantallas concretas y Moodle, el enlace al libro de la portada, el alcance de las licencias, la vía de comentarios, navegación sin JavaScript, archivos locales y ausencia de recursos CDN.

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

Los cinco módulos incluyen un enlace global de vuelta al portal que conserva el idioma. Sus README también enlazan al portal.

All five modules include a global return link that preserves the language. Their README files also link to this portal.

## Comentarios / Feedback

Los comentarios sobre el portal van a los *issues* de este repositorio (plantillas: errata, enlace o resultado distinto, problema de uso, sugerencia); los del libro, a su formulario («Enviar un comentario sobre esta página» en cada página). Quien no use GitHub puede escribir a los autores a través de sus páginas, enlazadas en «Sobre el proyecto». / Portal feedback goes to this repository's issues; book feedback, to the book's form. Without GitHub, write to the authors through their pages.

## Créditos y licencias / Credits and licenses

- Genetic algorithms lab and SelectionMechanisms authors / Autores del laboratorio de algoritmos genéticos y SelectionMechanisms: José Manuel Galán¹\* ([ORCID 0000-0003-3360-7602](https://orcid.org/0000-0003-3360-7602)), Silvia Díaz-de la Fuente² ([ORCID 0000-0002-5961-3368](https://orcid.org/0000-0002-5961-3368)), Virginia Ahedo¹ ([ORCID 0000-0002-9812-388X](https://orcid.org/0000-0002-9812-388X)), María Pereda³ ⁴ ([ORCID 0000-0002-6151-1176](https://orcid.org/0000-0002-6151-1176)), José Ignacio Santos¹ ([ORCID 0000-0002-6653-043X](https://orcid.org/0000-0002-6653-043X)). \* Corresponding author / Autor de correspondencia.
- EvoTraveller publication authors / Autores de la publicación de EvoTraveller: José Ignacio Santos, Virginia Ahedo, María Pereda, José Manuel Galán.
- ¹ Departamento de Ingeniería de Organización, Escuela Politécnica Superior, Universidad de Burgos. Edificio A1, Avda. Cantabria s/n, 09006 Burgos, Spain.
- ² Departamento de Cartografía e Ingeniería del Terreno, Escuela Politécnica Superior de Ávila, Universidad de Salamanca. Hornos Caleros 50, 05003 Ávila, Spain.
- ³ Grupo de investigación Ingeniería de Organización y Logística (IOL), Escuela Técnica Superior de Ingenieros Industriales, Universidad Politécnica de Madrid. C/ José Gutiérrez Abascal 2, 28006 Madrid, Spain.
- ⁴ Grupo Interdisciplinar de Sistemas Complejos, Madrid, Spain.
- Research group / Grupo de investigación: Los Goonies.
- Code / Código: [MIT](LICENSE).
- Teaching content / Contenido docente: [CC BY 4.0](LICENSE-CONTENT.md).
- Estas licencias son las del portal y no se extienden a los recursos enlazados: el libro tiene licencia CC BY 4.0 para el texto y MIT para el código, y cada herramienta indica la suya en su repositorio. / These licenses cover the portal only; the book (CC BY 4.0 text, MIT code) and each tool state their own.
- Los logotipos se reutilizan de `crossover-ga/img/logos/` y conservan los derechos de sus respectivas instituciones. / Logos are reused from `crossover-ga/img/logos/` and remain subject to their institutions' rights.
