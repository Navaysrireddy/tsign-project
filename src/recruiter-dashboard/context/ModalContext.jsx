import React, { useState, createContext, useContext } from 'react';
 
const ModalContext = createContext({
  isScheduleInterviewOpen: false,
  isAddPositionOpen: false,
  isExportOpen: false,
  isCandidateActionOpen: false,
  selectedCandidate: null,
  selectedAction: null,
  openScheduleInterview: () => console.log('Default openScheduleInterview called'),
  closeScheduleInterview: () => console.log('Default closeScheduleInterview called'),
  openAddPosition: () => console.log('Default openAddPosition called'),
  closeAddPosition: () => console.log('Default closeAddPosition called'),
  openExport: () => console.log('Default openExport called'),
  closeExport: () => console.log('Default closeExport called'),
  openCandidateAction: () => console.log('Default openCandidateAction called'),
  closeCandidateAction: () => console.log('Default closeCandidateAction called')
});
 
export const useModal = () => useContext(ModalContext);
 
export const ModalProvider = ({ children }) => {
  const [isScheduleInterviewOpen, setIsScheduleInterviewOpen] = useState(false);
  const [isAddPositionOpen, setIsAddPositionOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isCandidateActionOpen, setIsCandidateActionOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
 
  const openScheduleInterview = () => setIsScheduleInterviewOpen(true);
  const closeScheduleInterview = () => setIsScheduleInterviewOpen(false);
  const openAddPosition = () => setIsAddPositionOpen(true);
  const closeAddPosition = () => setIsAddPositionOpen(false);
  const openExport = () => setIsExportOpen(true);
  const closeExport = () => setIsExportOpen(false);
 
  const openCandidateAction = (candidateId, action) => {
    setSelectedCandidate(candidateId);
    setSelectedAction(action);
    setIsCandidateActionOpen(true);
  };
 
  const closeCandidateAction = () => {
    setIsCandidateActionOpen(false);
    setSelectedCandidate(null);
    setSelectedAction(null);
  };
 
  return (
    <ModalContext.Provider
      value={{
        isScheduleInterviewOpen,
        isAddPositionOpen,
        isExportOpen,
        isCandidateActionOpen,
        selectedCandidate,
        selectedAction,
        openScheduleInterview,
        closeScheduleInterview,
        openAddPosition,
        closeAddPosition,
        openExport,
        closeExport,
        openCandidateAction,
        closeCandidateAction
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};