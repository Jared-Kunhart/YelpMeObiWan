import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBusinesses } from '../../store/business';
import BusinessDetail from './BusinessDetail';
import { NavLink, Link, Route } from "react-router-dom";

const Businesses = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => Object.values(state.business))
    useEffect(() => {
        dispatch(getAllBusinesses())
    }, [dispatch])

    return (
    <main>
        <nav>
            {businesses.map(business => {
                return (
                    <Link key={business.id} to={`/businesses/${business.id}`}>
                        {business.title}
                    </Link>
                )
            })}
        </nav>
    <Route path='/businesses/:businessId'>
        <BusinessDetail businesses={businesses} />
    </Route>
    </main>
    )
}

export default Businesses;


// <div>
// <div className='businesses'>
//   {businesses?.map(({ id, title, description, location, imageUrl }) => (
//     <BusinessDetail
//         key={id}
//         id={id}
//         title={title}
//         description={description}
//         location={location}
//         imageUrl={imageUrl}
//     />
//   ))}
// </div>
// </div>
