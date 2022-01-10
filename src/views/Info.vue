<template>
  <div class="pt-16">
    <div>
      <div
        class="first-section h-screen w-full overflow-hidden relative flex justify-center lg:justify-end items-center"
      >
        <div class="w-4/5 lg:w-1/2">
          <p
            class="font-montserrat text-xl lg:text-4xl font-semibold text-black lg:pr-20"
          >
            PROTECT YOURSELF!<br />
            <span class="text-lg text-black">
              Type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </p>
        </div>
      </div>
      <!-- PART II -->
      <div class="min-h-screen w-full pt-10">
        <div
          class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-8"
        >
          <div
            class="col-span-1 flex flex-col items-center lg:items-end justify-end lg:justify-center"
          >
            <div class="p-4">
              <p class="text-lg font-poppins text-black">
                Dummy text of the printing
              </p>
              <h3 class="text-2xl font-montserrat font-semibold text-black">
                Lorem Ipsum
              </h3>
              <p class="text-lg sm:w-72 font-poppins text-black pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </div>
          <div
            class="col-span-1 p-4 flex flex-col items-center lg:items-start justify-start lg:justify-center"
          >
            <img class="w-80" src="../assets/img/wash-hands.png" alt="" />
          </div>
        </div>
      </div>
      <!-- PART 3 -->
      <div class="min-h-screen bg-black w-full pt-10">
        <div
          class="min-h-screen grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 gap-y-8"
        >
          <div
            class="col-span-1 p-4 flex flex-col items-center lg:items-end justify-end lg:justify-center"
          >
            <img class="w-80" src="../assets/img/sanitizer.png" alt="" />
          </div>

          <div
            class="col-span-1 p-4 flex flex-col items-center lg:items-start justify-start lg:justify-center"
          >
            <div class="p-4">
              <p class="text-lg font-poppins text-white">
                Dummy text of the printing
              </p>
              <h3 class="text-2xl font-montserrat font-semibold text-white">
                Lorem Ipsum i
              </h3>
              <p class="text-lg sm:w-72 font-poppins text-white pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-img {
  min-height: 300px;
}
.first-section {
  background-image: url('../assets/img/doctor.jpg');
  background-size: cover;
}
</style>
