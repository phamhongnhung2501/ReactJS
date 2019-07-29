import React, { Component } from 'react';
import NewsItem from './NewsItem';
import data from './data.json';
class News extends Component {
    render() {
        // var so = [1,2,3,4];
        // var so2 = so.map((value,key) => value*2 + key);
        // console.log(data);
        
            
        
        return (
            <div>
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5">Trang danh sách tin</h1>
                            {/* <a href="/download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </header>
                    {/* begin news */}
                    <div className="container">
                        <div className="row mt-3">
                            {

                            data.map((value,key) => {
                                return (
                                    <NewsItem key={key}
                                    newsId={value.id}
                                    anh={value.anh}
                                    tieuDe={value.tieuDe}
                                    trichDan={value.trichDan}
                                    ></NewsItem>
                                )
    
                            })

                            }
                          
                            
                        </div>
                    </div>
            </div>
        );
    }
}

export default News;