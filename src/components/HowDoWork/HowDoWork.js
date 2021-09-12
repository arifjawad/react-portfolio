import React from 'react';
import "./HowDoWork.css";
import anime from 'animejs/lib/anime.es';

let didScroll = false;

let paralaxTitles = document.querySelectorAll('.paralax-title');
let paralaxTitlesT2 = document.querySelectorAll('.paralax-title-t2');
const scrollInProgress = () => {
    didScroll = true
}

const raf = () => {
    if(didScroll) {
        paralaxTitles.forEach((element, index) => {
            element.style.transform = "translateX("+ window.scrollY / 1.5 + "px)"
        })
        paralaxTitlesT2.forEach((element, index) => {
            element.style.transform = "translateX(-"+ window.scrollY / 2.8 + "px)"
        })
        didScroll = false;
    }
    requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress);

const HowDoWork = () => {

    return (
        <>
      <section className="section hdw">
    
          <h2 className="hdw-title">
              How do I work.
          </h2>
      
            <div className="scroll-outer">
	            <div className="scroll-inner">

		<h2 className="scroll-title">
			<span className="paralax-title hdw-p">
            I work on projects through Analyzing the concepts.
			</span>
		</h2>
	</div>

	<h2 className="scroll-title-t2">
		<span className="paralax-title-t2 hdw-p">
        the concepts.That bring the ideas to live.
		</span>
	</h2>
</div>
           
       {/* <div class="hero-item-two">
            <div class="small-card card1 ">
                <p>Sketching</p>
            </div>
            <div class="small-card card2">
                <p>creating Design</p>

            </div>
            <div class="small-card card3">
                <p>Development</p>
            </div>
            <div class="small-card card4">
                <p>Final Deployment</p>
            </div>

        </div> */}
        </section>
        </>
    );
};

export default HowDoWork;