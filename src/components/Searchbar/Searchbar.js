import { Component } from "react";
import { ImSearch } from 'react-icons/im';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        request: '',
    }
    handleChange = e => {
        this.setState({
            request: e.currentTarget.value.toLowerCase()
        })

    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.request.trim() === '') {
         return  alert('Please, enter your request');
            
        }
        this.props.onSubmit(this.state.request)
        this.setState({ request: '' })
    }
    render() {
        return (
            <header 
            className={css.searchbar}
            >
                <form onSubmit={this.handleSubmit} 
                className={css.form}
                >
                    <button type="submit"
                        className={css.button}
                        >
                        <ImSearch />
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        name="request"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.request}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }

}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}