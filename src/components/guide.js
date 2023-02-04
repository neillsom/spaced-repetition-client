import React from 'react';
import '../index.css';
import './styles/guide.css';
import { connect } from 'react-redux';
import { info } from '../actions/auth';

function Guide(props) {
	return (
		<div className="guide-container">
			<div className="content">
				{/* <h3>Study Guide</h3> */}
				{/* <button
					className="close"
					onClick={event => {
						props.dispatch(info(event));
					}}
				>
					<a>Close</a>
				</button> */}
				<h3>Use this guide to learn the scientific latin names.</h3>
				<span className="protip">
					ProTip: Press the escape key to toggle the guide.
				</span>
				<ul className="study-group">
					<li>
						<h3>Baptisia tinctoria</h3>
						<p>Wild Indigo</p>
						<img
							src="https://live.staticflickr.com/21/25630246_305055ee2f_h.jpg"
							alt="Wild Indigo, latin name Baptisia tinctoria"
						/>
					</li>
					<li>
						<h3>Caulophyllum thalictroides</h3>
						<p>Blue Cohosh</p>
						<img
							src="https://78.media.tumblr.com/47f7a7c912bf7085660451331537a174/tumblr_mhi4mku3bv1rqflawo2_1280.jpg"
							alt="Blue Cohosh, latin name Caulophyllum thalictroides"
						/>
					</li>
					<li>
						<h3>Chamaelirium luteum</h3>
						<p>False Unicorn</p>
						<img
							src="https://c2.staticflickr.com/6/5541/9035956585_8f6b0ee0bf_b.jpg"
							alt="False Unicorn, latin name Chamaelirium luteum"
						/>
					</li>
					<li>
						<h3>Cypripedium</h3>
						<p>Pink Lady&apos;s slipper</p>
						<img
							src="https://live.staticflickr.com/3768/9448135980_df0fda70b0_o.jpg"
							alt="Pink Lady's slipper, latin name Cypripedium spp."
						/>
					</li>
					<li>
						<h3>Echinacea</h3>
						<p>Echinacea</p>
						<img
							src="https://c1.staticflickr.com/9/8036/8070800436_608347d2ba_b.jpg"
							alt="Echinacea, latin name Echinacea spp."
						/>
					</li>
					<li>
						<h3>Eriodictyon californicum</h3>
						<p>Yerba Santa</p>
						<img
							src="https://live.staticflickr.com/3713/14113702838_3d5d04ca98_b.jpg"
							alt="Yerba Santa, latin name Eriodictyon californicum"
						/>
					</li>

					<li>
						<h3>Eupatorium perfoliatum</h3>
						<p>Boneset</p>
						<img
							src="https://live.staticflickr.com/65535/51507504670_17c3c7ea42_h.jpg"
							alt="Boneset, latin name Eupatorium perfoliatum"
						/>
					</li>
					<li>
						<h3>Hydrastis canadensis</h3>
						<p>Goldenseal</p>
						<img
							src="https://c1.staticflickr.com/5/4193/34340963161_7657cce445_b.jpg"
							alt="Goldenseal, latin name Hydrastis canadensis"
						/>
					</li>
					<li>
						<h3>Ligusticum porteri</h3>
						<p>Osha</p>
						<img
							src="https://live.staticflickr.com/6075/6058590257_197d4fc2f3_b.jpg"
							alt="Osha, latin name Ligusticum porteri"
						/>
					</li>
					<li>
						<h3>Mahonia aquifolium</h3>
						<p>Oregon Grape</p>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Mahonia_aquifolium.jpg/1024px-Mahonia_aquifolium.jpg"
							alt="Oregon Grape, latin name Mahonia aquifolium"
						/>
					</li>
					<li>
						<h3>Mitchella repens</h3>
						<p>Partridge Berry</p>
						<img
							src="https://c2.staticflickr.com/2/1654/25719072110_e87d03a64b_b.jpg"
							alt="Partridge Berry, latin name Mitchella repens"
						/>
					</li>
					<li>
						<h3>Panax quinquefolius</h3>
						<p>American ginseng</p>
						<img
							src="https://c1.staticflickr.com/7/6198/6093263204_79a99a5217_b.jpg"
							alt="American ginseng, latin name Panax quinquefolius"
						/>
					</li>
					<li>
						<h3>Sanguinaria canadensis</h3>
						<p>Bloodroot</p>
						<img
							src="https://live.staticflickr.com/7864/45811562595_e7273d3719_h.jpg"
							alt="Bloodroot, latin name Sanguinaria canadensis"
						/>
					</li>
					<li>
						<h3>Ulmus rubra</h3>
						<p>Slippery Elm</p>
						<img
							src="https://live.staticflickr.com/5337/31199066226_14bb328999_b.jpg"
							alt="Slippery Elm, latin name Ulmus rubra"
						/>
					</li>

					<li>
						<h3>Viburnum prunifolium</h3>
						<p>Black Haw</p>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/1552-Viburnum_prunifolium-DZ-8.12.JPG/800px-1552-Viburnum_prunifolium-DZ-8.12.JPG"
							alt="Black Haw, latin name Viburnum prunifolium"
						/>
					</li>
				</ul>
				<button
					className="close"
					onClick={event => {
						props.dispatch(info(event));
					}}
				>
					<a>Close</a>
				</button>
			</div>
		</div>
	);
}

export default connect()(Guide);
