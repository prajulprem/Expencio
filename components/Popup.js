import { RiCloseLargeLine } from "react-icons/ri";
import { useEffect } from "react";


const Popup = ({open, onClose, children}) => {

useEffect(() => {
    if (open) {
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll when popup is closed
      document.body.style.overflow = 'auto';
    }
       // Cleanup function to ensure body overflow is reset
    return () => {
      document.body.style.overflow = 'auto';
    };
    }, [open]);

  return (
    <>
     <div style={{
        // scale: popupOpen ? '1' : '0',
        transform: open ? 'translateX(0%)' : 'translateX(-200%)'
      }} 
       className='fixed inset-0 w-full h-full z-10 transition-all duration-500'>
      <div className='container mx-auto mt-1 bg-slate-800 max-w-2xl h-[80vh] rounded-xl  px-4 py-6 overflow-auto'>
        <button onClick = {() => onClose(false)} className='bg-slate-700 mb-2 rounded-full w-11 h-11 flex items-center justify-center  select-none'><RiCloseLargeLine className="h-11 w-11" /></button>
        {children}
      </div>
    </div>
    </>
  )
}

export default Popup