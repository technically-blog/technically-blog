import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';

const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {
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

            <meta property="og:image" content={`${DOMAIN}/static/images/technically.jpg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/technically.jpg`} />
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
                </article>
            );
        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => {
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
            // return <Link href={`/categories/${c.slug}`} key={i}>
            //     <a className="btn btn-secondary mr-1 ml-1 mt-3">{c.name}</a>
            // </Link>
        });
    };

    const showAllTags = () => {
        return tags.map((t, i) => {
            let number = Math.round(Math.random() * 10) % 7;
            switch(number) {
                case 1:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-secondary mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                    break;
                case 2:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-primary mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 3:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-warning mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 4:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-danger mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 5:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-info mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 6:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-success mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                case 7:
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-dark mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
                default :
                    return <Link href={`/categories/${t.slug}`} key={i}>
                        <a className="btn btn-warning mr-1 ml-1 mt-3">{t.name}</a>
                    </Link>
            }
            // <Link href={`/tags/${t.slug}`} key={i}>
            //     <a className="btn btn-outline-secondary mr-1 ml-1 mt-3">{t.name}</a>
            // </Link>
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
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="display-4 font-weight-bold text-center">
                                    What are you looking for today...
                                </h1>
                            </div>
                            <section>
                                <div className="pb-5 text-center">
                                    {showAllCategories()}
                                    <br />
                                    {showAllTags()}
                                </div>
                            </section>
                        </header>
                    </div>
                    <div className="container-fluid">{showAllBlogs()}</div>
                    <div className="container-fluid">{showLoadedBlogs()}</div>
                    <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Blogs.getInitialProps = () => {
    let skip = 0;
    let limit = 2;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });
};

export default withRouter(Blogs);