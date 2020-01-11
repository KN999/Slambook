import React, {useState} from 'react';
import axios from 'axios';
import './AddPage.css'

function AddPage (props) {
    const [Q1, setQ1] = useState('');
    const [Q2, setQ2] = useState('');
    const [Q3, setQ3] = useState('');
    const [Q4, setQ4] = useState('');
    const [Q5, setQ5] = useState('');
    const [Q6, setQ6] = useState('');
    const [writer, setWriter] = useState('Himesh');
    const [username, setUsername] = useState('kn99');
    
    function onSubmit(event) {
        event.preventDefault();

        axios.post('/actions/addpage', {
            username: username,
            writer: writer,
            Q1: Q1,
            Q2: Q2,
            Q3: Q3,
            Q4: Q4,
            Q5: Q5,
            Q6: Q6,
        })
        .then( (response) => {
            if(response.data.code === 403) {
                console.log('Success in writing slampage');
                props.history.push("/Dashboard");
            }
            else {
                alert("failed to write");
                console.log("ERROR: "+response.data.message);
            }
        })
        .catch( (error) => {
            alert("Something went wrong! :(");
            console.log(error);
        })
    }

    return (
        <div id="addpage">
            <div id="form-addpage">
                <div className="form-head">
                    <div className="container">
                        <h2>
                            AddPage
                        </h2>
                    </div>
                </div>
                <div className="form-body">
                    <div className="container">
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" name="Q1" className="form-field" autoComplete="off" value={Q1} onChange={ e => setQ1(e.target.value) } required/>
                                <span data-placeholder="My biggest dream "></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="Q2" className="form-field" autoComplete="off" value={Q2} onChange={ e => setQ2(e.target.value) } required/>
                                <span data-placeholder="I have a crush on "></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="Q3" className="form-field" autoComplete="off" value={Q3} onChange={ e => setQ3(e.target.value) } required/>
                                <span data-placeholder="About you I feel "></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="Q4" className="form-field" autoComplete="off" value={Q4} onChange={ e => setQ4(e.target.value) } required/>
                                <span data-placeholder="Relationship between you and me "></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="Q5" className="form-field" autoComplete="off" value={Q5} onChange={ e => setQ5(e.target.value) } required/>
                                <span data-placeholder="Something I like about you "></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="Q6" className="form-field" autoComplete="off" value={Q6} onChange={ e => setQ6(e.target.value) } required/>
                                <span data-placeholder="Something I hate about you "></span>
                            </div>
                            <input type="submit" value="Add Page" className="addpage form-btn"/>
                        </form>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPage;