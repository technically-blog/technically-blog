import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-warning mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
                <div className="lead" style={{paddingBottom: '16px'}}>
                    <header>
                        <div className="row">
                            <div className="col-md-8">
                                    <div className="row bulb" style={{alignItems: 'center', padding: 'inherit'}}>
                                        <div style={{
                                                verticalAlign: 'middle',
                                                width: '25px',
                                                height: '25px',
                                                borderRadius: '50%'
                                            }}>
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
                                       <div style={{cursor: 'pointer', fontSize: 'larger', fontWeight: '600', textOverflow: 'ellipsis'}}>{blog.title}</div>
                                    </Link>
                                    <div className="bulb" style={{fontSize: 'medium', color: 'gray', overflow: 'hidden', textOverflow: 'ellipsis'}}>{renderHTML(blog.gist)}</div>    
                                    <div style={{fontSize: 'smaller'}}>{moment(blog.updatedAt).fromNow()} ⍟ {Math.round(Math.random() * 10) % 15}min read</div>
                            </div>
                            <div className="col-md-4">
                                    <img
                                        className="img img-fluid"
                                        style={{ maxHeight: '320px', width: '100%', paddingTop: '0.7rem' }}
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                    />
                            </div>
                        </div>
                    </header>
                </div>
    );
};

export default Card;