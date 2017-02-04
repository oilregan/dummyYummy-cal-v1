import React , {Component} from 'react';
import {PlayerOptions} from './PlayerOptions';


export class PlayerStat extends Component {

    state = {
        listItem : [],
        selected : 'knockNormal'
    }

    // how to get value from child optionbox ?? pass to parent ?
    selectionOption = (index,event) => {
            //this.setState({selected: event.target.value});
            //console.log(index);
            //console.log(event.target.value);
            let result = this.state.listItem;
            result[index] = event.target.value;
            this.setState({listItem: result});
            //result.splice(index, 1);
            //result = result.concat(['NewValue']);
            //this.setState({listItem: result});
            //console.log(this.state.listItem);
            console.log(this.state.listItem);
    }

    deleteListAtIndex = (index) => {

            const result = this.state.listItem;
            result.splice(index, 1);
            this.setState({listItem: result});

        }

    handleOptions = (event) => {
        this.setState({
            listItem: this.state.listItem.concat([this.state.selected]),
        })
        //console.log(this.state.listItem);
        //console.log("event " + parseInt(event.target.value));
        //this.state.totalOptions += 1;
        //console.log("totalOptions " + this.state.totalOptions);
        //this.state.totalOptions += parseInt(event.target.value);
        //console.log(this.state.totalOptions);
        //this.setState({totalOptions: this.state.totalOptions});
    }

    render() {

        //var indents = [];
        //for (var i = 0; i < this.state.totalOptions; i++) {
          // Pass Remove Action Though prop to child component
          //indents.push(<PlayerOptions key={i} removeOption={this.removeTest} removeKey={i} />);
        //}

            return(
                    <div className="box">
                        <div className="control is-horizontal">
                            <div className="control-label">
                                <label className="label">ชื่อ</label>
                            </div>
                             <div className="control">
                                 <input className="input" type="text" placeholder="Name"/>
                             </div>
                        </div>
                        <div className="control is-horizontal">
                            <div className="control-label">
                                <label className="label">คะแนน</label>
                            </div>
                             <div className="control">
                                 <input className="input" type="text" placeholder="Name"/>
                             </div>
                        </div>

                        <div className="control is-horizontal">
                            <div className="control">
                                <button className="column bttn-unite bttn-md bttn-primary" onClick={this.handleOptions} value={1}>Add Option</button>
                            </div>
                        </div>

                        {this.state.listItem.map((value, index) => {
                            return (
                                <PlayerOptions key={index + value} removeOption={this.deleteListAtIndex.bind(this, index)} selectionOption={this.selectionOption.bind(this, index)}/>
                            );
                        })}




                    </div>
        )
    }
}
