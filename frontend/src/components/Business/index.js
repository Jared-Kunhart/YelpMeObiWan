import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import ProfileButton from '../Navigation/ProfileButton';
import CreateBusinessPage from "./CreateBusiness";
import BusinessModal from "./BusinessModal";
import { getAllReviews } from "../../store/review";
import BusinessMenu from "./BusinessMenu";
import './index.css'


const Businesses = ({sessionUser}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const businesses = useSelector(state => Object.values(state.business))
    const reviews = useSelector(state => Object.values(state.review))

    useEffect(() => {
        dispatch(getAllReviews())
    }, [dispatch])

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
        // let sneakyDiv = document.querySelector("#root > main > nav > div.businessCard")
        // sneakyDiv.addEventListener('click', closeMenu)

        // return () => document.removeEventListener("click", closeMenu);
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

    // const [filteredList, setFilteredList] = useState([]);
    // const [searchWord, setSearchWord] = useState("");

    // useEffect(() => {
    //     setFilteredList(
    //         gamelist.filter((game) =>
    //         game[0].toLowerCase().includes(searchWord.toLowerCase())
    //         )
    //     );
    // }, [searchWord]);

    // function handleSubmit(e) {
    //     console.log(filteredList[0][2], "filteredList");
    //     e.preventDefault();
    //     if (filteredList.length > 0) {
    //         history.push(`/games/${filteredList[0][2]}`);
    //     }
    // }

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
                    <div className="cardHover">
                        <div>
                        <figure><BusinessModal business={business} reviews={reviews} sessionUser={sessionUser} /></figure>
                        </div>
                        <div id="businessTitle">{business?.title}</div>
                    </div>
                    <div id="businessDescription">{business?.description}</div>
                    <div id="businessLocation">Location: {business?.location}</div>
                    <div id="editBusinessButton">
                    {sessionUser && sessionUser.id === business.ownerId && (
                        <>
                        <BusinessMenu business={business} />
                        </>
                    )}
                    </div>
                </div>
            ))}
            </div>
        </nav>
    </main>
    )
}

export default Businesses;
