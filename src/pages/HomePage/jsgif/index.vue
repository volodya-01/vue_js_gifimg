<template>
  <div class="Gif">
    <SuperGifComponents class="SuperGifComponentsoutbox" />
    <RubbableGifComponents class="RubbableGifComponentsOutbox"/>
  </div>
</template>
<script>
import SuperGifComponents from "./gifComponents/SuperGifComponents";
import RubbableGifComponents from './gifComponents/RubbableGifComponents'
export default {
  name: "Gif",
  components: { SuperGifComponents ,RubbableGifComponents},
};
</script>
 
<style lang="scss" scoped>
.Gif {
  width: 60%;
  .SuperGifComponentsoutbox {
  }
  .RubbableGifComponentsOutbox{
    margin-top: 30px;
  }
}
</style>
