import './header_styles.css';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
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

    const [formData, setFormData] = useState(null);

    const changeForm = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const arr = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI'];

    return (
        <div className={'wrapper'}>
            <h3>Let's discover the Mars !</h3>
            <div className={'wrap'}>
                <div className={'filterWrap'}>
                    <div className={'filter'}>
                        <h4>Choose the settings!</h4>
                        <div className={'itemsWraap'}>
                            <form onChange={changeForm}>
                                <h5> Camera type: </h5>
                                <select name={'camera'}>
                                    {
                                        arr.map(item => <option key={item} value={item}>{item}</option>)
                                    }
                                </select>
                              </form>
                        </div>
                    </div>
                </div>
                <Link className={'btn'} to={{pathname:'/about', state:formData}}>
                    <Button color={'primary'}> Load this! </Button>
                </Link>
            </div>
        </div>
    )
};
