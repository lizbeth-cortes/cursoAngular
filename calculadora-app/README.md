# Aplicación Calculadora

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.0.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Creación de componentes

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Descripción 

Esta aplicación permite realizar una suma simple de dos números y mostrar el resultado.

## Componentes

### AppComponent

Es el componente principal que contiene el título de la aplicación, el componente `formulario` y el componente `resultado`.

- **procesarResultado**: Método que se llama cuando se emite el evento `resultadoSuma` desde el componente `formulario`. Este método actualiza el valor de `resultadoPadre`.

### FormularioComponent

Es el componente hijo que contiene el formulario para ingresar los operandos A y B y tiene un botón para realizar la suma.

- **sumar**: Método que realiza la suma de `operandoA` y `operandoB`, y emite el resultado a través del evento `resultadoSuma`.

### ResultadoComponent

Es el componente hijo que muestra el resultado de la suma.

- **resultadoHijo**: Propiedad de entrada (`@Input`) que recibe el valor de `resultadoPadre` desde el componente `AppComponent`.

## Flujo de Datos

1. **AppComponent**: Contiene el componente `formulario` y el componente `resultado`. El método `procesarResultado` actualiza `resultadoPadre` cuando se emite el evento `resultadoSuma` desde `FormularioComponent`.

2. **FormularioComponent**: Emite el resultado de la suma de `operandoA` y `operandoB` a través del evento `resultadoSuma`.

3. **ResultadoComponent**: Muestra el resultado de la suma recibido a través de la propiedad `resultadoHijo`.

Este flujo permite que la entrada de datos se maneje en `FormularioComponent`, el cálculo y emisión del evento hacia el padre `AppComponent`, y la visualización del resultado en `ResultadoComponent`.
