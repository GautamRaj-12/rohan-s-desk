import JoditEditor from 'jodit-react';
import './write.css'
import thumbnail from "../../assets/post-test.jpg"

function Write() {
    return (
      <div className="container">
        <div className="write">
          <img src={thumbnail} alt="" className="thumbnail" />
          <form className="writeForm">
            <div className="writeFormGroup">
              <div><label htmlFor="fileInput"><i class="fa-solid fa-circle-plus writeIcon"></i></label></div>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input type="text" placeholder="Enter Post Title" className="writeInput" autoFocus="true" />
            </div>
            <div className="writeFormGroup">
              <div className="writeInput writeText">
                {/* <div ref={quillRef} /> */}
                <JoditEditor/>
              </div>
            </div>
            <button className="writeSubmit btn btn-success">Publish</button>
          </form>
        </div>
      </div>
    )
  }

  export default Write
