import css from './Button.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
export class Button extends Component {
    handleClick = () => {
        this.props.onClick();
    };
    render() {
        return (
            <button
                type="button"
                className={css.button}
                onClick={this.handleClick}
            >
                Load more
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
