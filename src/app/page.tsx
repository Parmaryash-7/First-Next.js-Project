import ProductSlider from './components/ProductSlider';

export default function Home() {
  return (<>
    <ProductSlider />
    <div className="main-container section-padding">
      <div className="flex-row">
        <div className="left-section-details inner-flex text-start">
          <p>About Us</p>
          <h1>Where Science <br />
            Meets Humanity
          </h1>
        </div>
        <div className="left-section-details inner-flex text-start">
          <p>Brillex Clinical Research is a full-service Contract Research Organization (CRO) dedicated to providing end-to-end clinical trial support. With a strong commitment to quality, compliance, innovation and tailor-made solutions, we cater to pharmaceutical, biotechnology, and medical device companies worldwide. Our expertise spans across early phase, late phase and comprehensive pharmacovigilance services (Phase I to Phase IV clinical trials, Patient PKs, Bio-equivalence and Bio- availability studies in healthy volunteers, etc.). At Brillex, we transform research into results with precision, efficiency, and regulatory excellence.</p>
        </div>
      </div>
    </div>
  </>
  );
}
