<template>
  <Chunk
    overview="How does it work?"
    v-bind:text="[
      'Child Inclusion Fund teams up with schools who identify children in need of financial assistance, providing funding for expenses not traditionally covered, such as:',
    ]"
    v-bind:list="[
      {icon: 'fas fa-camera', text: 'Picture Day'},
      {icon: 'fas fa-bus', text: 'Field Trips'},
      {icon: 'fas fa-book', text: 'Book Fairs'},
      {icon: 'fas fa-bed', text: 'Pajama Day'},
      {icon: 'fas fa-tshirt', text: 'Spirit Wear'},
      {icon: 'fas fa-gift', text: 'Holiday Gift Shop'},
    ]"
  />
</template>