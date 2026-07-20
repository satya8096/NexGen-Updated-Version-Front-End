import React, { useEffect } from "react";
import { brandName } from "./../Data/BrandData";
import { RefundsAndCancleSEO } from "../Data/AllPageSEOs";

const RefundAndCancellationPolicy = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="refund-and-cancle-container">
      {RefundsAndCancleSEO}
      <div className="refund-main-background d-flex align-items-center justify-content-center flex-column">
        {/* Page Heading */}
        <h2 className="text-center mb-4 section-heading text-white">
          Refund and Cancellation Policy
        </h2>
      </div>
      <div className="container mt-5 p-3">
        <p>
          At {brandName} prioritizes clarity and openness in our refund and
          cancellation policies. Our policy is designed to ensure that our
          clients fully understand their refund rights and alternatives. Please
          read the following instructions carefully:
        </p>

        <h5 className="mt-4">Web Development & Design Assurance</h5>
        <p>
          Before beginning each project, we create a sample website to
          demonstrate the quality of our work. This enables clients to evaluate
          our skills and acquire trust before committing to our services. If you
          have any queries before to payment, please do not hesitate to contact
          us.
        </p>

        <h5 className="mt-4">Refund Eligibility Criteria</h5>
        <p>
          Every job is important to us, and we tackle it with expertise and
          devotion. When a customer is unsatisfied or wishes to change their
          project plan, they must refer to the following refund qualifying
          criteria:
        </p>

        <h5 className="mt-4">Advance Payment Requirement</h5>
        <p>
          To begin our services, a 30% advance payment is necessary. Clients who
          cancel their assignment within{" "}
          <i style={{ fontWeight: "800" }}> one day ( 24 Hours )</i> of
          completing the payment will receive a full refund. Please be informed
          that cancellations after this{" "}
          <i style={{ fontWeight: "800" }}> one day ( 24 Hours )</i> window will
          result in the loss of the upfront paid.
        </p>

        <h5 className="mt-4">Delivery Timelines & Refund Structure</h5>
        <ul className="list-unstyled">
          <li>
            <strong>Full Refund:</strong> Available if the project has not begun
            or Project cancel with in the 1 Day of advance payment.
          </li>
          <li>
            <strong>Partial Refund:</strong> If project work has begun and the
            customer wishes to cancel, the 25% advance money will not be
            reimbursed.
          </li>
          <li>
            <strong>No Refund:</strong> After obtaining full payment for a
            successful project delivery, any subsequent cancellation request
            will result in the total forfeiture of the cash.
          </li>
        </ul>

        <h5 className="mt-4">Policy Modifications</h5>
        <p>
          {brandName} This policy may be amended without prior notice. We
          recommend that clients examine our policy on a regular basis to keep
          up-to-date on changes. Revisions will apply to both current and new
          clients.
        </p>
      </div>
    </section>
  );
};

export default RefundAndCancellationPolicy;
