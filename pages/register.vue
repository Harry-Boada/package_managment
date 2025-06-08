<template>
  <main class="min-h-screen flex flex-col md:flex-row bg-gray-50">
    <!-- Panel izquierdo: Formulario de login -->
    <header class="w-full md:w-1/2 flex items-center justify-center p-8">
      <div class="w-full max-w-md">
        <div class="text-center mb-10 flex items-center space-x-2">
          <figure>
            <img src="/imagenes/package-box.svg" alt="logotipo Empresa" class="w-8 md:w-[68px]">
          </figure>
          <h1 class="text-3xl font-bold text-shipday-blue">OnPackage</h1>
          
        </div>
        <h2 class="mt-4 text-2xl font-semibold text-gray-800 text-center mb-10">Sign in to your account</h2>

        <form @submit.prevent="login" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-[#00857c]">Your name</label>
            <div class="mt-1">
              <input placeholder="Falcao Garcia" id="email" v-model="form.name" name="name" type="text" autocomplete="name" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-shipday-blue focus:border-shipday-blue sm:text-sm"/>
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-[#00857c]">Email address</label>
            <div class="mt-1">
              <input placeholder="ejemplo@correo.com" id="email" v-model="form.email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-shipday-blue focus:border-shipday-blue sm:text-sm"/>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-[#00857c]">Password</label>
            <div class="mt-1">
              <input placeholder="************"  id="password" v-model="form.password" name="password"  type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-shipday-blue focus:border-shipday-blue sm:text-sm"/>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-shipday-blue focus:ring-shipday-blue border-gray-300 rounded"/>
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-shipday-blue hover:text-[#00857c] ml-4">Forgot your password?</a>
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent  rounded-md p-2 text-[#ffffff] bg-[#008062] hover:shadow-sm hover:shadow-gray-400">Sign In
            </button>
          </div>
        </form>

        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            New to Shipday?
            <NuxtLink to="/login" class="font-medium hover:text-[#00857c]">
              Sign In
            </NuxtLink>
          </p>
        </div>
      </div>
    </header>

    <!-- Panel derecho: Testimonio -->
    <div class="hidden md:block w-full md:w-1/2 bg-[#00ad85]">
      <div class="h-full flex items-center justify-center p-12">
        <div class="max-w-md text-white">
          <div class="mb-8">
            <div class="inline-block bg-white bg-opacity-20 p-2 rounded-lg">
              <img src="/imagenes/falcao.webp" class="w-[100px]" alt="Experiencia James Rodriguez">
            </div>
          </div>
          
          <blockquote class="text-2xl leading-relaxed italic">
            "Usé OnPackage y mi envío llegó tan rápido que apenas me dio tiempo de pensarlo. ¡Envíos sin estrés, justo a tiempo!"
          </blockquote>
          
          <div class="mt-8 flex items-center">
            <div class="ml-4">
              <p class="text-lg font-semibold">Falcao Garcia</p>
              <p class="text-shipday-light-blue">Client.</p>
            </div>
          </div>
          
          <div class="mt-12 flex space-x-3">
            <div v-for="i in 4" :key="i" class="h-1 w-8 rounded-full" :class="i === 1 ? 'bg-white' : 'bg-white bg-opacity-30'"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define el tipo para el formulario
interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

// Estado del formulario
const form = ref<RegisterForm>({
  name: '',
  email: '',
  password: ''
});

// Función para manejar el login
const login = () => {
  // Aquí iría la lógica de autenticación
  console.log('Login attempt with:', form.value);
  // Normalmente haríamos una llamada API aquí
};
</script>
