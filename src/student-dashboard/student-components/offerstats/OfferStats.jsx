import React, { useState } from "react";
import "./OfferStats.css";
 
const OfferStats = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
 
  const offerData = {
    accepted: 2,
    rejected: 2,
    pending: 1,
    total: 5,
    acceptedCompanies: ["Google", "Microsoft"],
    rejectedCompanies: ["TCS", "Infosys"],
    pendingCompanies: ["Wipro"],
    totalCompanies: ["Google", "Microsoft", "TCS", "Infosys", "Wipro"],
  };
 
  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };
 
  const getCompanyList = () => {
    switch (modalType) {
      case "accepted":
        return offerData.acceptedCompanies;
      case "rejected":
        return offerData.rejectedCompanies;
      case "pending":
        return offerData.pendingCompanies;
      case "total":
        return offerData.totalCompanies;
      default:
        return [];
    }
  };
 
  const getModalTitle = () => {
    return modalType ? `${modalType.charAt(0).toUpperCase() + modalType.slice(1)} Companies` : "";
  };
 
  return (
    <div className="offer-stats-ui">
      <div className="stats-grid">
        <div className="stat-card accepted" onClick={() => openModal("accepted")}>
          <div className="stat-icon">🎯</div>
          <div className="stat-title">Accepted</div>
          <div className="stat-value">{offerData.accepted}</div>
        </div>
 
        <div className="stat-card rejected" onClick={() => openModal("rejected")}>
          <div className="stat-icon">🚫</div>
          <div className="stat-title">Rejected</div>
          <div className="stat-value">{offerData.rejected}</div>
        </div>
 
        <div className="stat-card pending" onClick={() => openModal("pending")}>
          <div className="stat-icon"> 🕐</div>
          <div className="stat-title">Pending</div>
          <div className="stat-value">{offerData.pending}</div>
        </div>
 
        <div className="stat-card total" onClick={() => openModal("total")}>
          <div className="stat-icon"> 📊 </div>
          <div className="stat-title">Total</div>
          <div className="stat-value">{offerData.total}</div>
        </div>
      </div>
 
      {/* Reusable Modal */}
      {showModal && (
        <div className="modal-glass" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h3>{getModalTitle()}</h3>
            <ul className="company-list">
              {getCompanyList().map((company, idx) => (
                <li key={idx}>{company}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default OfferStats;