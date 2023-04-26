import { useState } from "react";

export const useNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showProject, setShowProject] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(true);
    setShowInfo(false);
    setShowHome(false);
    setShowProject(false);
  };

  const handleInfoClick = () => {
    setShowInfo(true);
    setShowMenu(false);
    setShowHome(false);
    setShowProject(false);
  };

  const handleProjectClick = () => {
    setShowInfo(false);
    setShowMenu(false);
    setShowHome(false);
    setShowProject(true);
  };

  const handleHomeClick = () => {
    setShowInfo(true);
    setShowMenu(false);
    setShowHome(true);
    setShowProject(false);
  };

  return {
    showMenu,
    setShowMenu,
    showInfo,
    setShowInfo,
    showHome,
    setShowHome,
    showProject,
    setShowProject,
    handleMenuClick,
    handleInfoClick,
    handleProjectClick,
    handleHomeClick,
  };
};
