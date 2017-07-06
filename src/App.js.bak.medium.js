import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
      totalReport : "",
      totalReportTrim : "",
      totalCurrentResult : []
  }

  handleSubmitReport = (event) => {

      this.setState({totalReport: event.target.value});

      this.setState({totalReportTrim: event.target.value.replace(/ /g,'').replace(/\n/g,"")});

  }
  handleAnalyzeReport = () => {
      console.log(this.state.totalReportTrim);
  }
  render() {



    return (
      <section className="hero is-info is-large">
  <div className="hero-head">
    <header className="nav">
      <div className="container">
        <div className="nav-left">
          <a className="nav-item">
            <img src="images/bulma-type-white.png" alt="Logo"/>
          </a>
        </div>
        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="nav-right nav-menu">
          <a className="nav-item is-active">
            Home
          </a>
          <a className="nav-item">
            Examples
          </a>
          <a className="nav-item">
            Documentation
          </a>
          <span className="nav-item">
            <a className="button is-info is-inverted">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
              <span>Download</span>
            </a>
          </span>
        </div>
      </div>
    </header>
  </div>


  <div className="hero-body">
    <div className="container has-text-centered">
    <p className="control">
      <textarea className="textarea" placeholder="Textarea" value={this.state.totalReport} onChange={this.handleSubmitReport}></textarea>
    </p>
      <button className="button is-primary" onClick={this.handleAnalyzeReport}>Submit</button>
    </div>
  </div>


  <div className="hero-foot">
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li className="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
    );
  }
}

export default App;
