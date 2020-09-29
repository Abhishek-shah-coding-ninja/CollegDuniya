import React from "react";
import data from "./colleges.json";
import pic from "./college02.jpg";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="List">
        {data.colleges.map((post) => {
          return (
            <div className="list1">
              <div className="promoted">
                <h3>PROMOTED</h3>
              </div>
              <div className="pic">
                <img src={pic} alt="image" />
              </div>

              <div className="Rating">
                <h3>{post.rating}/5</h3>
                <p>Very Good</p>
              </div>

              <div className="Best-Colg-Km">
                <div className="tags">
                  <h5>{post.tags[0]}</h5>
                </div>
                <div className="kilom">
                  <h5>{post.tags[1]}</h5>
                </div>

                <div className="Top-Rank">
                  <p>{post.ranking}</p>
                </div>
              </div>
              <div className="footer">
                <div className="name-colg">
                  <h3>{post.college_name}</h3>
                </div>

                <div className="Star">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>

                <div className="price">
                  <p>
                    <del>Rs.{post.original_fees}</del>
                  </p>
                  <div className="discount ">
                       {post.discount}%
                  </div>
                  <div className="Original">
                    <h2> Rs. {post.discounted_fees}</h2>
                    <p>{post.fees_cycle}</p>
                  </div>
                  
                </div>
                <div className="address">
                  <div className="add-1">
                  <p>{post.nearest_place[0]}</p>
                 
                  </div>

                  <div className="add-2">
                  <p>{post.nearest_place[1]}</p>
                  </div>
                  <h4>93% Match : {post.famous_nearest_places}</h4>
                  
                 </div>

                 <div className="offertext flash">
                    <p>{post.offertext}</p>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
