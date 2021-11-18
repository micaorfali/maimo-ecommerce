# Stop It ecommerce de Tops

## Concepto comercial

Se desarrolla una tienda online de venta de tops de todos los colores, estilos y tamaños.

## Deployed on Vercel

Link: https://maimo-ecommerce.vercel.app/

## Mejoras a futuro
- Eliminar los css de las pages y usar styled components
- Usar los common elements en toda la web
- Botón de eliminar productos del carrito
- Botón de sumar y restar la cantidad de productos
- La forma en la que se ve el loading
- El style de los carteles que avisan cuando se agregó un producto al carrito
- Rever los Warnings

## Componentes

###  Aplicación
Wrapper principal de la aplicación con React Router.

### Card 
Card con el single product

### CardContainer
Trae el contenido de la Card desde firebase

###  CartDetail
Carrito de compras con resumen de productos agregados, cantidad y precio

###  CheckoutForm
Formulario del Checkout y validaciones de los campos. Nombre, Email y teléfono

###  Common
Componentes con estilos para usar en toda la Web

### Grid
Contenedor de grilla para productos

###  NavBar
Navbar con menú

### Product
Single product y add to cart

## Pages

### Category
### Checkout
### Home
### Product

##  Contextos

###  CartContext
Contexto y proveedor para el carrito. Funciones de consulta y totalización de productos.

