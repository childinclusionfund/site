export default {
  target: 'static',
  generate: {
    dir: 'docs'
  },
  components: {
    dirs: [
      '~/components',
    ],
  },
  head: {
    script: [
      {
        src: 'https://kit.fontawesome.com/2e8af351a5.js',
      }, {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-180193814-1',
      },
    ],
    link: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Rubik',
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat',
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Satisfy',
      },
    ],
  },
}
