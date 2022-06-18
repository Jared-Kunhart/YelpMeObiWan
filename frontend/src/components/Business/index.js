import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import ProfileButton from '../Navigation/ProfileButton';
import CreateBusinessPage from "./CreateBusiness";
import BusinessModal from "./BusinessModal";
import BusinessSearchModal from "./BusinessSearchModal";
import BusinessSearchModalSubmit from "./BusinessSearchModalSubmit";
import { getAllReviews } from "../../store/review";
import BusinessMenu from "./BusinessMenu";
import { Modal } from "../../context/Modal"
import './index.css'

const Businesses = ({sessionUser}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const businesses = useSelector(state => Object.values(state.business))
    const reviews = useSelector(state => Object.values(state.review))
    const businesslist = Object.values(businesses)?.map((business) => [business?.id, business?.title, business?.description, business?.location, business?.imageUrl, business?.ownerId]);
    // console.log(businesslist)


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

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //       setShowMenu(false);
    //     };
    //     let dropdown = document.querySelector("#navbar > div > div.homeLink > div.create-dropdown")
    //     let sneakyDiv = document.querySelector("#root > main > nav > div.businessCard")
    //     dropdown.addEventListener('click', console.log("hello"))
    //     document.addEventListener('click', closeMenu)
    //     // if there is a dropdown and they click, do nothing, if they click outside the drop down close menu
    //     return () => document.removeEventListener("click", closeMenu);
    //   }, [showMenu]);

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

    const [filteredList, setFilteredList] = useState([]);
    // console.log(filteredList)
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        setFilteredList(
            businesslist.filter((business) =>
            business[1].toLowerCase().includes(searchWord.toLowerCase())
            )
        );
        // const search_bar = document.querySelector("#search-form > input")
        // if (searchWord.length > 1) {
        //     search_bar.addEventListener('ariaHasPopup', setSearchWord(""))
        // }
    }, [searchWord]);


    const handleSubmit = (e) => {
        e.preventDefault()
            return (
                <BusinessSearchModalSubmit setSearchWord={setSearchWord} business={filteredList[0]} reviews={reviews} sessionUser={sessionUser} />
            )
    }

    // const isActive = (e) => {
    //     const searchInput = document.getElementsByClassName("mainSearch")
    //     const searchin = document.getElementById("search-container")
    //     if (searchInput === document.activeElement) {
    //         searchin.style.display = "block"
    //         setShowMenu(true)
    //         return true
    //     } else {
    //         searchin.style.display = "none"
    //         console.log("else statement")
    //         setTimeout(() => {
    //             // setSearchWord("")
    //             // setShowMenu(false)
    //             return false
    //         }, 1000);
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
                    <form onSubmit={(e) => handleSubmit(e)} id="search-form">
                    <input
                    className="mainSearch"
                    placeholder="Find Cantina's, Droid Repair, Spaceports..."
                    value={searchWord}
                    type="search"
                    // onClick={(e) => isActive(e)}
                    // aria-haspopup={true | "menu"}
                    // onBlur={() => searchWord("")}
                    // onClick={() => setShowMenu(true)}
                    // onBlur={() => setShowMenu(false)}
                    onChange={(e) => setSearchWord(e.target.value)}
                    ></input>
                    </form>
                    <div id="search-container">
                    {searchWord != "" && (
                    <div className="searchresult-list">
                        {filteredList?.slice(0, 5)?.map((business) => (
                        <div key={business[0]} className="mapped_businesses_div">
                            <BusinessSearchModal setSearchWord={setSearchWord} business={business} reviews={reviews} sessionUser={sessionUser} />
                        </div>
                        ))}
                    </div>
                    )}
                    </div>
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
