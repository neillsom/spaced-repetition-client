import React from "react";
import "../index.css"
import "./scripts/guide.css";
import { connect } from "react-redux";
import { info } from "../actions/auth";

function Guide(props) {

  return (
    <div className="overlay">
      <div className="content">
        <h3>Study Guide</h3>
        <h2>Medicinal Herbs</h2>
        <button className="close">
          <a onClick={event=> {
                  props.dispatch(info(event));
                }}
              >
                Close
              </a>
        </button>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <ul className="study-group">
          <li>
            <h3>Eupatorium perfoliatum</h3>
            <p>Boneset</p>
            <img src="https://c1.staticflickr.com/3/2433/3836338698_70a57830b1_z.jpg?zz=1" alt="Boneset, latin name Eupatorium perfoliatum" />
          </li>
          <li>
            <h3>Viburnum prunifolium</h3>
            <p>Black Haw</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1552-Viburnum_prunifolium-DZ-8.12.JPG/800px-1552-Viburnum_prunifolium-DZ-8.12.JPG" alt="Black Haw, latin name Viburnum prunifolium" />
          </li>
          <li>
            <h3>Mahonia aquifolium</h3>
            <p>Oregon Grape</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mahonia_aquifolium.jpg/1024px-Mahonia_aquifolium.jpg" alt="Oregon Grape, latin name Mahonia aquifolium" />
          </li>
          <li>
            <h3>Ligusticum porteri</h3>
            <p>Osha</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ligusticum_porteri_habitus.jpg/800px-Ligusticum_porteri_habitus.jpg" alt="Osha, latin name Ligusticum porteri" />
          </li>
          <li>
            <h3>Baptisia tinctoria</h3>
            <p>Wild Indigo</p>
            <img src="https://c1.staticflickr.com/1/274/18617150512_f97e42420b_b.jpg" alt="Wild Indigo, latin name Baptisia tinctoria" />
          </li>
          <li>
            <h3>Eriodictyon californicum</h3>
            <p>Yerba Santa</p>
            <img src="https://c2.staticflickr.com/6/5596/31149429955_446412e88b_b.jpg" alt="Yerba Santa, latin name Eriodictyon californicum" />
          </li>
          <li>
            <h3>Panax quinquefolius</h3>
            <p>American ginseng</p>
            <img src="https://c1.staticflickr.com/7/6198/6093263204_79a99a5217_b.jpg" alt="American ginseng, latin name Panax quinquefolius" />
          </li>
          <li>
            <h3>Sanguinaria canadensis</h3>
            <p>Bloodroot</p>
            <img src="https://c2.staticflickr.com/8/7455/9736602240_f0e2b13ac2_b.jpg" alt="Bloodroot, latin name Sanguinaria canadensis" />
          </li>
          <li>
            <h3>Echinaceae</h3>
            <p>Echinaceae</p>
            <img src="https://c1.staticflickr.com/9/8036/8070800436_608347d2ba_b.jpg" alt="Echinaceae, latin name Echinaceae spp." />
          </li>
          <li>
            <h3>Hydrastis canadensis</h3>
            <p>Goldenseal</p>
            <img src="https://c1.staticflickr.com/5/4193/34340963161_7657cce445_b.jpg" alt="Goldenseal, latin name Hydrastis canadensis" />
          </li>
          <li>
            <h3>Cypripedium</h3>
            <p>Pink Lady's slipper</p>
            <img src="https://78.media.tumblr.com/355b6e93f404a405e445bb5080e5889d/tumblr_mhgh08UkKn1rqflawo1_1280.jpg" alt="Pink Lady's slipper, latin name Cypripedium spp." />
          </li>
          <li>
            <h3>Chamaelirium luteum</h3>
            <p>False Unicorn</p>
            <img src="https://c2.staticflickr.com/6/5541/9035956585_8f6b0ee0bf_b.jpg" alt="False Unicorn, latin name Chamaelirium luteum" />
          </li>
          <li>
            <h3>Ulmus rubra</h3>
            <p>Slippery Elm</p>
            <img src="https://c1.staticflickr.com/5/4763/24747250147_b248fbd420_o.jpg" alt="Slippery Elm, latin name Ulmus rubra" />
          </li>
          <li>
            <h3>Mitchella repens</h3>
            <p>Partridge Berry</p>
            <img src="https://c2.staticflickr.com/2/1654/25719072110_e87d03a64b_b.jpg" alt="Partridge Berry, latin name Mitchella repens" />
          </li>
          <li>
            <h3>Caulophyllum thalictroides</h3>
            <p>Blue Cohosh</p>
            <img src="https://78.media.tumblr.com/47f7a7c912bf7085660451331537a174/tumblr_mhi4mku3bv1rqflawo2_1280.jpg" alt="Blue Cohosh, latin name Caulophyllum thalictroides" />
          </li>
        </ul>
      </div>
   </div>
  );}

export default connect()(Guide);
