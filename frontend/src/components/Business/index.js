import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import ProfileButton from '../Navigation/ProfileButton';
import './BusinessDetail.css'
import CreateBusinessPage from "./CreateBusiness";

const Businesses = ({sessionUser}) => {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const businesses = useSelector(state => Object.values(state.business))
    useEffect(() => {
        dispatch(getAllBusinesses())
    }, [dispatch])

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };
        let sneakyDiv = document.querySelector("#root > main > nav > div.businessCard")
        sneakyDiv.addEventListener('click', closeMenu)

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

    function randomImg() {
    let images = [
    "/images/backgrounds/cantina.png",
    "/images/backgrounds/Star-Wars-Land_Full_33458.png",
    "/images/backgrounds/bar.png",
    "/images/backgrounds/cantina.png",
    "/images/backgrounds/endor.png",
    "/images/backgrounds/xwing.png",
    "/images/backgrounds/yelpmeobi.png"
    ]
    let random = images[Math.floor(Math.random() * images.length)];
    document.querySelector("#backgroundFloat").style.backgroundImage = 'url(' + random + ')';
    }

    return (

    <main>
        <nav>
        <div id="backgroundFloat" onLoad={randomImg}>
          <div id="navbar">
            <div className="toolbar">
              <div className="homeLink">
                  <div className="homeCreate">
              <Link to="/businesses">Home</Link>
              </div>
              <div className="createLink">
                <div onClick={openMenu}>
                Create a Business
                </div></div>
                {showMenu && (
                    <div className="create-dropdown">
                        <CreateBusinessPage setShowMenu={setShowMenu} />
                    </div>
                )}
              </div>
            <div id="profileButton"><ProfileButton user={sessionUser} /></div></div>
            </div>
                <div id="searchSplashArea">
                    <div className="yelpImage"><img src="/images/yelpme.png" id="yelpImg" alt=""></img></div>
                    <div id="searchBar">
                    <input className="mainSearch" placeholder="Find Cantina's, Droid Repair, Spaceports..."></input>
                    </div>
                </div>

            </div>
            <div className="businessCard">
            {businesses?.map(business => (
                <div className="card" key={business?.id}>
                    <Link to={`/businesses/${business?.id}`}>
                    <div className="cardHover">
                        <div>
                        <figure><img id="businessImage" src={business?.imageUrl} alt=""></img></figure>
                        </div>
                    </div>
                        <div id="businessTitle">{business?.title}</div>
                    </Link>
                    <div id="businessDescription">{business?.description}</div>
                    <div id="businessLocation">Location: {business?.location}</div>
                </div>
            ))}
            </div>
        </nav>
    </main>
    )
}

export default Businesses;
