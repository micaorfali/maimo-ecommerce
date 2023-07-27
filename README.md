
# Taylor Swift Argentina - Ecommerce

Esta es una web de comercio electrónico que reúne una selección de productos diseñados y creados por increibles emprendedores argentinos, todos ellos inspirados en Taylor Swift.

## Propuesta de valor y concepto comercial

El objetivo es ofrecer una solución innovadora y atractiva para los fanáticos de Taylor Swift que buscan acceder a productos únicos y auténticos relacionados con su artista favorita. A diferencia de otras opciones, nuestra plataforma ofrece una amplia variedad de artículos exclusivos que reflejan la pasión y dedicación de los emprendedores locales.

#### Somos el puente que conecta a emprendedores locales y fanáticos de Taylor Swift.




## Deployed on Vercel

Link: https://maimo-ecommerce.vercel.app/

## Etapas del proyecto

### Etapa 1: 

Durante la cursada de la materia se desarrolló un ecommerce de venta de tops. En esta primer parte se desarrollaron las bases del proyecto con las features principales.

### Etapa 2:

En la preparación para la entrega del final se ideó una nueva propuesta comercial y concepto. Se expandieron las features previas.

1. Investigación del Branding de Taylor Swift (https://www.taylorswift.com/). Se utilizó Wayback Machine (https://web.archive.org/) para evaluar la evolución de su página web en el tiempo, en relación a sus nuevos lanzamientos.

2. Desk Researh sobre emprendedores locales relacionados a Taylor Swift en Argentina. 

3. Diseño de un UI Kit en Figma

4. Diseño de la web en Figma (https://www.figma.com/file/kitgw8YyboXUIOk7z8ALUG/Programaci%C3%B3n-3---Taylor-Swift?type=design&node-id=206%3A136&mode=design&t=wbs02saN3SOfac3x-1)

5. Implementación del diseño 

6. Se desarrollaron nuevas features como: vaciar carrito, eliminar un item, filtrar productos, contador de días

7. Testeo y corrección de errores
## Referencias de color
Como se mencionó previamente, este proyecto esta inspirado en Taylor Swift. Dejo asentadas las referencias de color que se usaron en distintas partes de la web

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Taylor Swift Branding| ![#AC9EB8](https://via.placeholder.com/10/AC9EB8?text=+) #AC9EB8 |
| Debut (Taylor Swift) | ![#095848](https://via.placeholder.com/10/095848?text=+) #095848 |
| Fearless | ![#E1B469](https://via.placeholder.com/10/E1B469?text=+) #E1B469 |
| Speak Now | ![#62286D](https://via.placeholder.com/10/62286D?text=+) #62286D |
| Red | ![#830D22](https://via.placeholder.com/10/830D22?text=+) #830D22 |
| 1989 | ![#4E9AB2](https://via.placeholder.com/10/4E9AB2?text=+) #4E9AB2 |
| Reputation | ![#474747](https://via.placeholder.com/10/474747?text=+) #474747 |
| Lover | ![#DB9DC2](https://via.placeholder.com/10/DB9DC2?text=+) #DB9DC2 |
| Folklore | ![#888888](https://via.placeholder.com/10/888888?text=+) #888888 |
| Evermore | ![#D1BB9C](https://via.placeholder.com/10/D1BB9C?text=+) #D1BB9C |
| Midnights | ![#133D65](https://via.placeholder.com/10/133D65?text=+) #133D65 |



## Environment Variables

Para correr este proyecto necesitarás las siguientes variables de entorno en un nuevo archivo .env ubicado en la raíz

`REACT_APP_API_KEY= `
`REACT_APP_AUTH_DOMAIN=` 
`REACT_APP_PROJECT_ID=` 
`REACT_APP_STORAGE_BUCKET=` `REACT_APP_MESSAGING_SENDER_ID= `
`REACT_APP_APP_ID=`


## Componentes

#### Aplicación
Wrapper principal de la aplicación con React Router.

#### Card
Card con el single product

#### CardContainer
Trae el contenido de la Card desde firebase

#### CartDetail
Carrito de compras con resumen de productos agregados, cantidad y precio

#### CategoryContainer
Contenedor de los productos del Shop

#### CheckoutContainer
Contenedor del contenido del Checkout

#### CheckoutForm
Formulario del Checkout y validaciones de los campos. Nombre, Email y teléfono

#### Common
Componentes con estilos para usar en toda la Web

#### Countdown
Número de los días restantes hasta el primer show

#### Footer
Footer con links a redes sociales 

#### Grid
Contenedor de grilla

#### Hero
Hero principal de la home con CTA al Shop

#### HomeContainer
Contenedor del contenido de la Home

#### Loader
Loader Mirrorball

#### NavBar
Navbar del meú superior principal

#### Product
Single product y add to cart

### Pages
- Category
- Checkout
- Home
- Product

### Contextos
#### CartContext
Contexto y proveedor para el carrito. Funciones de consulta y totalizador de productos.


## Correr localmente 

Clonar el proyecto

```bash
  git clone https://github.com/micaorfali/maimo-ecommerce.git
```

Ir al directorio del proyecto

```bash
  cd maimo-ecommerce
```

Instalar dependencias

```bash
  npm install
```

Comenzar

```bash
  npm start
```


#### Muchas gracias

