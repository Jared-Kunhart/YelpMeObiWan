import { Link, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBusinesses } from '../../store/business';
import BusinessDetail from './BusinessDetail';
import ProfileButton from '../Navigation/ProfileButton';
import './BusinessDetail.css'

const Businesses = ({sessionUser}) => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => Object.values(state.business))
    useEffect(() => {
        dispatch(getAllBusinesses())
    }, [dispatch])

    return (

    <main>
        <nav>
          <div id="navbar">
            <div className="toolbar">
              Home, Create a Business, Write a Review
            </div>
            <div id="profileButton"><ProfileButton user={sessionUser} /></div></div>
                <div id="searchSplashArea">
                    <div className="yelpImage"><img src="/images/yelpme.png" alt=""></img></div>
                    <div id="searchBar">
                    <input className="mainSearch" placeholder="Find Cantina's, Droid Repair, Spaceports..."></input>
                    </div>
                </div>
            <div className="businessCard">
            {businesses.map(business => {
                return (
                <div className="card">
                    <img id="businessImage" src={business.imageUrl} alt=""></img>
                    <Link key={business.id} to={`/businesses/${business.id}`}>
                        <div id="businessTitle">{business.title}</div>
                    </Link>
                    <div id="businessDescription">{business.description}</div>
                    <div id="businessLocation">Location: {business.location}</div>
                </div>
                )
            })}
            </div>
        </nav>
    {/* <Route path='/businesses/:businessId'>
        <BusinessDetail />

    </Route> */}
    </main>
    )
}

export default Businesses;
