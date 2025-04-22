<template>
      <p class="copyright">
                  &copy; {{currentYear}}
                </p>
</template>

<script setup>
const currentYear = new Date().getFullYear();

</script>