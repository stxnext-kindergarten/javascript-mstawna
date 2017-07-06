import './styles.css';
import b from './b';

b();

if (module.hot) {
  module.hot.accept(function(err) {
    if(err) {
      console.error('Cannot apply hot update', err);
    }
  });
}
