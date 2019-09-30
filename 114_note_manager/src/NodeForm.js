import React, {Component} from 'react';

class NodeForm extends Component {
    render() {
        return (
            < div >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div id="noteList" role="tablist" aria-multiselectable="true">
                        <div className="card">
                          <div className="card-header" role="tab" id="note1">
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#noteList" href="#noteContent1" aria-expanded="true" aria-controls="noteContent1">
                                Note date 31/3/2018
                              </a>
                            </h5>
                          </div>
                          <div id="noteContent1" className="collapse in" role="tabpanel" aria-labelledby="note1">
                            <div className="card-body">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus, laboriosam deserunt exercitationem ipsum itaque! Sapiente repudiandae vel soluta expedita minima! Delectus, nisi. Error, totam debitis odio provident at velit.
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header" role="tab" id="note2">
                            <h5 className="mb-0">
                              <a data-toggle="collapse" data-parent="#noteList" href="#noteContent2" aria-expanded="true" aria-controls="noteContent2">
                                Note date 1/4/2018
                              </a>
                            </h5>
                          </div>
                          <div id="noteContent2" className="collapse in" role="tabpanel" aria-labelledby="note2">
                            <div className="card-body">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus temporibus, laboriosam deserunt exercitationem ipsum itaque! Sapiente repudiandae vel soluta expedita minima! Delectus, nisi. Error, totam debitis odio provident at velit.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <h3>EDIT NOTE CONTENT</h3>
                      <div className="form-group">
                        <label htmlFor="noteTitle">NOTE Title</label>
                        <input type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="NOTE title" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Fill in the title!</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="noteContent">NOTE Content</label>
                        <textarea type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteTitle" placeholder="NOTE content" defaultValue={""} />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Fill in the content!</small>
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">Save</button>
                    </div>
                  </div>
                  {/* end row */}
                </div>


            < /div>
    )
        ;
    }
}

export default NodeForm;