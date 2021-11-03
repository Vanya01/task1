import './header_styles.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {API_SERVICE} from "../services/services";

export default function Header() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const pages = state.pages;
    const photos = state.photo;

    useEffect(() => {
        API_SERVICE(pages).then(value => {
            dispatch({
                type: "GET_PHOTOS", payload: (value.data)
            })
        })
    }, [pages])


    return (
        <div className={'wrapper'}>
            <h3>Let's discover the Mars !</h3>
            <div className={'wrap'}>
                <div className={'filterWrap'}>
                    <div className={'filter'}>
                        <h4>Choose the settings!</h4>
                        <div className={'itemsWraap'}>
                            <form>
                                <input type="text" placeholder={'Camera'}/>
                            </form>
                            <form>
                                <input type="text" placeholder={'Rover'}/>
                            </form>
                            <form>
                                <input type="text" placeholder={'Sol'}/>
                            </form>
                        </div>
                    </div>
                </div>
                <Link className={'btn'} to={'/about'}>
                    <Button color={'primary'}> Load this! </Button>
                </Link>
            </div>
        </div>
    )
};
