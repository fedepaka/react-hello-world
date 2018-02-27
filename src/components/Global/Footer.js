import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes from 'prop-types';

class Footer extends Component {
    static propTypes ={
        copyright: PropTypes.string
    };

    render() {
        const { copyright = '&copy; React paka 2018' } = this.props;
        return (
            <div className="Footer">
                {/*<h2>{copyright}</h2>*/}

                <p dangerouslySetInnerHTML={{ __html: copyright}}></p>
            </div>
        );
    }
}

export default Footer;
