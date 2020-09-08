import React, { Component } from "react";
import { connect } from 'react-redux';
import { findComics } from '../actions';
import Autocomplete from 'react-autocomplete';

class SearchChar extends Component {
    render() {
        return (
            <React.Fragment>
                <Autocomplete
                    items={this.props.chars}
                    inputProps={{ id: 'states-autocomplete' }}
                    shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                    getItemValue={item => item.name}
                    wrapperStyle={{ position: 'relative', display: 'block' }}
                    renderMenu={children => (
                        <div className="result-autocomplete">
                           {children}
                        </div>
                    )}
                    renderItem={(item, isHighlighted) => (
                        <div
                            className={`option item ${isHighlighted ? 'option item-highlighted' : ''}`}
                            key={item.id}
                        >
                           {item.name}
                        </div>
                    )}
                    renderInput={(props) => (
                        <React.Fragment>
                            <form className="wrapper-search"
                                onSubmit={(event) => { event.preventDefault(); this.props.findComics(this.props.char) }}>
                                <input {...props} placeholder="Pesquisar" />
                                
                                <a href="#" className="logo" title="Api Marvel">
                                    
                                </a>
                            </form>
                        </React.Fragment>
                    )}
                    value={this.props.search}
                    onChange={(ev) => { this.props.autoCompleteOnChange(ev.target.value) }}
                    onSelect={(value, itemSelect) =>{this.props.onSelectItem(value, itemSelect.id)}}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        chars: state.home.chars
    };
};

export default connect(mapStateToProps, {
    findComics
})(SearchChar);