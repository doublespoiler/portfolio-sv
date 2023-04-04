import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'main',
  repo: 'https://github.com/doublespoiler/doublespoiler.github.io', // Update to point to your repository
  user: {
   name: 'Skylan Lew', // update to use your name
   email: 'skylanslew@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);