import { Component } from 'react';
import { ImSpinner } from 'react-icons/im';
import css from './Loader.module.css'
export default class Loader extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ImSpinner 
        className={css.icon}
        />
      </div>
    );
  }
}