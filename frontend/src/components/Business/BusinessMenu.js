import { useEffect, useState } from 'react';
import EditBusinessPage from './EditBusiness';
import DeleteBusinessModal from './BusinessDeleteModal'
import './index.css'

export default function BusinessMenu({ business }) {
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };
      }, [showMenu]);

return (
    <>
    <div className="udBusiness">
        <button className="button" onClick={openMenu}>Edit Business</button>
        {showMenu && (
            <>
            <div id='update_delete_business_dropdown'>
            <EditBusinessPage business={business} setShowMenu={setShowMenu} />
            <DeleteBusinessModal business={business}/>
            </div>
            </>
        )}
    </div>
    </>
    )
}
