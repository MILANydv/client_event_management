import React from "react";

export default function App() {
  return (
    <footer id="footer" className="footer bg-secondary">
      <div className="container">
        <div className="hm-footer-copyright text-center">
           
          <p>
            ©copyright. designed and developed by <a href="/">Evento</a>
          </p>
        </div>
      </div>
      <div id="scroll-Top">
        <div className="return-to-top">
          <i
            className="fa fa-angle-up "
            id="scroll-top"
            data-toggle="tooltip"
            data-placement="top"
            title
            data-original-title="Back to Top"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
}
