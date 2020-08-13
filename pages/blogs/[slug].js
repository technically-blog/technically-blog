import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import DisqusThread from '../../components/DisqusThread';
import { Parallax } from "react-parallax";

const SingleBlog = ({ blog, query }) => {
    const [related, setRelated] = useState([]);

    //
    // const blogHit = () => {
    //     reviewCounter(blog.slug).then(data => {
    //         if(data.error) {
    //             console.log(data.error);
    //         } else {
    //             if(data.unique === 1) {
    //                 setVisitorToken();
    //             }
    //         }
    //     });
    // }
    //

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const head = () => (
        <Head>
            <title>
                {blog.title} | {APP_NAME}
            </title>
            <meta name="description" content={blog.mdesc} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" ccontent={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );



    const showBlogCategories = blog =>
        blog.categories.map((c, i) => {
            let number = Math.round(Math.random() * 10) % 7;
            switch(number) {
                case 1:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-secondary mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                    break;
                case 2:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                case 3:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                case 4:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-danger mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                case 5:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-info mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                case 6:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-success mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                case 7:
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-dark mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
                default :
                    return <Link href={`/categories/${c.slug}`} key={i}>
                        <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{c.name}</a>
                    </Link>
            }
        });
    

    const showBlogTags = blog =>
        blog.tags.map((t, i) => {
            let number = Math.round(Math.random() * 10) % 7;
            switch(number) {
                case 1:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-secondary mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                    break;
                case 2:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 3:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 4:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-danger mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 5:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-info mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 6:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-success mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 7:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-dark mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                default :
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-outline-warning mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
            }
        });

    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article key={i}>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };

    const showComments = () => {
        return (
            <div>
                <DisqusThread id={blog._id} title={blog.title} path={`/blogs/${blog.slug}`}/>
            </div>
        )
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article>
                        <div className="container-fluid">
                        {/* <Parallax bgImage={`${API}/blog/photo/${blog.slug}`} strength={500}>
                            <div>
                                <h1 style={{color: "white"}} className="display-2 pb-3 pt-3 text-center font-weight-bold">{blog.title}</h1>
                            </div>
                        </Parallax> */}
                            <section>
                                <div className="title-container">
                                    <img
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                        className="img img-fluid featured-image"
                                    />
                                    {/* <div className="bottom-centered">
                                        <h1 className="font-weight-bold">{blog.title}</h1>
                                    </div> */}
                                    
                                </div>
                            </section>

                            <section>
                                <div className="container">
                                    <h1 className="pb-3 pt-3 text-center font-weight-bold">{blog.title}</h1>

                                    <div className="pb-3 text-center">
                                        {showBlogCategories(blog)}
                                        {showBlogTags(blog)}
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="container">
                            <section>
                                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
                            </section>
                            <section>
                            <div className="row pl-5">
                                <div>
                                    <img src={`${API}/user/photo/${blog.postedBy.username}`}
                                        className="avatar"
                                        style={{maxHeight: '100%', maxWidth: '100%'}}
                                        alt="user profile"/>
                                </div>
                                <div className="pl-4 pt-2">
                                    <p className="text-muted">
                                        Written by <Link href={`/profile/${blog.postedBy.username}`}>
                                                <a>{blog.postedBy.name}</a> 
                                        </Link>
                                        , Published {moment(blog.updatedAt).fromNow()}
                                        <br/>
                                            {blog.postedBy.email}
                                        <br/>
                                        {blog.postedBy.about}
                                    </p>
                                </div>
                            </div>
                            <hr/>
                            </section>
                        </div>

                        <div className="container">
                            <h4 className="text-center pt-5 h2">Related blogs</h4>
                            <hr/>
                            <div className="row">{showRelatedBlog()}</div>
                        </div>

                        <div className="container pt-5 pb-5">
                            {showComments()}
                        </div>
                    </article>
                </main>
            </Layout>
        </React.Fragment>
    );
};

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
            return { blog: data, query };
        }
    });
};

export default SingleBlog;