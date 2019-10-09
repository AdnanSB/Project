var app = new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#C2185B',
          secondary: '#3366ff',
          tertiary: '#C2185B',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  }
  ),
  data () {
    return {
      items: [
        {
          src: 'img/frontpage.png',
        },
        {
          src: 'img/slideone.png',
        },
        {
          src: 'img/slidetwo.png',
        },
        {
          src: 'img/slidethree.png',
        },
      ],
      items1: [
        { title: 'Origin' },
        { title: 'Recipes' },
        { title: 'Nutrients' },
        { title: 'Allergens' },
      ],

      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],

      show: false,
      messages: 0,
     
      
    } 
  },
  

})