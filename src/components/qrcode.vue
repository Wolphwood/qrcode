<template>
    <!-- <qrcode-vue :value="value" :size="size" level="H" render-as="svg" /> -->

    <qrcode-canvas value="QRCODE.VUE 😄" :size="size" level="H" />

    <!-- <qrcode-svg value="QRCODE.VUE 😄" level="H" /> -->
</template>

<script>
import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from 'qrcode.vue'

export default {
    data() {
        return {
            value: 'https://example.com',
            size: 300,
        }
    },
    components: {
        QrcodeVue,
        QrcodeCanvas,
        QrcodeSvg,
    },
}
</script>