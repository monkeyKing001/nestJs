# first Nest JS


<details>
<summary> <font size="5"> Basic Typescript </font> </summary>
<div markdown="1">

## Basic Typescript

</div>
</details>



<details>
<summary> <font size="5"> Starting Project </font> </summary>
<div markdown="1">

## Starting Project

### dependency
1. install npm packages

```shell
sudo npm install @nestjs/common@7.6.17 \
		 @nestjs/core@7.6.17 \
		 @nestjs/platform-express@7.6.17 \
		 reflect-metadata@0.1.13 \
		 typescript@4.3.2
```


2. Configuration
```json
##tsconfig.json
{
	"compilerOptions": {
		"module" : "commonjs",
		"target" : "es2017",
		"experimentalDecorators" : true,
		"emitDecoratorMetadata" : true
	}
}
```

3. Server(Pipe, Guard, Controlloer, Service, Repository)

(1) Pipe
A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.

Pipes have two typical use cases:

transformation: transform input data to the desired form (e.g., from string to integer)
validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception
In both cases, pipes operate on the arguments being processed by a controller route handler. Nest interposes a pipe just before a method is invoked, and the pipe receives the arguments destined for the method and operates on them. Any transformation or validation operation takes place at that time, after which the route handler is invoked with any (potentially) transformed arguments.

Nest comes with a number of built-in pipes that you can use out-of-the-box. You can also build your own custom pipes. In this chapter, we'll introduce the built-in pipes and show how to bind them to route handlers. We'll then examine several custom-built pipes to show how you can build one from scratch.


(1) Controller
 Controllers are responsible for handling incoming requests and returning responses to the client.

A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

In order to create a basic controller, we use classes and decorators. Decorators associate classes with required metadata and enable Nest to create a routing map (tie requests to the corresponding controllers).

(1) Routing
In the following example we'll use the @Controller() decorator, which is required to define a basic controller. We'll specify an optional route path prefix of cats. Using a path prefix in a @Controller() decorator allows us to easily group a set of related routes, and minimize repetitive code. For example, we may choose to group a set of routes that manage interactions with a cat entity under the route /cats. In that case, we could specify the path prefix cats in the @Controller() decorator so that we don't have to repeat that portion of the path for each route in the file.


(1) Module

A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

Each application has at least one module, a root module. The root module is the starting point Nest uses to build the application graph - the internal data structure Nest uses to resolve module and provider relationships and dependencies. While very small applications may theoretically have just the root module, this is not the typical case. We want to emphasize that modules are strongly recommended as an effective way to organize your components. Thus, for most applications, the resulting architecture will employ multiple modules, each encapsulating a closely related set of capabilities.


(1) Services

(1) Controller

</div>
</details>
start from 6.24

