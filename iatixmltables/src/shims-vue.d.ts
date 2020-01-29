declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vuetify/lib' {
  import 'vuetify/types/lib'
}
declare module 'vue2-leaflet' {
  import * as L from 'leaflet'
  export { L }
}
