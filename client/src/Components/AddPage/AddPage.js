import React, {useState} from 'react';
import axios from 'axios';
import './AddPage.css'

function AddPageTitle() {
  return (
    <div className="sidediv-addpage">
      <div className="">
        <div className="container">
          <h2 className="sidediv-title">Add Page</h2>
        </div>
      </div>
    </div>
  );
}

function AddPage (props) {
    
    const [Q1, setQ1] = useState('');
    const [Q2, setQ2] = useState('');
    const [Q3, setQ3] = useState('');
    const [Q4, setQ4] = useState('');
    const [Q5, setQ5] = useState('');
    const [Q6, setQ6] = useState('');
    
    function onSubmit(event) {
        event.preventDefault();

        axios.post('/actions/addpage', {
            username: props.location.state.username,
            writer: localStorage.getItem('Token'),
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
            <AddPageTitle/>
                <div className="form-body addpage-formbody">
                    <div className="container">
                        <form onSubmit={onSubmit} className="margin-2em">
                            <div className="form-group question">
                                <label className="width-200px">My biggest dream : </label>
                                <input type="text" name="Q1" className="form-field" autoComplete="off" value={Q1} onChange={ e => setQ1(e.target.value) } required/>
                            </div>
                            <div className="form-group question">
                                <label className="width-200px">I have a crush on : </label>
                                <input type="text" name="Q2" className="form-field" autoComplete="off" value={Q2} onChange={ e => setQ2(e.target.value) } required/>
                            </div>
                            <div className="form-group question">
                                <label className="width-200px">About you I feel : </label>
                                <input type="text" name="Q3" className="form-field" autoComplete="off" value={Q3} onChange={ e => setQ3(e.target.value) } required/>
                            </div>
                            <div className="form-group question">
                                <label className="width-480px">Relationship between you and me : </label>
                                <input type="text" name="Q4" className="form-field" autoComplete="off" value={Q4} onChange={ e => setQ4(e.target.value) } required/>
                            </div>
                            <div className="form-group question">
                                <label className="width-345px">Something I like about you : </label>
                                <input type="text" name="Q5" className="form-field" autoComplete="off" value={Q5} onChange={ e => setQ5(e.target.value) } required/>
                            </div>
                            <div className="form-group question lastquestion">
                                <label className="width-345px">Something I hate about you : </label>
                                <input type="text" name="Q6" className="form-field" autoComplete="off" value={Q6} onChange={ e => setQ6(e.target.value) } required/>
                            </div>
                        </form>        
                    </div>
                </div>
                <div className="sidediv-submit">
                    <a className="AddPage-Submit-Button" onClick={onSubmit}>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AddPage;