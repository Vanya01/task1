import {Route} from 'react-router-dom'
import {useSelector} from "react-redux";

export default function Cards(props) {
    let state = useSelector(state => state);
    let photos = state.photo
    console.log(photos)

    return (
        <div className={'wrapper'}>
            {
                photos.map(value => console.log(value))
            }
        </div>
    )
}
