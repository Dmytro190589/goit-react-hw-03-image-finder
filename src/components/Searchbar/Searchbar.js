import { Component } from "react";
import {ImSearch} from 'react-icons/im';
import css from './Searchbar.module.css';



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
        this.setState({ request: '' })
    }
    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleSubmit} className={css.form}>
                    <button type="submit"
                        className={css.button}>
                            <ImSearch/>
                    </button>

                    <input
                        className={css.input}
                        type="text"
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