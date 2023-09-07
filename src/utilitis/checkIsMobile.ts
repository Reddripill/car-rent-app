const checkIsMobile = (userAgent: string): boolean => {
   const isMobileView = userAgent!.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
   );
   if (isMobileView) {
      return true;
   } else {
      return false;
   }
};

export default checkIsMobile;
