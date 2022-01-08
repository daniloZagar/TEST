<template>
  <div class="h-screen w-full relative">
    <img
      class="object-cover h-full w-full"
      src="@/assets/img/covid.jpg"
      alt=""
    />
    <div
      class="flex justify-end absolute top-1/2 left-1/2 lg:top-3/5 lg:right-20 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 lg:-translate-y-0"
    >
      <div class="flex flex-col items-center lg:items-start gap-y-8">
        <p
          class="font-montserrat text-2xl sm:text-3xl font-semibold lg:text-4xl text-white text-center lg:text-left"
        >
          GET LATEST COVID INFO
        </p>

        <router-link
          to="/home"
          class="font-montserrat text-center w-44 text-3xl text-white font-semibold border-solid border-1 border-white p-3 hover:bg-white hover:text-black"
        >
          ENTER
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
