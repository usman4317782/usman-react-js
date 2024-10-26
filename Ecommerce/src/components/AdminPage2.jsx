import React from "react";

const ProgressCard = ({ title, percentage, barClass }) => (
  <div>
    <h4 className="small font-weight-bold">
      {title} <span className="float-right">{percentage}%</span>
    </h4>
    <div className="progress mb-4">
      <div
        className={`progress-bar ${barClass}`}
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
);

const ColorCard = ({ colorName, hexCode, bgClass }) => (
  <div className="col-lg-6 mb-4">
    <div className={`card ${bgClass} text-white shadow`}>
      <div className="card-body">
        {colorName}
        <div className="text-white-50 small">{hexCode}</div>
      </div>
    </div>
  </div>
);

const Illustrations = () => (
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
    </div>
    <div className="card-body">
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: "25rem" }}
          src="img/undraw_posting_photo.svg"
          alt="Illustration"
        />
      </div>
      <p>
        Add some quality, svg illustrations to your project courtesy of{" "}
        <a target="_blank" rel="nofollow" href="https://undraw.co/">
          unDraw
        </a>
        , a constantly updated collection of beautiful svg images that you can
        use completely free and without attribution!
      </p>
      <a target="_blank" rel="nofollow" href="https://undraw.co/">
        Browse Illustrations on unDraw &rarr;
      </a>
    </div>
  </div>
);

const Approach = () => (
  <div className="card shadow mb-4">
    <div className="card-header py-3">
      <h6 className="m-0 font-weight-bold text-primary">
        Development Approach
      </h6>
    </div>
    <div className="card-body">
      <p>
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes to reduce
        CSS bloat and poor page performance. Custom CSS classes are used to
        create custom components and utility classes.
      </p>
      <p className="mb-0">
        Before working with this theme, you should become familiar with the
        Bootstrap framework, especially the utility classes.
      </p>
    </div>
  </div>
);

const MainContent = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
          </div>
          <div className="card-body">
            <ProgressCard
              title="Server Migration"
              percentage={20}
              barClass="bg-danger"
            />
            <ProgressCard
              title="Sales Tracking"
              percentage={40}
              barClass="bg-warning"
            />
            <ProgressCard
              title="Customer Database"
              percentage={60}
              barClass=""
            />
            <ProgressCard
              title="Payout Details"
              percentage={80}
              barClass="bg-info"
            />
            <ProgressCard
              title="Account Setup"
              percentage={100}
              barClass="bg-success"
            />
          </div>
        </div>

        <div className="row">
          <ColorCard
            colorName="Primary"
            hexCode="#4e73df"
            bgClass="bg-primary"
          />
          <ColorCard
            colorName="Success"
            hexCode="#1cc88a"
            bgClass="bg-success"
          />
          <ColorCard colorName="Info" hexCode="#36b9cc" bgClass="bg-info" />
          <ColorCard
            colorName="Warning"
            hexCode="#f6c23e"
            bgClass="bg-warning"
          />
          <ColorCard colorName="Danger" hexCode="#e74a3b" bgClass="bg-danger" />
          <ColorCard
            colorName="Secondary"
            hexCode="#858796"
            bgClass="bg-secondary"
          />
          <ColorCard
            colorName="Light"
            hexCode="#f8f9fc"
            bgClass="bg-light text-black"
          />
          <ColorCard colorName="Dark" hexCode="#5a5c69" bgClass="bg-dark" />
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <Illustrations />
        <Approach />
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="sticky-footer bg-white">
    <div className="container my-auto">
      <div className="copyright text-center my-auto">
        <span>Copyright &copy; Your Website 2021</span>
      </div>
    </div>
  </footer>
);

const PageWrapper = () => (
  <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
      <MainContent />
      <Footer />
    </div>
  </div>
);

export default PageWrapper;
