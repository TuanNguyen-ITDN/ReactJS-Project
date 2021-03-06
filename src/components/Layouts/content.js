import React, { Component } from 'react';
import Blog from './blog';
import Horizontal from './horizontal';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';

class Content extends Component {

    componentDidMount() {
        this.props.fetchAllPosts();
    }

    render() {

        var { posts } = this.props;

        var results = posts.map((post, index) => {
            var result = null;
            if (posts.length > 0) {
                result = <Blog key={index} index={index}
                    post={post} onDelete={this.onDelete} />
            }
            return result;
        });

        return (
            <div>
                <section className="latest-news-area" id="latest">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="section_title">
                                <h2>Recent <strong>Blogs</strong></h2>
                            </div>
                        </div>
                    </div><br /><br />

                    <div className="row">
                        <div className="news_active">
                            {results}
                        </div>
                    </div>
                </section>
                <br /><br />

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
                    <Horizontal />
                    <br />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  ">
                    <div className="container">
                        {/* {resultsFirebase} */}
                    </div>
                </div>

                <div className="  col-xs-12 col-sm-12 col-md-12 col-lg-12 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s"
                    data-wow-interaion={1} style={{ backgroundColor: '#e3ecec' }}><br /><br /><br /><br />
                    <div className="row">
                        <div className="  col-xs-0 col-sm-0 col-md-1 col-lg-1  "></div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src="img/blogs/ttn.jpg" className="img-responsive" alt="ok" />
                        </div>
                        <div className="  col-xs-12 col-sm-12 col-md-5 col-lg-4 news-content ">

                            <h2 style={{ color: 'black', fontWeight: 'bold' }}>  K??U G???I ???NG H??? T???T THI???U NHI 01/06 </h2>
                            <br /><br />
                            <p style={{ color: '#4d4748' }}> + ????M???t n??m c?? 365 ng??y, duy ch??? c?? m???t ng??y g???i l?? T???T c???a thi???u
                                nhi... V???y m?? ????u ????y
                    ngay c???nh ch??ng ta v???n c??n nh???ng thi???u nhi kh??ng c?? m???t ng??y T???T nh?? th???....</p> <br />

                            <p style={{ color: '#4d4748' }}> + ????Th??i Ni??n l?? x?? 135 c???a huy???n B???o Th???ng v???i chi???u d??i 15km. ?????a b??n
                                r???ng v???i 16 th??n.
                                Trong ???? c?? 8 th??n 100 % ?????ng b??o d??n t???c thi???u s??? sinh s???ng. 11/16 th??n ?????c bi???t kh?? kh??n.
                                3 th??n Mom ????o 1, Khe ?????n 1, Khe ?????n 2 c?? 100% ?????ng b??o d??n t???c M??ng sinh s???ng. Kinh t??? c??n ngh??o
                                n??n kh?? kh??n.
                                ?????i s???ng nh??n d??n c??n nhi???u thi???u th???n. T??? trung t??m x?? v??o m???t 4 - 10km ???????ng d???c ???? ??i l???i kh??
                                kh??n. 3 th??n c?? t???ng s???
                                158 h???. Trong ???? c?? 58 h??? ngh??o. Ph???n ??a nh??n d??n s???ng nh??? c??y l??a v?? s??? r???ng ?????i ??t ???i. 1 s??? lao
                                ?????ng kh???e m???nh b??? nh?? ??i l??m ??n
                    Trung Qu???c. </p> <br /><br />
                            <a href="/kk">Read more...</a>
                        </div>
                        <div className="  col-xs-0 col-sm-0 col-md-0 col-lg-1 "></div>

                    </div><br /><br /><br /><br />
                </div>

                <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-12  wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s"
                    data-wow-interaion="1" style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <div className="row">
                        <div className=" col-xs-0 col-sm-0 col-md-0 col-lg-1   "></div>

                        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-5   ">
                            <br /><br /><br /><br /><br />
                            <h2 style={{ color: '#f809db', fontWeight: 'bold' }}>T???i sao ph???i l??m t??nh nguy???n ?</h2>
                            <br />
                            <h2 style={{ color: 'black', fontWeight: 'bold' }}>L?? do b???n n??n tham gia ho???t ?????ng t??nh nguy???n</h2>
                            <br />
                            <h3>T??nh nguy???n l?? m???t ho???t ?????ng ?????y ?? ngh??a c?? ???nh h?????ng t??ch c???c ?????n c???ng ?????ng v?? x?? h???i. Nh??ng b???n c??
                                bi???t
                                r???ng t??nh nguy???n c??ng mang l???i cho b???n th??n b???n r???t nhi???u l???i ??ch? D?????i ????y l?? m???t v??i l?? do b???n n??n
                                ??i l??m t??nh nguy???n.
                            </h3>

                            <br /><br />
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>
                                        <p className="glyphicon glyphicon-ok"> </p> C???i thi???n s??? nghi???p
                                    </h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>
                                        <p className="glyphicon glyphicon-ok"> </p> M???t s??? th??ch m???i
                                    </h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>
                                        <p className="glyphicon glyphicon-ok"> </p> M???t tr???i nghi???m m???i
                                    </h3>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                    <h3>
                                        <p className="glyphicon glyphicon-ok"> </p> Nh???ng kinh nghi???m m???i
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-5">
                            <img src="img/blogs/tn6.jpg" className="img-responsive" alt="ok" />
                        </div>
                        <div className="  col-xs-0 col-sm-0 col-md-0 col-lg-1 "></div>
                    </div>
                </div>
                <br />
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row">
                        <iframe title="video" style={{ width: '100%', height: '800px' }} src="https://www.youtube.com/embed/EmTSk_flsKU"
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                    <div className="row under">
                        <div className="row view">
                            <a href="/ll">Read more...</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts
        // postFirebases: state.postReducer.posts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllPosts: () => {
            dispatch(actions.actFetchPostsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
