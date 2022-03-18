import React from "react";
import { useNavigate } from "react-router-dom";
import "./Editpage.css";

function EditPage() {
  const navigate = useNavigate();

  return (
    <>
      <ul className="unlist">
        <li onClick={() => navigate("/editpage")}>home</li>
        <li onClick={() => navigate("/inst-volunteers")}>volunteer</li>
        <li onClick={() => navigate("/inst-services")}>service</li>
        <li onClick={() => navigate("/inst-events")}>events</li>
        <li onClick={() => navigate("/inst-entrys")}>entrys</li>
      </ul>
      <div
        className="test2"
        style={{
          marginLeft: "0rem",
        }}
      >
        <div className="banner text-center" data-scroll-index="0">
          <div className="banner-overlay">
            <div className="container">
              <h1 className="text-capitalize">
                <input
                  placeholder="institution name"
                  type="text"
                  style={{ marginTop: "2rem" }}
                />{" "}
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </h1>
              <p>
                <input
                  placeholder="description"
                  title="description"
                  type="text"
                  style={{ marginLeft: "30rem" }}
                />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </p>
            </div>
          </div>

          <div className="about-us section-padding" data-scroll-index="1">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section-title text-center">
                  <h3>ABOUT US</h3>
                  <span className="section-title-line"></span>
                </div>
                <div className="sss">
                  <div className="section-info">
                    <div className="sub-title-paragraph">
                      <h4>
                        <input
                          style={{ marginLeft: "1rem" }}
                          placeholder="title"
                          type="text"
                        />
                        <i className="fa-solid fa-square-pen"></i>
                        <i className="fa-solid fa-circle-check"></i>
                      </h4>

                      <h5>
                        <textarea
                          style={{ marginLeft: "1rem" }}
                          placeholder="describe"
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                        <i className="fa-solid fa-square-pen"></i>
                        <i className="fa-solid fa-circle-check"></i>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-50">
                  <div className="section-img">
                    <img
                      src="images/about.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgb(21, 16, 1)",
              height: "15rem",
              padding: "5rem",
              color: "aliceblue",
            }}
          >
            <div style={{ fontSize: "larger" }}>Contact-Us</div>
            <hr style={{ backgroundColor: "aliceblue" }} />
            <div style={{ float: "left" }}>
              <div>
                Email : <input type="text" />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                phone : <input type="text" />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                location : <input type="text" />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </div>
            </div>
            <div style={{ float: "right" }}>
              <div>
                <i className="fa-brands fa-instagram-square"></i>{" "}
                <input placeholder="instagram url" type="text" />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <i className="fa-brands fa-facebook"></i>{" "}
                <input placeholder="facebook url" type="text" />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <i className="fa-brands fa-twitter-square"></i>{" "}
                <input placeholder="twitter url" type="text" />
                <i className="fa-solid fa-square-pen"></i>
                <i className="fa-solid fa-circle-check"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPage;
