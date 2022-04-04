import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllBusinesses } from '../../store/business';
import BusinessDetail from './BusinessDetail';

const Businesses = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(state => Object.values(state.business))
    useEffect(() => {
        dispatch(getAllBusinesses())
    }, [dispatch])

    return (
        <div>
            <div className='businesses'>
              {businesses?.map(({ id, title, description, location, imageUrl }) => (
                <BusinessDetail
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    location={location}
                    imageUrl={imageUrl}
                />
              ))}
            </div>
        </div>

    )
}

export default Businesses;
