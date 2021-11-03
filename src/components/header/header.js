import './header_styles.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {SERVICE_API} from "../services/services";

export default function Header() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const pages = state.pages;

    useEffect(() => {
        SERVICE_API(pages).then(value => {
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
                            <div className={'camera'}>
                            <h5> Camera type: </h5><br/>
                                <input type="radio" name="choice" value="yes" className="label"/>
                                <label htmlFor="choice-yes">FHAZ</label>
                                <input type="radio" name="choice" value="no" className="label"/>
                                <label htmlFor="choice_">RHAZ</label>
                                <input type="radio" name="choice" value="no" className="label"/>
                                <label htmlFor="choice_">MAST</label>
                                <input type="radio" name="choice" value="no" className="label"/>
                                <label htmlFor="choice_">NAVCAM</label>
                            </div>
                            {/*<div className={'rover'}>*/}
                            {/*    <input type="radio" name="choice" value="yes" id="choice-yes"/>*/}
                            {/*    <label htmlFor="choice-yes">Yes</label>*/}
                            {/*    <input type="radio" name="choice" value="no" id="choice-no"/>*/}
                            {/*    <label htmlFor="choice_">No</label>*/}
                            {/*</div>*/}
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
