import React, { Component } from 'react';
import data from './data.json';
import NewsRelated from './NewsRelated.js';
class Detail extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        var count = 1;
        // console.log(this.props.match.params.id);
        // console.log(typeof(this.props.match.params.id));
        return (
            <div>
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5">Detail Page</h1>
                            {/* <a href="/download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </header>
                    {/* begin news */}
                {
                    data.map((value,key) => {
                        if(value.id == this.props.match.params.id){
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                <div className="container">
                                    <img src={value.anh} className="img-fluid rong100" alt="Demo" />
                                    
                                    <h3 className="lead text-center">{value.tieuDe}</h3>
                                    <hr className="my-2" />
                                    {
                                        value.noiDung
                                    }
                                
                                </div>
                                </div>
                            )
                    
                            
                        }
                    })
                }

                    <div className="container">
                    <h4 className="card-title text-center">Related News</h4>
                    <div className="row">
                        <div className="col-12">
                        <div className="card-deck">
                            {
                                data.map((value,key) => {
                                    console.log(key);
                                    if(value.id != this.props.match.params.id){
                                        if(count <= 4){
                                            count++;
                                            return(
                                                <NewsRelated key={key}
                                                newsId={value.id}
                                                anh={value.anh}
                                                tieuDe={value.tieuDe}
                                                trichDan={value.trichDan}>
                                                    
                                                </NewsRelated>
                                            )
                                        }
                                    }
                                    
                                })
                            }
                            
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* end news */}
                    {/* begin footer */}
                    
                
            </div>
        );
    }
}

export default Detail;