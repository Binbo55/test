import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import "./PostCard.css";
import { selectAllPosts } from "../CardSlice";

// This is LIST social
const PostCard = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article className="cards" key={post.id}>
            <div className="cards_header">
                <div className="cards_user">
                    <img className="avatar" src={post.avatar} alt='' />
                    <h3>{post.name}</h3>
                </div>

                <div className="cards_icon">
                    <FontAwesomeIcon className="icon_1" icon={faEdit} />
                    <FontAwesomeIcon className="icon_2" icon={faTrash} />
                </div>
            </div>
            <div className="cards_footer">
                <p>{post.desc.substring(0, 100)}</p>
                <img className="img" src={post.image} alt='' />
            </div>

        </article>
    ))

    return (
        <section>
            <h2>List social card</h2>
            <div className="group">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" type="button">Revert</button>

                    <button class="btn btn-warning" type="button"> Add</button>

                </div>
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="Search" />
                    <span className="input-group-text" id="search-addon" >
                        <FontAwesomeIcon icon={faSearch} />
                    </span >
                </div >
            </div>


            <div className="group_list">

                {renderedPosts}
            </div>
        </section >
    )
}

export default PostCard

