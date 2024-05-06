<template>
  <div class="container">
    <TituloPrimary titulo="Mis Proyectos" />
    <div class="flex flex-wrap justify-between">
      <article v-for="proyecto, index in proyectos" :key="index" class="group w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="relative max-w-xs overflow-hidden bg-cover bg-no-repeat mx-auto">
          <img
          alt=""
          :src="proyecto.img"
          class="h-56 w-full rounded-xl object-cover shadow-xl max-w-xs transition duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div class="px-4 py-2 max-w-80 mx-auto w-full">
          <a href="#">
            <h3 class="text-lg font-medium dark:text-white text-gray-900 max-w-xs text-center line-clamp-1 hover:line-clamp-none">{{ proyecto.titulo }}</h3>
          </a>
          <p class="max-w-xs  mt-2 line-clamp-3 text-sm/relaxed text-gray-500 hover:line-clamp-none ">
            {{ proyecto.descripcion }}
          </p>
          <!-- botones de repo y demo -->
          <div class="flex w-full justify-center gap-3 my-4">
            <ButtonPrimary contenido="Demo" :link="proyecto.demo" />
            <ButtonSecondary contenido="Codigo" :link="proyecto.repo" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>

const proyectos = [
  {
    img: "https://i.imgur.com/8KDnEE2.png",
    titulo: "E-commerce AluraGeek",
    descripcion: "E-commerce con login, sección de agregar, ver todos los productos y producto individual",
    repo: "https://github.com/David-Ostos/ONE---Ecommerce",
    demo: "https://one-ecommerce.vercel.app/index.html"
  },
  {
    img: "https://i.imgur.com/B94tRqJ.png",
    titulo: "Encriptador de texto",
    descripcion: "Challenge Alura Codificador",
    repo: "https://github.com/David-Ostos/Encriptador",
    demo: "https://david-ostos.github.io/Encriptador/"
  },
  {
    img: "https://i.imgur.com/xQ0v4nh.png",
    titulo: "Juego del ahorcado creado con HTML y JavaScript",
    descripcion: "Challenge Oracle",
    repo: "https://github.com/David-Ostos/Juego_del_ahorcado",
    demo: "https://david-ostos.github.io/Juego_del_ahorcado/"
  },
  {
    img: "https://i.imgur.com/CuUWaqG.png",
    titulo: "Notas App",
    descripcion: "Un gestor de notas donde se puede agregar, marcar como listas y eliminar, también se agrega la fecha y se agrupan dependiendo de la fecha correspondiente de su asignación",
    repo: "https://github.com/David-Ostos/JS-en-la-Web-Almacenando-datos-en-el-navegador",
    demo: "https://blog-notas-app.vercel.app/"
  },
  {
    img: "https://i.imgur.com/BZK6RHv.png",
    titulo: "Formulario para registro - PetShop",
    descripcion: "Clases de Oracle, donde se creo un formulario dinamico",
    repo: "https://github.com/David-Ostos/ONE-js-web-2",
    demo: "https://one-js-web-2.vercel.app/"
  }
]
</script>

<style>

</style>