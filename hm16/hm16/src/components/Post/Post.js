import './Post.scss'
import sing from './img/sing.png'

import { faComment, faRetweet, faHeart, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Post(props) {
    return (
        <div className='post'>
            <div className='post-image'>
                <img src={props.author.photo} alt={props.author.name}/>
            </div>
            <div className='post-info'>
                <div className='top-info'>
                    <div className='info_name'>
                        {props.author.name}
                    </div>
                    <div className='info_sing'>
                        <img src={sing} alt='sing' />
                    </div>
                    <div className='info_tag'>
                        {props.author.nickname}
                    </div>
                    <div className='info_date'>
                        {props.date}
                    </div>
                </div>
                <div className='content-info'>
                    {props.content}
                </div>
                <div className='content-image'>
                    <img src={props.image} alt='post' />
                </div>
                <div className='reaction'>
                    <div className='reaction_comments'>
                        <FontAwesomeIcon icon={faComment} />
                        <span>482</span>
                    </div>
                    <div className='reaction_share'>
                        <FontAwesomeIcon icon={faRetweet} />
                        <span>146</span>
                    </div>
                    <div className='reaction_likes'>
                        <FontAwesomeIcon icon={faHeart} />
                        <span>887</span>
                    </div>
                    <div className='reaction_download'>
                        <FontAwesomeIcon icon={faDownload} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Post;