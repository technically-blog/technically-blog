import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const MinCard = ({ blog }) => {
    return (
        <div className="lead">
            <header>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row bulb" style={{alignItems: 'center', padding: 'inherit'}}>
                            <div style={{
                                verticalAlign: 'middle',
                                width: '25px',
                                height: '25px',
                                borderRadius: '50%'}}>
                                <img src={`${API}/user/photo/${blog.postedBy.username}`}
                                    alt= {`${blog.postedBy.name}`}/>
                                </div>
                                <div style={{fontSize: 'small', fontWeight: '600', color: 'black'}}>
                                    <Link href={`/profile/${blog.postedBy.username}`}>
                                        <a>{blog.postedBy.name}</a>
                                    </Link>
                                </div>
                            </div>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <div style={{cursor: 'pointer', fontSize: 'initial', fontWeight: '400', textOverflow: 'ellipsis'}}>{blog.title}</div>
                                </Link>
                            <div style={{fontSize: 'smaller'}}>{moment(blog.updatedAt).fromNow()} ⍟ {Math.round(Math.random() * 10) % 15}min read</div>
                        </div>
                        <div className="col-sm-4">
                            <img className="img img-fluid"
                                style={{ maxHeight: '160px', width: '100%', paddingTop: '0.7rem' }}
                                src={`${API}/blog/photo/${blog.slug}`}
                                alt={blog.title}/>
                        </div>  
                    </div>
                </header>
                <hr/>
            </div>
    );
};

export default MinCard;