import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AddCard.css';
import { postAdded } from '../CardSlice';

AddCard.propTypes = {};

function AddCard() {
    const dispatch = useDispatch()

    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')



    const onAvatarChanged = e => setAvatar(e.target.value)
    const onNameChanged = e => setName(e.target.value)
    const onDescChanged = e => setDesc(e.target.value)

    const onSavePostClicked = () => {
        if (avatar && name && desc) {
            dispatch(
                postAdded(
                    avatar,
                    name,
                    desc
                )
            )
            setAvatar('')
            setName('')
            setDesc('')
        }
    }

    return (
        <section>
            <h2>Add a New Card</h2>
            <form>
                <div className="input-group">Avatar:
                    <input
                        type="file"
                        class="form-control"
                        value={avatar}
                        onChange={onAvatarChanged} id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    {/* <FontAwesomeIcon icon={faCloudUpload} />
                    Upload Image */}
                </div>
                <div className='name_post'>
                    <label htmlFor="postName">Name:</label>
                    <input
                        type="text"
                        id="postName"
                        name="postName"
                        value={name}
                        onChange={onNameChanged}
                    />
                </div>
                <div className="mb-3">
                    <label for="cardContent" className="form-label">Depscription: </label>
                    <textarea
                        id="cardContent"
                        name="cardContent"
                        rows={"1"}
                        value={desc}
                        onChange={onDescChanged}
                    />
                </div>
                <div className="input-group">Image:
                    <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                    {/* <FontAwesomeIcon icon={faCloudUpload} />
                    Upload Image */}
                </div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={onSavePostClicked}
                    >Save</button>
                    <button type="button" className="btn btn-outline-primary">Cancel</button>

                </div>
            </form>
        </section>
    );
}

export default AddCard;