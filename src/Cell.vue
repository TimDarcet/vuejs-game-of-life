<template>
    <div class="cell" v-bind:class="{alive: isAlive}"></div>
</template>

<script>
export default {
    name: "Cell",
    props: {isAlive: Boolean}
}
</script>

<style>
.cell {
  background-color: white;
}
.alive {
  background-color: black;
}
</style>
