import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBusinesses } from '../../store/business';

const Businesses = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => Object.values(state.business))
    useEffect(() => {
        dispatch(getAllBusinesses())
    }, [dispatch])

    return (
        <div>
            <ul>
            {businesses?.map(business =>
                <li key={business.id}>
                    {business.title}
                </li>
                )}
            </ul>
        </div>
    )
}

export default Businesses;
