export default {
  target: 'static',
  generate: {
    devtools: true,
    dir: 'dist',
    subFolders: true,
  },
  components: {
    dirs: [
      '~/components',
    ],
  },
  head: {
    title: 'Child Inclusion Fund - Providing financial assistance for Picture Day, Field Trips, Book Fairs, etc.',
    script: [
      {
        src: 'https://kit.fontawesome.com/2e8af351a5.js',
      }, {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-180193814-1',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Barlow',
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat',
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Satisfy',
      }
    ],
    meta: [
      { name: 'facebook-domain-verification', content: '2umslz6p66xfailb39ipmfj6l7n7sd' },
      { property: 'fb:app_id', content: '400864467824750' },
      { property: 'og:url', content: 'https://childinclusionfund.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Child Inclusion Fund' },
      { property: 'og:description', content: 'Providing financial assistance for Picture Day, Field Trips, Book Fairs, etc.' },
      { property: 'og:image', content: 'https://childinclusionfund.com/images/logo--opaque.png' },
    ],
  },
}
