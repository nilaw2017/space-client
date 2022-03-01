import {Component} from 'react'
import { Link } from 'react-router-dom';

export default class ServicePage extends Component {
    constructor(){
        super();
        this.state = {
            orderId : "",
        }
    }
    change = (changes)=> {
        const {value} = changes.target
        console.log(value);
        this.setState({
            orderId: value
        })
    }
    submit = (e)=> {
        e.preventDefault();
    }
    render() {
        console.log('orderId >>', this.state.orderId);
        return(
            <section>
                <h1>This is Service Page</h1>
                <form onSubmit={this.submit} method='POST'>
                    <input onChange={this.change} type='text' name='orderId' placeholder='Track Id'></input>
                    <Link to={`/tracker/${this.state.orderId}`} type="submit">START TRACKING</Link>
                </form>
            </section>
        )
    }
}