import React, { Component } from 'react';

import './styles.scss';
import axios from 'axios';
import {configParams} from '../../config';
import {Link} from 'react-router-dom';

class Wine extends Component {
    state = {
        wineDetails: {},
        isLoading: false,
        publicId: 0
    }
    componentDidMount(){
        this.loadData();
    }

    loadData = () => {
        if (this.props.match.params.id) {
            axios.get(configParams.apiUrl + "/" + this.props.match.params.id)
                .then(res => {
                    console.log(res.data.wine.media[0].public_id);
                    this.setState({wineDetails: res.data.wine, isLoading: true, publicId: res.data.wine.media[0].public_id})
                }).catch(error => {
                    console.log(error);
            })
            
        }
    }
    render () {
        console.log(this.state.wineDetails);
        let imgUrl = configParams.cloudinaryUrl + "/" + this.state.publicId;
        let wine = {...this.state.wineDetails};
        const links = [
            {
                name: "Producer",
                linkTo: '/wines/producer',
                classes: ['active']
            },
            {
                name: 'Reviews',
                linkTo: '/wines/reviews',
                classes: ['']
            },
        ]

        const classes = ['active'];

        const strclasses = classes.join(",");

        const genearateSidebarLinks = (links) => (
            links.map((item, index) => {
                return (
                    <Link to={item.linkTo} className={item.classes[0]}  key={index}>{item.name}</Link>
                )
            })
        )
                return (
                    <div>
                        <div className="banner" 
                            style={
                                    {
                                        backgroundImage: `url(${imgUrl})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'fixed',
                                        
                                    }
                                }>
                            
                        </div>
                        <div>
                            <h3 className="about-header">About this Wine</h3>
                            <hr className="bottom-line" />
                        </div>

                        <div>
                            <div className="wine-name">
                                {/* {this.state.wineDetails.city} */}
                            </div>
                            <div className="wine-details">
                                <div className="sidebar">
                                    <div className="sidenav">
                                    {genearateSidebarLinks(links)}
                                    </div>
                                </div>
                                <div className="right-content">
                                    <div className="producer">
                                        <h3 className="producer-text"><b>Basic Info.</b></h3>
                                        <div>
                                           <p><b>City: </b> {this.state.wineDetails.city}</p>
                                           <p><b>Country: </b> {this.state.wineDetails.country}</p>
                                           <p><b>Wine Name: </b> {this.state.wineDetails.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    
                )
    }
}
 
export default Wine;