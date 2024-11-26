new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/1.jpg",
          img2: "images/2.jpg",
          img3: "images/3.jpg",
          title: "FUNNY",
          isOpen: false,
        },
        {
          img1: "images/5.jpg",
          img2: "images/7.jpg",
          img3: "images/6.jpg",
          title: "CUTE",
          isOpen: false,
        },
        {
          img1: "images/8.jpg",
          img2: "images/4.jpg",
          img3: "images/9.jpg",
          title: "PRETTY",
          isOpen: false,
        },
        {
          img1: "images/14.jpg",
          img2: "images/18.jpg",
          img3: "images/12.jpg",
          title: "DREAM",
          isOpen: false,
        },
        {
          img1: "images/16.jpg",
          img2: "images/17.jpg",
          img3: "images/19.jpg",
          title: "HERO",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});