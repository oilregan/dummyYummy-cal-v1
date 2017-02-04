import React , {Component,PropTypes} from 'react';

export class PlayerOptions extends Component {
    static propTypes = {
      removeOption : PropTypes.func.isRequired,
      selectionOption : PropTypes.func.isRequired,
    }

    state = {
        selected : ''
    }

    handleClick = (event) => {
            // called lasted because it's ASYNC
            this.setState({selected : event.target.value});
            //this.forceUpdate();
            console.log(this.state.selected);
            //this.props.selectionOption(event);

    }

    render() {
            return(
                <div className="control is-horizontal">
                        {/* A JSX comment

                        <input className="input column" type="text" placeholder="Find a repository"/>
                        <button className="column button is-primary">123</button>

                         */}
                        <p className="column control has-addons">

                            <span className="select">
                                <select value={this.state.selected} onChange={this.handleClick} >
                                  <option value={'knockNormal'}>+ Knock ปกติ</option>
                                  <option value={'knockColor'}>+ Knock สี</option>
                                  <option value={'knockDark'}>+ Knock มืด</option>
                                  <option value={'knockDarkAndColor'}>+ Knock มืด สี</option>
                                  <option>+ คว่ำมี่</option>
                                  <option>+ คว่ำโต</option>
                                  <option>+ เกิด Q โพธิ์ดำ</option>
                                  <option>+ เกิด 2 ดอกจิก</option>
                                  <option>+ เกิด หัว</option>
                                  <option>- มืด</option>
                                  <option>- โง่</option>
                                  <option>- โง่ มืด</option>
                                  <option>- เกิดให้ฝากโต</option>
                                  <option>- ปี้หัว</option>
                                  <option>- ปี้โต</option>
                                  <option>- ตีเต็ม</option>
                                  <option>- ทิ้งมี่</option>
                                </select>
                             </span>

                             <a className="button is-danger" onClick={this.props.removeOption}>
                                 Remove
                             </a>
                        </p>


                </div>


        )
    }
}
