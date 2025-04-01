<template>
  <!-- <QrcodeStream @detect="onDetect"></QrcodeStream> -->
  <div class="qr-container">
    <div class="qr-video">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>
  </div>

  <br/>

  <n-space vertical>
    <n-card size="small">
      <div class="card-content">
        <div class="icon">
          <img src="https://vps.wolphwood.ovh/files/gamefest/discord/NANCY.png">
        </div>
        <span class="text">Template</span>
      </div>
    </n-card>
    
    <n-card size="small">
      <div class="card-content">
        <div class="icon">
          <img src="https://vps.wolphwood.ovh/files/gamefest/discord/logo.png">
        </div>
        <span class="text">Je ne sais pas quoi écrire</span>
      </div>
    </n-card>
    
    <n-card size="small">
      <div class="card-content">
        <div class="icon">
          <QuestionCircle/>
        </div>
        <span class="text">Pas encore découvert</span>
      </div>
    </n-card>
  </n-space>

</template>

<script setup>
  import { onMounted } from 'vue';  // Importation de onMounted
  import { ref } from 'vue';

  import { QuestionCircle } from "@vicons/fa"

  import { QrcodeStream } from 'vue-qrcode-reader'


  onMounted(() => {
    for (let element of document.querySelectorAll('.n-card .icon > img')) {
      const { width, height } = element;

      element.addEventListener('load', () => {
        if (width > height) {
          element.classList.add("w");
        } else {
          element.classList.add("h");
        }
      });
    }
  });

  function onDetect(detectedCodes) {
    console.log('QR Code détecté:', detectedCodes[0].rawValue);
  }
</script>

<style scoped>
  * {
    --icon-size: 2rem;
  }

  .n-card {
    color: var(--color-text);
    border-color: var(--color-border);
    background-color: var(--color-background-mute);
  }

  .card-content {
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: var(--icon-size); height: var(--icon-size);

    margin-right: 12px; /* Espace entre l'icône et le texte */
  }

  .icon > img {
    object-fit: contain; /* Conserve les proportions sans déformation */
    max-width: 100%;
    max-height: 100%;
  }

  .text {
    font-size: 16px; /* Ajustez la taille du texte si nécessaire */
  }

  .qr-container {
    display: flex;
    justify-content: center;
  }

  .qr-video {
    width: 280px; /* Définir la largeur désirée */
    height: 280px; /* Définir la hauteur désirée */
    
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .qr-video video {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
</style>
