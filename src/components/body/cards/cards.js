import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {API_SERVICE} from "../../services/services";
import './cards_styles.css';
import {Link} from "react-router-dom";
import {Pagination} from "@material-ui/lab";

export default function Cards() {
    const state = useSelector(state => state);
    const photos = state.photo;
    const dispatch = useDispatch();
    const pages = state.pages;
    const totalPages = state.totalPages;
    const pageLimit = useState(30);
    console.log(state.totalPages, 'cardsss')

    useEffect(() => {
        API_SERVICE(pages).then(value => {
            dispatch(
                {type: "GET_PHOTOS", payload: (value.data)})
            dispatch(
                {type: "TOTAL_PAGES", payload: (value.data.photos.length)})
        })
    }, [pages])

    let handleChange = (event, value) => {
        dispatch({type: 'GET_PAGES', payload: (value)});
    }
    console.log(handleChange)
    return (
        <>
            {/* PAGINATION */}
            <div className={'pagination'}>
                <Pagination count={totalPages} color={'secondary'} onChange={handleChange}/>
            </div>
            <div className={'notice'}>
                <h4>Click any photo to go back</h4>
                <span id={'arrow'}>↓</span>
            </div>
            <div className={'outWrap'}>
                {
                    photos.map(value => {
                        return (
                            value.photos.map(value =>
                                <div key={value.id} className={'contentWrap'}>
                                    <Link to={'/home'}>
                                        {/*PHOTOS*/}
                                        <div className={'imgsHere'}>
                                            <img src={value.img_src} alt="Photo"/>
                                        </div>
                                    </Link>
                                    <div className={'title'}>
                                        <div className={'wrapTilte'}>
                                            <h2>Rover name:</h2>
                                            <p>{value.rover.name}</p>
                                        </div>
                                        <div className={'rover'}>
                                            <p>Launch date:</p>
                                            {value.rover.launch_date}
                                            <br/>
                                            <p>Launch date:</p>
                                            {value.rover.launch_date}
                                        </div>
                                        <div className={'spanWrap'}>
                                    <span className={'titleSpan'}>
                                          <h4>Camera name:</h4>
                                        <p>{value.camera.full_name}</p>
                                    </span>
                                            <span className={'titleSpan'}>
                                        <h4>Earth date:</h4>
                                        <p>{value.earth_date}</p>
                                </span>
                                        </div>
                                        <div className={'cardFooter'}>
                                            Sol - {value.sol}
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    })
                }
            </div>
        </>
    )
}
