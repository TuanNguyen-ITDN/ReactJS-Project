import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default class Blog extends Component {

    render() {

        var { post } = this.props;

        return (
            <React.Fragment>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="2s" data-wow-delay="0s"
                    data-wow-interaion={1}>
                    <div className="latest-news-wrap"><br />
                        <h3 style={{ marginLeft: '15px', color: '#272b2a' }}> {post.postedBy} has just posted a status </h3><br />

                        <div className="news-img">
                            <img src={post.event_image || 'https://via.placeholder.com/400x350'} className="img-responsive" alt="ok" style={{ width: '100%', height: '510px' }} />
                            <div className="deat">
                                <span>{post.startDay}</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <h4 style={{ float: 'right' }}> {moment(post.createdAt).calendar()}</h4>

                            <center>
                                <h3> {post.event_name} </h3><br />
                                <Link to={`/detail/${post.id}`}>Read more ...</Link>
                            </center>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>


                {/* <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src="img/blogs/tnh3.jpg" className="img-responsive" alt="ok" />
                            <div className="deat">
                                <span>29</span>
                                <span>June</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <p>
                                S???p ?????n Hope ???? N???ng tuy???n TNV cho ch????ng tr??nh "Xu??n V??? A ri??u " 2018 .. h??y xem h???t
                                ???nh v?? video nh?? r???i h??y like .... Hi???u v??? s??? kh?? kh??n c???a Ari??u v?? c??i kh??? khi tham gia
                                Hope th?? hay ????ng k?? tham gia nh??... Ch??ng t??? c???n nh???ng ae c?? ?? ch?? v?? tinh th???n v?? c???ng
                                ?????ng.
                                Kh??ng ph???i ??i ????? tr???i nghi???m m?? ??i ????? th???u hi???u.
                                "Ch??m s??c - Y??u th????ng - Chia s???"
                                    </p><br />
                            <a href="/kkk">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src="img/blogs/tnh2.jpg" className="img-responsive" alt="ok" />

                            <div className="deat">
                                <span>30</span>
                                <span>June</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <p> <b>TH?? NG???!</b> <br />
                                TR??? EM - l?? ni???m hy v???ng, l?? m???m xanh c???a ?????t n?????c v?? c??ng l?? nh???ng h???a h???n c???a nh??n
                                lo???i. Tr??? em l?? ????? y??u th????ng,
                                b???o v???, l?? ????? tho??? s???c ch??i ????a v???i th??? gi???i ?????y m???i m??? n??y. Tr??? em c??ng l?? n??i nh???n
                                nh???ng ??i???u t???t ?????p nh???t t???
                                gia ????nh v?? x?? h???i.
                            </p><br />
                            <a href="/ll">Read more...</a>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                    <div className="latest-news-wrap">
                        <div className="news-img">

                            <img src="img/blogs/tnh5.jpg" className="img-responsive" alt="ok" />

                            <div className="deat">
                                <span>31</span>
                                <span>June</span>
                            </div>
                        </div>
                        <div className="news-content">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-whatsapp"></i>
                            <p> <b>[TH??NG B??O OFFLINE CLB]</b><br />
                                ????????C??c b???n ??i!!!????????<br />
                                C?? l??? ch??ng m??nh ngh??? ng??i ????? l??u r???i nh???, ph???i quay l???i c??ng vi???c v?? ti???p t???c th???c hi???n
                                s??? m???nh c???a m??nh th??i n??o! ????????????
                                ?????ng qu??n tu???n n??y ch??ng m??nh c?? h???n c??ng HOPE nha????????????


                            </p><br />
                            <a href="/ll">Read more...</a>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}