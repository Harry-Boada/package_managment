<template>
  <main class="dark" id="recommended">
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
      <a href="#experience" class="hover:text-[#00857c]">Casos de envio</a>
      <a href="#price" class="hover:text-[#00857c]">Precios</a>
      <a href="#society" class="hover:text-[#00857c]">Socios</a>
      <a href="#questions" class="hover:text-[#00857c]">FAQS</a>
      <a href="#footer" class="hover:text-[#00857c]">Sobre nosotros</a>
    </nav>

    <!-- BOTONES DERECHA -->
    <div class="hidden md:flex items-center space-x-4">
        <NuxtLink to="/login">
            <button class="text-black font-semibold hover:text-[#008062] cursor-pointer">Inicia sesión</button>
        </NuxtLink>
        <NuxtLink to="/register">
            <button class="rounded-md p-2 text-[#ffffff] bg-[#008062] hover:shadow-sm hover:shadow-gray-400 cursor-pointer">
              Registrate
            </button>
        </NuxtLink>
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
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#experience">Casos de envio</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#price">Precios</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#society">Socios</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#questions">FAQS</a></li>
      <li class="hover:text-[#00857c] border-b-2 border-[#cccc] pb-2"><a href="#footer">Sobre nosotros</a></li>
      <div class="flex flex-col space-y-2 pt-4">
        <NuxtLink to="/login">
           <button class="rounded-md p-2 text-[#ffffff] bg-[#008062] hover:shadow-sm hover:shadow-gray-400">Inicia sesión</button>
        </NuxtLink>
       <NuxtLink to="/register">
         <button  class="rounded-md p-2 text-[#008062] bg-[#ffffff] shadow-sm shadow-gray-400">Registrate</button>
       </NuxtLink>
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
          <p class="py-4 text-sm text-justify md:text-lg">
            Envia paquetes a todo el mundo con nuestrta app, te ofrecemos lealtaad, confiabilidad, seguridad en tus compras y/o paquetes con la plataforma de gestión de entregas basada en inteligencia artificial de OnPackage. Gestiona tus entregas como quieras y con facilidad, haz un seguimiento de los pedidos y deleitate por el tiempo que entrega rapido y eficaz, todo en un solo lugar. 🚛
          </p>

          <div class="w-full grid md:grid-cols-2 place-content-center">
            <NuxtLink to="/login">
                <button class="w-full mb-4 text-md rounded-md mx-auto p-2 text-[#ffff] bg-[#008062] cursor-pointer hover:shadow-sm hover:shadow-gray-400" aria-label="Toggle menu">Inicia sesión</button>
            </NuxtLink>
            <NuxtLink to="/register">
                <button class="w-full md:ml-4  mb-4 text-md rounded-md mx-auto p-2 text-[#008062] bg-[#ffff] cursor-pointer shadow-sm hover:shadow-[#00857c]" aria-label="Toggle menu">Registrate</button>
            </NuxtLink>
          </div>

          
        </article>

        <article id="experience" class="relative rounded-xl overflow-hidden w-11/12 md:max-w-xl: max-w-sm h-11/12 mx-auto my-10 md:my-0 shadow-md transition-all duration-5000 ease-in-out">

          <img :src="current.image" alt="Experiencia de usuario" class="w-full h-full object-cover brightness-50"/>
          <div class="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <p class="text-lg font-semibold italic">{{ current.comment }}</p>
          <div class="mt-4 text-sm font-light">
          <span class="font-bold text-white">{{ current.name }}</span> • <span>{{ current.location }}</span>
        </div>
    </div>
  </article>
        
      </section>

      <section id="colaborate" class="grid place-content-center mt-16">
        <h4 class="font-semibold md:text-xl text-lg">
          Con la confianza de más de 2M de usuarios en 60 países 
        </h4>

        <div class="grid w-full grid-cols-3 py-8">
            <img src="https://cdn.prod.website-files.com/62428b049409c6b74b6b6636/6760e3532318edb8f83c1ea9_Group%20(1).svg" alt="Enterprise 1">
            <img src="https://cdn.prod.website-files.com/62428b049409c6b74b6b6636/6760e353f5d281fbca892a64_Group%20(2).svg" alt="Enterprise 2">
            <img src="https://cdn.prod.website-files.com/62428b049409c6b74b6b6636/6760e35341c5c83818118a28_Group%20(3).svg" alt="Enterprise 3">
            <img src="https://cdn.prod.website-files.com/62428b049409c6b74b6b6636/6760e353dd836b3d801e169f_Group%20(4).svg" alt="Enterprise 4">
            <img src="https://cdn.prod.website-files.com/62428b049409c6b74b6b6636/6760e35341c5c83818118a2b_Group%20(5).svg" alt="Enterprise 5">
            <img src="https://cdn.prod.website-files.com/62428b049409c6b74b6b6636/67893ca63410891fccb0cd42_ateam_logo%20(1).svg" alt="Enterprise 6">
        </div>
      </section>

      <section class="flex flex-col w-full md:h-[500px]">
        <div id="benefits" class="mt-16 grid px-4 md:grid-cols-2 place-content-center"> 
          <h2 class="font-bold text-2xl mb-4 md:mb-0 md:mr-4 md:text-justify w-10/12">Entregas más rapidas, clientes más satifechos!. <span class="text-gradient bg-gradient-to-r from-[#00a324] via-[#00ad85] to-[#00ad85] bg-clip-text text-transparent">Operaciones más fluidas.</span></h2>
          <p class="text-sm font-light md:text-lg">OnPackage es una plataforma de entrega de paquetes integrando  inteligencia artificial diseñada para agilizar tus operaciones de mensajería. Se integra con tu ubicación, rastrea los pedidos en tiempo real y te ayuda a realizar un seguimiento al proceso de entrega. Con OnPackage, entregas más rápido, eficiente, confiando en el proceso y aumentando la buena calidad de servicio que te ofrecemos. </p>
        </div>

        <div class="w-full grid grid-rows-3 md:grid-cols-3 my-16 md:my-0 place-content-center md:ml-10 md:mt-4">
          <div class="w-[264px] h-[245px] bg-[#F9FAFC] my-4 p-4 rounded-xl shadow-xl relative">
            <img src="/imagenes/route.svg" class="w-8 mb-4" alt="">
            <span class="text-md font-bold">Las rutas más cortas</span>
            <p class="text-sm font-light mt-4 md:text-md">Gestiona tus entregas mediante rutas perfectas y una optimización rápida sin comisiones en las plataformas.</p>
            <div class="absolute bottom-4 left-4 ">
              <a target="_blank" href="https://harrison-esteban-boada-aldana.netlify.app/"  class="text-sm font-normal text-[#008062]">Más información</a>
            </div>
            
          </div>
          <div class="w-[264px] h-[245px] bg-[#F9FAFC] my-4 p-4 rounded-xl shadow-xl relative">
            <img src="/imagenes/data_base.svg" class="w-8 mb-4" alt="">
            <span class="text-md font-bold">Automatiza tus entregas</span>
            <p class="text-sm font-light mt-4 md:text-md">Planifica tus entregas optimizando las fechas entrega, lo que permite que nuestros servicios sean eficaces con los tiempos que pusiste.</p>
            <div class="absolute bottom-4 left-4 ">
              <a target="_blank" href="https://harrison-esteban-boada-aldana.netlify.app/"  class="text-sm font-normal text-[#008062]">Más información</a>
            </div>
          </div>
          <div class="w-[264px] h-[245px] bg-[#F9FAFC] my-4 p-4 rounded-xl shadow-xl relative">
            <img src="/imagenes/clock.svg" class="w-8 mb-4" alt="">
             <span class="text-md font-bold">Servicios contra reloj</span>
            <p class="text-sm font-light mt-4 md:text-md">Nuestros servicios son a contra reloj, logrando deliverar tus paquetes lo más pronto posible</p>
            <div class="absolute bottom-4 left-4 ">
              <a target="_blank" href="https://harrison-esteban-boada-aldana.netlify.app/"  class="text-sm font-normal text-[#008062]">Más información</a>
            </div>
          </div>

        </div>
      </section>


    <section id="price" class="p-6 bg-[#EBFEF6] mx-auto rounded-lg  space-y-4 w-full">

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

          <label>Valor comercial del paquete (COP)</label>

          <input v-model.number="valorDeclarado" type="number" class="w-full border p-2 rounded" />
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-lg font-semibold">Costo estimado: <span class="text-[#008062]">${{ resultado }}</span></p>
      </div>
    </section>

    <section class="w-full mt-16 ">
      <h3 class="text-center text-2xl grid grid-cols-1 mb-8">Entrega rapida, mente tranquila, <span class="font-bold">esa es la ventaja de OnPackage.</span></h3>
      <article class="grid w-full mx-2 mt-4 md:grid-cols-2 place-content-center md:mt-2">
        
        <div class="flex items-center flex-col md:order-2 md:items-start">
          <div class="flex p-1 w-[240px] bg-[#a4f6d4] items-center mt-2 rounded-lg">
            <span class="mr-2">
              <img src="/imagenes/stars.svg" alt="IA integrada" class="w-[18px] ml-1">
            </span>
            <span class="text-xs font-medium">Envío automático mediante IA</span>
          </div>

          <h4 class="font-medium text-2xl text-left mt-4">Gestión de entregas faciles y dinamicas con soluciones automatizadas</h4>
          <p class="text-sm font-light font-sans mt-2 text-justify md:text-left md:px-0 md:pr-4 px-4 md:text-md">
            Simplificar vida con nuestro servicios, impulsado por inteligencia artificial, las opciones de entrega accesibles, flexibles y el acceso sin problemas ni retardos en tus entregas o daños en tus paquetes, ¡pruebanos!.
          </p>

          <ul class="my-8 grid grid-cols-1">
            <li class="flex flex-row items-center  py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">IA ecológica que diseña rutas de envío con menor huella de carbono, sin comprometer la velocidad de entrega</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Algoritmos predictivos que optimizan cada ruta de envío en tiempo real para reducir costos y acelerar entregas</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Sistemas inteligentes que rastrean y ajustan cada envío en ruta para garantizar que llegue seguro y sin sorpresas.</span>
            </li>
          </ul>

        </div>
        <div class=" max-w-xs flex justify-center mx-auto my-4 p-4 md:order-1 md:max-w-md">
          <img class="w-full object-cover mx-auto max-w-xs rounded-lg md:max-w-md" src="/imagenes/conductor.webp" alt="Conductor y ruta">
        </div>
      </article>
      
      
    </section>

    <section class="w-full mt-16 bg-[#EBFEF6]">
      <article class="grid w-full mx-2 mt-4 md:grid-cols-2 place-content-center md:mt-2">
        
        <div class="flex items-center flex-col md:ml-8 md:items-start mt-32">
          <div class="flex p-1 w-[240px] bg-[#a4f6d4] items-center mt-2 rounded-lg">
            <span class="mr-2">
              <img src="/imagenes/package-box.svg" alt="IA integrada" class="w-[18px] ml-1">
            </span>
            <span class="text-xs font-medium">Calificación gestión de entregas</span>
          </div>

          <h4 class="font-medium text-2xl text-left mt-4">Mejora continuamente con las valoraciones de tus entregas</h4>
          <p class="text-sm font-light font-sans mt-2 text-justify md:text-left md:px-0 md:pr-4 px-4 md:text-md">
            Recoge opiniones en cada entrega y obtén calificaciones directamente de tus clientes. Identifica patrones, detecta problemas recurrentes y reconoce a los mejores conductores. Usa estas métricas para mejorar la experiencia de entrega y tomar decisiones basadas en datos reales.
          </p>

          <ul class="my-8 grid grid-cols-1">
            <li class="flex flex-row items-center  py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Recoge automáticamente calificaciones después de cada entrega</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Visualiza tendencias y niveles de satisfacción en tiempo real</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Identifica oportunidades de mejora y destaca a los mejores conductores.</span>
            </li>
          </ul>

        </div>
        <div class=" max-w-xs flex justify-center mx-auto my-4 p-4 md:max-w-md">
          <img class="w-full object-cover mx-auto max-w-xs rounded-lg md:max-w-md" src="/imagenes/Rate_your_experience.webp" alt="Conductor y ruta">
        </div>
      </article>
      
      
    </section>

    <section class="w-full mt-16">
      <article class="grid w-full mx-2 mt-4 md:grid-cols-2 place-content-center md:mt-2">
        
        <div class="flex items-center flex-col md:items-start mt-8 md:order-2 md:ml-0">
          <div class="flex p-1 w-[240px] bg-[#a4f6d4] items-center mt-2 rounded-lg justify-center">
            <span class="mr-2">
              <img src="/imagenes/route_finish.svg" alt="Enrutamiento de paquetes" class="w-[18px] ml-1">
            </span>
            <span class="text-xs font-medium">Enrutamiento</span>
          </div>

          <h4 class="font-medium text-2xl text-left mt-4">Entrega un 35% más rápido con la optimización de rutas basada en inteligencia artificial</h4>
          <p class="text-sm font-light font-sans mt-2 text-justify md:text-left md:px-0 md:pr-4 px-4 md:text-md">
            Impulsa tu operación con algoritmos inteligentes que mejoran la planificación de rutas. Aumenta la velocidad de entrega, reduce tiempos muertos y mejora la satisfacción del cliente con tecnología de vanguardia. Supervisa el progreso en vivo y toma decisiones más ágiles en cada envío.
          </p>

          <ul class="my-8 grid grid-cols-1">
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] md:mx-4 mx-2" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Genera rutas optimizadas en segundos para maximizar recursos y reducir demoras</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Supervisa cada entrega en tiempo real y asegúrate de que se cumplan los tiempos prometidos</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Identifica oportunidades de mejora y destaca a los mejores conductores.</span>
            </li>
          </ul>

        </div>
        <div class=" max-w-xs flex justify-center mx-auto my-4 p-4 md:max-w-md">
          <img class="w-full object-cover mx-auto max-w-xs rounded-lg md:max-w-md" src="/imagenes/enrute.webp" alt="Conductor y ruta">
        </div>
      </article>
      
      
    </section>

    <section id="society" class="w-full mt-16 bg-[#EBFEF6]">
      <article class="grid w-full mx-2 mt-4 md:grid-cols-2 place-content-center md:mt-2">
        
        <div class="flex items-center flex-col md:ml-8 md:items-start mt-16">
          <div class="flex p-1 w-[240px] bg-[#a4f6d4] items-center mt-2 rounded-lg">
            <span class="mr-2">
              <img src="/imagenes/partners.svg" alt="IA integrada" class="w-[18px] ml-1">
            </span>
            <span class="text-xs font-medium">Integracioness</span>
          </div>

          <h4 class="font-medium text-2xl text-left mt-4">Conecta tus plataformas favoritas, mejora cada entrega</h4>
          <p class="text-sm font-light font-sans mt-2 text-justify md:text-left md:px-0 md:pr-4 px-4">
            Integra tu operación con servicios líderes como Mercado Libre, PedidosYa, OCA, OCASA, Zapiet y Coordinadora. Unifica tus envíos, automatiza procesos y ofrece experiencias de entrega más rápidas y precisas sin modificar tu flujo de trabajo.
          </p>

          <ul class="my-8 grid grid-cols-1">
            <li class="flex flex-row items-center  py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Conecta sin complicaciones con tus canales y plataformas de envío más usadas</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Sincroniza automáticamente los pedidos y genera entregas más eficientes</span>
            </li>
            <li class="flex flex-row items-center py-2 ">
              <img src="/imagenes/check.svg" class="w-[18px] mx-4" alt="">
              <span class="text-sm font-semibold font-sans text-justify md:text-left md:px-0 md:pr-4 px-4">Mejora tiempos de entrega y visibilidad sin necesidad de desarrollos complejos.</span>
            </li>
          </ul>

        </div>
        <div class=" max-w-xs flex justify-center mx-auto my-4 p-4 md:max-w-md">
          <img class="w-full object-cover mx-auto max-w-xs rounded-lg md:max-w-md" src="/imagenes/society.webp" alt="Conductor y ruta">
        </div>
      </article>
      
      
    </section>

     <section class="grid place-content-center mt-10 w-full mx-1">
      <img src="/imagenes/stars_plataform.webp" alt="Experiencias de usuarios" class="max-w-sm object-cover md:max-w-lg mx-2">
    </section>

    <section id="questions" class="grid place-content-center p-6">
    <h3 class="font-bold text-2xl mb-6 text-center">Preguntas Frecuentes</h3>
    <div class="max-w-2xl w-full">
      <!-- recorrer faqs mediante las FAQS elegida mendiante el indice para dar la respuesta -->
      <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 py-4"> 
        <div class="flex justify-between items-center cursor-pointer" @click="toggleQuestion(index)">
          <p class="font-medium text-lg pr-4">{{ faq.question }}</p> 
          <button 
            class="flex-shrink-0 transition-transform duration-300 ease-in-out" 
            :class="{ 'rotate-180': openQuestions[index] }"
          >
            <img src="/imagenes/menu_question.svg" alt="Toggle FAQ" class="w-[18px] h-[18px]">
          </button>
        </div>
        <!-- Respuesta toogle section -->
        <div class="overflow-hidden transition-all duration-300 ease-in-out" :class="openQuestions[index] ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'">
          <div class="text-gray-600 pb-2">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section id="marketing" class="rounded-lg grid place-content-center bg-[#000000] w-11/12 mx-auto my-4">
      <span class="mt-4 text-2xl font-bold bg-gradient-to-r from-[#8feaff] via-[#8feaff] to-[#a5ff6c] bg-[length:100%_100%] bg-clip-text text-transparent ">¿Listo para enviar tus paquetes?</span>
      <p class="text-sm font-light text-[#ffff] justify-center my-8">Envia primero con él, agrega tu equipamento y paga después.</p>

      <div class="flex mb-4 justify-around">
         <NuxtLink to="/login">
             <button onclick="" class="w-full md:w-full mb-4 text-md rounded-md mx-auto  p-2 bg-[linear-gradient(96deg,_#8feaff_0.1%,_#a5ff6c)] ease-in delay-200 cursor-pointer text-sm">Inicia Sesión</button>
         </NuxtLink>
          <NuxtLink to="/register">
              <button onclick="" class="w-full md:w-full mb-4 text-md rounded-md mx-auto  p-2 border-2 border-amber-50 text-[#ffff] text-sm hover:bg-[#cccc] ease-in delay-200 cursor-pointer">Registrate</button>
          </NuxtLink>
      </div>
    </section>




    </section>

    <footer id="footer" class="w-full bg-black mt-12">
        <div class="flex flex-col items-center space-y-6 py-8 px-4 md:grid md:grid-cols-3  md:gap-6 md:space-y-0 md:px-8">
          <span class="text-[18px] text-center text-[#ffff] font-bold md:col-span-3">
            ¿Donde nos encuentras?
          </span>
          <div class="flex items-center space-x-2">
            <img src="/imagenes/email.svg" alt="Correo" class="w-6" />
            <span class="text-[#ffff]">harrisonboada@gmail.com</span>
          </div>
          <div class="flex items-center space-x-2">
            <img src="/imagenes/instagram.svg" alt="Instagram" class="w-6" />
            <span class="text-[#ffffff]">harryingmec0</span>
          </div>
          <div class="flex items-center space-x-2">
            <img src="/imagenes/whatsapp.svg" alt="WhatsApp" class="w-6" />
            <span class="text-[#ffffff]">+57 3003339871</span>
          </div>
          <div class="flex items-center space-x-2">
            <img src="/imagenes/linkedin.svg" alt="LinkedIn" class="w-6" />
            <span class="text-[#ffffff]">linkedin.com/in/harrisonesteban</span>
          </div>
          <div class="flex items-center space-x-2 ml-6">
            <img src="/imagenes/twitter.svg" alt="Twitter" class="w-6" />
            <span class="text-[#ffffff]">@HarrisonBoada</span>
          </div>
        </div>
      </footer>
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


// ------------------- FAQ ---------------
interface FAQ {
  question: string;
  answer: string;
}

// Estado reactivo para controlar qué preguntas están abiertas
const openQuestions = ref<Record<number, boolean>>({});

// Datos de las preguntas frecuentes
const faqs: FAQ[] = [
  {
    question: "¿OnPackage es un nuevo servicio de entrega?",
    answer: "No, OnPackage lleva 30 años en la industria con el software de gestión de entregas que te ayuda a gestionar tus entregas de forma eficiente."
  },
  {
    question: "¿Cómo funciona el seguimiento de entregas?",
    answer: "El sistema permite rastrear en tiempo real todas las entregas, desde la preparación hasta la entrega final al cliente."
  },
  {
    question: "¿Qué costo tiene el servicio?",
    answer: "Ofrecemos la cotización inmediata según las necesidades que requieras. Contacta con nuestro equipo de ventas para obtener una cotización personalizada y a detalle."
  },
  {
    question: "¿Cómo beneficia a mis clientes finales?",
    answer: "Ofrecemos seguimiento en tiempo real con actualizaciones automáticas por SMS/email, ventanas de entrega precisas, opciones de reprogramación y notificaciones de llegada del conductor."
  },
  {
    question: "¿Cómo manejan la gestión de devoluciones?",
    answer: "Incluimos flujos completos para reversa logística: solicitudes de recogida, autorizaciones, generación de guías inversas y seguimiento especializado para devoluciones."
  },
  {
    question: "¿Cómo garantizan la seguridad de los paquetes?",
    answer: "Implementamos verificaciones con OTP, captura de firmas digitales, geocercas, fotocomprobantes y seguros personalizados por envío."
  },
];

// Función para alternar la visibilidad de una pregunta
const toggleQuestion = (index: number): void => {
  openQuestions.value[index] = !openQuestions.value[index];
};
</script>
