import React from 'react';
import { FaFeather} from 'react-icons/fa'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            chirps: []
        };
    } 

    handleUsernameChange = e => this.setState({username: e.target.value});
    handleMessageChange = e => this.setState({message: e.target.value});
    handleChirpSubmit = e => {
        e.preventDefault();
        this.setState({
            username: '',
            message: ''
        });
    }

    render() {
        return (
            <main className="container">
                <section className="row mt-2">
                <div className="col-md-5">
                    <form className="form-group p-3 shadow sm">
                    <label>Username</label>
                    <input 
                        value = {this.state.username}
                        onChange={this.handleUsernameChange} 
                        type="text" 
                        className="form-control"/>
                        <label>Message</label>
                        <textarea value={this.state.message} onChange={this.handleMessageChange} className="form-control" rows={7} />
                        <button className="btn btn-primary btn-block mt-3 d-flex align-items-center justify-content-center">
                            <FaFeather className="mx-2" /> Chirp It
                            </button>
                    </form>
                </div>
                </section>
            </main>
        );
    }
}

export default App;