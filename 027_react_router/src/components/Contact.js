import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect : false,
            fDate: "thursday",
        }
    }
    isChange = (event) => {
        const ten = event.target.name;
        const giatri = event.target.value;
        this.setState({
            [ten]: giatri
        });
        
    }
    isFileChange = (event) => {
        const imagename = event.target.files[0].name;  // muon truy nhap toan bo phan tu cua file Image -> su dung files[0], muon in ra ten image ->  files[0].name ===> key is files, muốn lấy thông số gì thì  files[0]. cái đó 8-) 
        // const fImage2 = event.target.files[0].size ; 
        // Sau khi có được Image sẽ import đẩy vào trường dữ liệu của mình
        this.setState({
            fImage:  imagename
        });
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true

        });
       
    }
    getGiaTri = () => {
        var noiDung = "";
        noiDung += "Ten nhan duoc la: " + this.state.fName;
        noiDung += "/ Email nhan duoc la: " + this.state.fEmail;
        noiDung += "/ Phone nhan duoc la: " + this.state.fPhone;
        noiDung += "/ Message nhan duoc la: " + this.state.fMess;
        noiDung += "/ Ngay nhan duoc la:" + this.state.fDate;
        noiDung += "/ Image nhan duoc la:" + this.state.fImage;
        return noiDung;
    }
    render() {
        if (this.state.isRedirect) {
            console.log(this.getGiaTri());
            return <Redirect to="/" />;
        }
           
        return (
            <div>
                <header className="masthead news">
                    <div className="container h-100">
                        <div className="row h-100">
                        <div className="col-lg-7 my-auto">
                            <div className="header-content mx-auto">
                            <h1 className="mb-5">Contact Page</h1>
                            {/* <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </header>
                    {/* begin contact */}
                    <section className="page-section" id="contact">
                    <div className="container">
                        {/* Contact Section Heading */}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Us</h2>
                        {/* Icon Divider */}
                        <div className="divider-custom">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                        </div>
                        <div className="divider-custom-line" />
                        </div>
                        {/* Contact Section Form */}
                        <div className="row">
                        <div className="col-lg-8 mx-auto">
                            {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Name</label>
                                <input onChange={(event) => this.isChange(event)} name="fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Email Address</label>
                                <input onChange={(event) => this.isChange(event)} name="fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Phone Number</label>
                                <input onChange={(event) => this.isChange(event)} name="fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." aria-invalid="false" />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Message</label>
                                <textarea onChange={(event) => this.isChange(event)} name="fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <br />

                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Choose Date</label>
                               
                                  <select value={this.state.fDate} class="form-control" 
                                   onChange={(event) => this.isChange(event)}  >
                                    <option value="monday">Monday</option>
                                    <option value="tuesday">Tuesday</option>
                                    <option value="wednesday">Wednesday</option>
                                    <option value="thursday">Thursday</option>
                                  </select>
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <br />


                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                
                               
                                          <input onChange={(event) => this.isFileChange(event)} type="file" className="form-control-file" name="fImage" />
                                      
                                <p className="help-block text-danger" />
                                </div>
                            </div>
                            <br />

                            <div id="success" />
                            <div className="form-group">
                                <button type="submit" onClick={(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </section>
            </div>
        );
    }
}

export default Contact;