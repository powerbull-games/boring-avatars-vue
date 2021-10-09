<template>
      <component :is="loadComponent" v-bind={...props}></component>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    props: {
        name: {
          type: String,
          default: "PowerBull Games"
        },
        variant: {
            type: String,
            default: "marble"
        },
        size: {
            type: Number,
            default: 40
        },
        colors: {
            type: Array,
            default: ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']
        },
        square: {
            type: Boolean,
            default: false
        }
    },
    
    data(){
      return {
        variantsArray: ["bauhaus", "beam", "marble", "pixels", "ring", "sunset"]
      }
    },

    beforeMount() {
       if(!(this.variant in this.variantsArray)){
         this.variant = "marble"
       }
    },

    computed: {
      loadComponent(){
        return defineAsyncComponent(() => import(`./avatar-${this.variant}.vue`))
      }
    }
}
</script>
