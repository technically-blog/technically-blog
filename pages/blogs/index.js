import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import Bulb from '../../components/blog/Bulb';

const Blogs = ({ blogs, categories, totalBlogs, blogsLimit, blogSkip, router }) => {

    const head = () => (
        <Head>
            <title>Programming blogs | {APP_NAME}</title>
            <meta
                name="description"
                content="Blogs on Artificial-Intelligence Machine-Learning Deep-Learning Computer-vision Technical-Interview competetive programming React Flutter"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`Latest blogs on all new technologies | ${APP_NAME}`} />
            <meta
                property="og:description"
                content="Blogs on Artificial-Intelligence Machine-Learning Deep-Learning Computer-vision Technical-Interview competetive programming React Flutter"
            />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/inbrief.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/inbrief.jpg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    const [limit, setLimit] = useState(blogsLimit);
    const [skip, setSkip] = useState(0);
    const [size, setSize] = useState(totalBlogs);
    const [loadedBlogs, setLoadedBlogs] = useState([]);

    const loadMore = () => {
        let toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };

    const loadMoreButton = () => {
        return (
            size > 0 &&
            size >= limit && (
                <button onClick={loadMore} className="btn btn-warning btn-lg">
                    Load more
                </button>
            )
        );
    };

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            // ()
            return (
                <article key={i}>
                    <Card blog={blog} />
                    <hr/>
                </article>
            );
        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => {
            return <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-outline-secondary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        });
    };

    const showLoadedBlogs = () => {
        return loadedBlogs.map((blog, i) => (
            <article key={i}>
                <Card blog={blog} />
            </article>
        ));
    };

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                   <article> 
                        <div style={{backgroundColor: 'rgb(255,153,0)', maxHeight: 'max-content'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8" style={{paddingTop:'1rem'}}>
                                        <h1 style={{fontSize: '5rem', fontFamily: 'ui-sans-serif', padding: 'inherit'}}>
                                            Discover your stack<br/>
                                            InBrief
                                        </h1>
                                        <div style={{fontSize: 'large', padding: 'inherit', paddingBottom: '2rem'}}> 
                                            Explore and Share your stack. Everyone’s welcome.
                                        </div>
                                        <div style={{padding: 'inherit', paddingBottom: '4rem'}}> 
                                            <a className="btn btn-outline-secondary" href="/signin">Get Started</a>
                                        </div>
                                    </div> 
                                    <div className="col-md-4 bulb" style={{padding: '2rem'}}>
                                        <Bulb/>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </article>
                   <section>
                    <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="sticky">
                                        <div>
                                            <hr/>
                                            <strong>DISCOVER MORE OF WHAT MATTERS TO YOU</strong>
                                        </div>
                                        <div className="pb-5">
                                            {showAllCategories()}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div style={{paddingTop: '10%'}}>
                                        <hr/>
                                        <div className="container-fluid">{showAllBlogs()}</div>
                                        <div className="container-fluid">{showLoadedBlogs()}</div>
                                        <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </section>  
                </main>
            </Layout>
        </React.Fragment>
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 7;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);