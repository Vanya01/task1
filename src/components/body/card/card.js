import {useEffect} from "react";
import {API_SERVICE} from "../../services/services";
import {useDispatch, useSelector} from "react-redux";
import {Pagination} from "@material-ui/lab"
import './card_style.css';

export default function Card() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let photos = state.photo;
    let pages = state.pages;
    let totalPages = state.total_pages
    console.log(photos)

    useEffect(() => {
        API_SERVICE(pages).then(value => {
            dispatch(
                {type: "GET_PHOTOS", payload: (value.data)})
            dispatch(
                {type: "TOTAL_PAGES", payload: (value.data.total_pages)})
        })
    }, [pages])


    return (
        photos.map(value => <div className={'wrapper'}>
                <div className="choose">
                    <h2>Hi! Please choose the settings</h2>
                    <div className={'instruction'}>
                        <h3>Camera:</h3>
                        <span className={'options'}>

                      </span>
                    </div>
                </div>
                <button className={'btn'}>Load this!</button>
            </div>
        )
    )
}
