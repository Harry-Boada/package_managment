<template class="dark">
  <main class="" id="recommended">
    <header class="bg-[#ffffff] w-full shadow-custom-light">
      <div class="flex flex-row justify-between items-center px-4 py-3">

    <!-- LOGO + NOMBRE -->
    <div class="flex items-center space-x-2">
      <figure>
        <img src="/imagenes/package-box.svg" alt="logotipo Empresa" class="w-8 md:w-[68px]">
      </figure>
      <p class="text-black font-semibold text-[14px] md:text-[16px] tracking-wide">
        OnPackage
      </p>
    </div>

    <!-- NAVBAR -->
    <nav class="hidden md:flex space-x-6 text-black text-[14px] items-center">
      <a href="#problema" class="hover:text-[#00857c]">Casos de envio</a>
      <a href="#poblacional-section" class="hover:text-[#00857c]">Precios</a>
      <a href="#logistica-section" class="hover:text-[#00857c]">Socios</a>
      <a href="#conclusion" class="hover:text-[#00857c]">Entrega</a>
      <a href="#footer" class="hover:text-[#00857c]">Sobre nosotros</a>
    </nav>

    <!-- BOTONES DERECHA -->
    <div class="hidden md:flex items-center space-x-4">
      <button class="text-black font-semibold">Inicia sesión</button>
      <button class="rounded-md p-2 text-[#ffffff] bg-[#008062] hover:shadow-sm hover:shadow-gray-400">
        Registrate
      </button>
    </div>

    <!-- BOTÓN HAMBURGUESA (MÓVIL) -->
    <div class="md:hidden">
      <button @click="toggleMenu" class="p-2 focus:outline-none" aria-label="Toggle menu">
        <img src="/imagenes/menu.svg" alt="Menu" class="w-6 h-6" />
      </button>
    </div>
  </div>

  <!-- MENÚ MÓVIL -->
  <nav class="md:hidden" :class="showMenu ? 'block' : 'hidden'">
    <ul class="flex flex-col space-y-4 text-black text-[12px] pl-4 py-4">
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#problema">Casos de envio</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#poblacional-section">Precios</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#logistica-section">Socios</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#conclusion">Entrega</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#footer">Sobre nosotros</a></li>
      <div class="flex flex-col space-y-2 pt-4">
        <button class="rounded-md p-2 text-[#ffffff] bg-[#008062] hover:shadow-sm hover:shadow-gray-400">Inicia sesión</button>
        <button class="rounded-md p-2 text-[#008062] bg-[#ffffff] shadow-sm shadow-gray-400">Registrate</button>
      </div>
    </ul>
  </nav>
    </header>

    <section class="w-full">
      <section id="software_experience" class="px-2 grid grid-cols-1 md:grid-cols-2 place-content-center md:mt-10">
        <article class="md:mt-10 mr-4">
          <h1 class="font-bold text-2xl text-center">
          Software de gestión de entrega de paquetes de mensajería 
          <span class="text-gradient bg-gradient-to-r from-[#00a324] via-[#00ad85] to-[#00ad85] bg-clip-text text-transparent"> impulsado por IA</span>
          </h1>
          <p class="py-4 text-sm text-justify">
            Envia paquetes a todo el mundo con nuestrta app, te ofrecemos lealtaad, confiabilidad, seguridad en tus compras y/o paquetes con la plataforma de gestión de entregas basada en inteligencia artificial de OnPackage. Gestiona tus entregas como quieras y con facilidad, haz un seguimiento de los pedidos y deleitate por el tiempo que entrega rapido y eficaz, todo en un solo lugar. 🚛
          </p>

          <div class="w-full flex flex-col justify-between md:flex-row">
            <button @click="" class="w-full md:w-1/3 mb-4 text-md rounded-md mx-auto p-2 text-[#ffff] bg-[#008062] cursor-pointer hover:shadow-sm hover:shadow-gray-400" aria-label="Toggle menu">Inicia sesión</button>
          <button @click="" class="w-full md:w-1/3 mb-4 text-md rounded-md mx-auto p-2 text-[#008062] bg-[#ffff] cursor-pointer shadow-sm hover:shadow-[#00857c]" aria-label="Toggle menu">Registrate</button>
          </div>

          
        </article>

        <article id="experience" class="relative rounded-xl overflow-hidden w-11/12 max-w-lg h-9/12 mx-auto my-10 md:my-0 shadow-md transition-all duration-5000 ease-in-out">
          <img :src="current.image" alt="Experiencia de usuario" class="w-full h-full object-cover brightness-50"/>
          <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <p class="text-lg font-semibold italic">{{ current.comment }}</p>
          <div class="mt-4 text-sm font-light">
          <span class="font-bold text-white">{{ current.name }}</span> • <span>{{ current.location }}</span>
        </div>
    </div>
  </article>
        
      </section>

      <section id="colaborate" class="grid place-content-center">
        <h4 class="font-semibold">
          Con la confianza de más de 2M de usuarios en 60 países 
        </h4>

        <div class="grid w-full grid-cols-3 py-8">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErElEQVR4nO1bZ4hVRxT+fGrQGNEIxkbUoD8kBiyrPywYJbFAFFFQUPdJ/GHUEHsDRdHYlgQLNogFIkqiLuwPRUEUFcGOsUWwoD8sCWKIbux15cAsfDt7y9z35nrnefPBwIN75jvnnrlTzpzzACADIAtgtkfLqud+COrrUpsGoBeAGl4vMRpARUCTF/RDWF/X2mEATfSXyIZ0Kg5wQFhfF9spADX1z7gYQIlHKzaYAn59XWqbALwkJwxBCvETOWA5UoiJ5IB1SCEWkgN+RAqxlhwwGSnEdnLAKKQQB8gB/cOEMxZOeNO8Dh0KsnWO1/fjPNEYwFQAnX2enyUHdAkjG23p0LHXg3sQPZ8AOxBHnlCcDwF85CFzk/R+FkaYjdEB8+j5Ijvvjx+I84mPA56QTP0wwoyFE55Mg088uDeTId9ZePnmAMqJc76HzIf0/BkSxr4oi5EByojvKoA6HjItSeYOEsZxMqZ9nlwjtCnn59DOJHMeCeMCGdMqDx7ZYe4R168Bsn1J7iASxg0yxm+bDINcbOwinr8AfBwgP5JkdyBh3CVjGubIMUX79GVrNQ2E1iNhlJMxXgtWGDqplTzKCy2wvfX29Dn9SZDRIKTv32RMvYh6G6qVvrL/RQB133Ug1BTA84DDjwQdQbhGsrKHm0LOJnu0A88Xhn1/N7ziM0IT7RPUmxhpug12gDmWUr83amEzxX7qOwAW0F3NpcpT350In9gWkh1uqG+c5uQlEe2NFAhFhczBx6SgTYj8XJJdbMAvF5ivqE9ZyEUt8g2EomIgkV8ykO9N8jIyQRgG4IUmH3Xh1AMhr0ApL6wn8p8N5GsB+IfmclcfucnayMvi2SIH+2IPhG6Sgi8N+2ykPqe1UWkGoFSb89cBfJqjfbEGQh2I/F81uiZoC+CpNrqrAezUPtdKB+V6ZI49EJpD5L9F7DtOTYGKgLZBfcL5INZA6BiRR9mXKzGS1gNuZ5ThNsAhs3xhVi8hXytiybs1ypFHRngogBkAvgfQ0aaRcQZC32pp59RlhEqJWEYvVRmh2gAeEHE7pCwj9LW2R783GSFTrCRS+e0yzpGtRbZIrxLpV3Abt8jW1jYI2xGhXG99ALdhPRCaEdfBIgbUiyMQOkSkkkR1Ga3I1ts2CBtQfP7aJ/fnEorIAbIY5o1hRChxgOuwHgiVEKHctbsO64FQCREug/tYRPauskE4iAglN7DCgUJov7Zcu3SxUh2aAXAy5BLDxbY/h5vkwMzQUQdeyrTtVncXVpFR19vTHSiE9msz1X8E/kfcaK4SjrPU9VM3m/PNUO8kAD3ekd4qx8xSuhes0E5d1kLPCHrPx5H784IkQO6HLD7/qWKG90FvFXwO4JGm9Ig6aGzTws8/UPh6A/P7UpzUR3veUUtoFhW43iroRQoeBxQmc/HiGBSu3mpYRgrWwB+2y2GT0htYa5MNqOG7RHL9ULh6q2ErKZA9PywVVW4huZmk3mqYTkoua/nAmsoILmqQwqZC1lsNzbStSAoOflFp7CvaFmVaw+eyXk+MNcjr/xmxBtBlvb55fa75raC/q5TEOAJJ6YUXpM73G/VHJfmD1GCTv6K4pvctPQ55dQ9o5UQAAAAASUVORK5CYII=" alt="express-shopping--v2">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADgUlEQVR4nO2Ye2hPYRjHPzF3NsNGSoosQi5/IhHl1lwmQotIRBqZQiKbolCIEP9IiKQlf/GPP4zcFrmFNrctJuxmyv2np55fvZ3OznnP75xlW+dbb79+73ne5znf933e53IgRowYMWLEiNGi0BOYA2wECoFcoB2tCPKyO4BGIOEYZ2mBuOHyon7jG22ESCKoe90MqLw0QoKFHnYagypLZaeiguz4NuCri40zrYlIEl01UhVo5JqVStT630QGRxVqE/+ZyCWgCrgIHAL2AutbI5GjLvr/AjObk8g1ICdiInuasFUJdGkOIk/0UkaNXR42NzcHkWUqvxL4bSH/E1gRkkgN0CPqrDtA5V8GIP/Cwv5hHx3LaSZ8DkDknYW+sz46rkdNIM2I+weBW0A10KAG6/V/GXAOWAVkWui95UPkD5ARZZ0lUWQY0aPGwvZEPyWlAcPvD6AEWAqMBvoal1F++wAjgDwg24LEIEu7BWF2Kt8yOrmND0AHCxsrXdZ+Ak5oxyg5q1sYEotDkJCx29LOZWNNPbAF6E5EGKUulAgxRIcfsjXXiPxDYIjxbBpwEniufYmMCuACsNCmyOwIPApJ4rulWxWp/F3jFMZo1POzcR8Y6KV8bUgSMh5bnoa40lsNEIJ83QRbO2+ArKYMlEdA5JkFkRKVlQuN/v5OwdbxqPp3t/EFaO9BYrvK3db/vYGPKdqSCNckhmtjc6WJXtpmyGV1ohOw35BZp/NbPPSUA8eATcBq7e8PAOc1Bx7BEnJpJwA7deEvSyLi+2O1n8jRhPbcITNSbdx3Wf8AmEwEkDppvFFfYWTvXG1Jn4Z0wWT9VOeYv2r0PZkaBPYBU3VOqol5wDhgkh+RWlXaYHRpQ13k+mu5chp4H5BIZxci1fodOIkK49lrnetnzEnk80Syok0YtVSlfiQ4pacSFe4YttY4nlW6tAQZQYg8MITlGAUzVFmV8WFgtl4++Q6VniKRKVqbleqdTFO3Nm3KmK5z8413k+TpiWJDWC5pLxeZfnrcSTnJ1FFgA/BK74ITvRwdqgQhT2TpsSUXyBEv0F2XZ0sc/lvrlWUDYI0RGSX0LtLMn64nYZKoM6oCT+Rpd+Z3af8Y7hcWMywzvNicG0Rxnkt4TDhOQmSiRK7Pd4G6VDeuj/p/mWb6Rg0GxZZdYCrIArYC97QVblD7RbbuFCNGjDaIfwijzfl4UUhsAAAAAElFTkSuQmCC" alt="motorcycle-delivery-single-box">
            <img src="data:image/png;base64,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" alt="external-route-retail-store-basic-line-gradient-yogi-aprelliyanto">
        </div>
      </section>

      <section class="flex flex-col w-full md:h-[500px]">
        <div id="benefits" class="mt-16 grid px-4 md:grid-cols-2 place-content-center"> 
          <h2 class="font-bold text-2xl mb-4 md:mb-0 md:mr-4">Entregas más rapidas, clientes más satifechos!. <span class="text-gradient bg-gradient-to-r from-[#00a324] via-[#00ad85] to-[#00ad85] bg-clip-text text-transparent">Operaciones más fluidas.</span></h2>
          <p class="text-sm font-light">OnPackage es una plataforma de entrega de paquetes integrando  inteligencia artificial diseñada para agilizar tus operaciones de mensajería. Se integra con tu ubicación, rastrea los pedidos en tiempo real y te ayuda a realizar un seguimiento al proceso de entrega. Con OnPackage, entregas más rápido, eficiente, confiando en el proceso y aumentando la buena calidad de servicio que te ofrecemos. </p>
        </div>

        <div class="w-full grid grid-rows-3 md:grid-cols-3 my-16 md:my-0 place-content-center ml-10">
          <div class="w-[264px] h-[245px] bg-[#F9FAFC] my-4 p-4 rounded-xl shadow-xl relative">
            <img src="/imagenes/route.svg" class="w-8 mb-4" alt="">
            <span class="text-md font-bold">Las rutas más cortas</span>
            <p class="text-sm font-light mt-4">Gestiona tus entregas mediante rutas perfectas y una optimización rápida sin comisiones en las plataformas.</p>
            <div class="absolute bottom-4 left-4 ">
              <a href=""  class="text-sm font-normal text-[#008062]">Más información</a>
            </div>
            
          </div>
          <div class="w-[264px] h-[245px] bg-[#F9FAFC] my-4 p-4 rounded-xl shadow-xl relative">
            <img src="/imagenes/data_base.svg" class="w-8 mb-4" alt="">
            <span class="text-md font-bold">Automatiza tus entregas</span>
            <p class="text-sm font-light mt-4">Planifica tus entregas optimizando las fechas entrega, lo que permite que nuestros servicios sean eficaces con los tiempos que pusiste.</p>
            <div class="absolute bottom-4 left-4 ">
              <a href=""  class="text-sm font-normal text-[#008062]">Más información</a>
            </div>
          </div>
          <div class="w-[264px] h-[245px] bg-[#F9FAFC] my-4 p-4 rounded-xl shadow-xl relative">
            <img src="/imagenes/clock.svg" class="w-8 mb-4" alt="">
             <span class="text-md font-bold">Servicios contra reloj</span>
            <p class="text-sm font-light mt-4">Nuestros servicios son a contra reloj, logrando deliverar tus paquetes lo más pronto posible</p>
            <div class="absolute bottom-4 left-4 ">
              <a href=""  class="text-sm font-normal text-[#008062]">Más información</a>
            </div>
          </div>

        </div>
      </section>

    <section class="p-6 bg-[#f2f9ff] mx-auto rounded-lg shadow-md space-y-4 w-full">
      <h2 class="text-2xl font-bold text-center">Cotiza tu envío</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label>Ciudad origen</label>
            <select v-model="ciudadOrigen" class="w-full border p-2 rounded">
              <option v-for="ciudad in ciudades" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
            </select>
        </div>

        <div>
          <label>Ciudad destino</label>
          <select v-model="ciudadDestino" class="w-full border p-2 rounded">
            <option v-for="ciudad in ciudades" :key="ciudad" :value="ciudad">{{ ciudad }}</option>
          </select>
        </div>

        <div>
          <label>Peso (kg)</label>
          <input v-model.number="peso" type="number" min="1" class="w-full border p-2 rounded" />
        </div>

        <div>
          <label>Valor comercial (COP)</label>
          <input v-model.number="valorDeclarado" type="number" class="w-full border p-2 rounded" />
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-lg font-semibold">Costo estimado: <span class="text-[#008062]">${{ resultado }}</span></p>
      </div>
    </section>

    <section class="w-full mt-32">
      <h3 class="text-center text-2xl grid grid-cols-1">Entrega rapida, mente tranquila, <span class="font-bold">esa es la ventaja de OnPackage.</span></h3>
      <div class="w-1/2 flex justify-center">
        <img class="w-full object-fit mx-auto" src="/imagenes/conductor.webp" alt="Conductor y ruta">
      </div>
      
    </section>

    </section>
  </main>  
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import type { Experience } from '@/utils/experience'
  import { fetchExperiences } from '@/utils/experience'
  const showMenu = ref(false)

  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }

  const experiences = ref<Experience[]>([])
  const currentIndex = ref(0) // Índice de la experiencia actual (comienza en 0).


  // Si no me muestra la info, muestra los datos de loading
  const current = computed(() => experiences.value[currentIndex.value] ?? {
  id: 0,
  comment: 'Cargando...',
  name: '',
  location: '',
  image: ''
})

  // Guardar el temporizador que hace avanzar el slider. mediante una varible tipo setInterval
  let interval: ReturnType<typeof setInterval>

  // montar el componente al web, se obtinen datos 

  onMounted(async () => {
  experiences.value = await fetchExperiences()

  // Se inicializa el temporizador con la variable interval
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % experiences.value.length // Validar que vuelve al inicio cuando llega al final.
  }, 3000)
})

  // Destruir componente y el interval en cada slider
  onUnmounted(() => {
    clearInterval(interval)
  })


  const ciudades = [
  'Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
  'Bucaramanga',
  'Pereira',
  'Manizales',
  'Cúcuta',
  'Villavicencio'
]

const distanciasDesdeBogota: Record<string, number> = {
  'Bogotá': 0,
  'Medellín': 416,
  'Cali': 464,
  'Barranquilla': 994,
  'Cartagena': 1048,
  'Bucaramanga': 394,
  'Pereira': 330,
  'Manizales': 292,
  'Cúcuta': 577,
  'Villavicencio': 125
}

const ciudadOrigen = ref('Bogotá')
const ciudadDestino = ref('Medellín')
const peso = ref(2)
const valorDeclarado = ref(25000)

const resultado = computed(() => {
  const base = 8000               // tarifa base obligatoria
  const tarifaKm = 500            // tarifa por km
  const tarifaKg = 1000           // tarifa por cada kg
  const seguro = 0.01             // 1% del valor comercial

  const distancia = Math.abs(
    distanciasDesdeBogota[ciudadOrigen.value] - distanciasDesdeBogota[ciudadDestino.value]
  )

  const pesoUsuario = peso.value
  const valorUsuario = valorDeclarado.value

  if (pesoUsuario <= 0 || ciudadOrigen.value === '' || ciudadDestino.value === '') {
    return 0  // invalida la cotización si falta algo esencial
  }

  const precio =
    base +
    (distancia * tarifaKm) +
    (pesoUsuario * tarifaKg) +
    (valorUsuario * seguro) // valor declarado del contenido del paquete para calcular el seguro

  return Math.round(precio)
})

</script>
