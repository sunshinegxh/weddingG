<template>
    <div>
        <canvas></canvas>
    </div>
</template>
<script>
export default {
  name: "seat1",
  data: function() {
    return {
      loading: true,
      xSize: 0,
      ySize: 0
    };
  },

  created() {
    setTimeout(() => {
      const tables = Array.from(Array(20), (i, index) => {
        return {
          positionX: index - 10,
          positionY: 1,
          tableNumber: index + 1
        };
      });
      this.draw(tables);
    }, 10);
  },

  methods: {
    // draw(data, door) {
    //   let xSize = 0;
    //   let ySize = 0;
    //   data.forEach(({ positionX, positionY }) => {});
    // }
  }
};
</script>
<style lang="scss" scoped>
</style>
