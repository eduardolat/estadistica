<template>
  <div>
    <div class="h-16 w-full"></div>

    <div class="animate__animated animate__fadeInUp animate__faster" id="fixed-footer-div">
      <span class="text-center">
        &copy; {{ new Date().getFullYear() }}.
        <span v-html="currentFooterHTML"></span>
        <a
          target="_blank"
          href="https://github.com/eduardodevop/estadistica"
        >
          <i class="fab fa-github"></i>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFooterMessage: 0,
      footerMessages: [
        "Crafteado con el 🧡 por Luis Eduardo Jeréz.",
        "Crafteado con el 💙 por Fernan Emilio Pérez.",
        "Crafteado con el 💚 por Hugo Ernesto Barrios.",
        "Hecho con 😴 en la pandemia 🦠.",
      ],
    };
  },
  methods: {
    nextFooterMessage() {
      let nextMessage = this.currentFooterMessage + 1;
      if (nextMessage > this.footerMessages.length - 1) {
        this.currentFooterMessage = 0;
      } else {
        this.currentFooterMessage = nextMessage;
      }
    },
  },
  computed: {
    currentFooterHTML() {
      return `
        <span class="animate__animated animate__fadeIn">${
          this.footerMessages[this.currentFooterMessage]
        }</span>
      `;
    },
  },
  created() {
    setInterval(() => {
      this.nextFooterMessage();
    }, 5000);
  },
};
</script>
<style scoped>

#fixed-footer-div{
  @apply h-16 border-0 border-t bg-white fixed z-40 bottom-0 w-full flex justify-center content-center flex-wrap;
}

.dark-mode #fixed-footer-div{
  @apply h-16 fixed border-gray-900 z-40 bottom-0 w-full flex justify-center content-center flex-wrap;
  background-color: RGBA(11, 11, 11);
}


@screen md {

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    #fixed-footer-div {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.7);
    }
    .dark-mode #fixed-footer-div{
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(11, 11, 11, 0.7);
    }
  }

}
</style>
