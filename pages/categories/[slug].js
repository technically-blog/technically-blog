import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleCategory } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';
import MinCard from '../../components/blog/minCard';

const Category = ({ category, blogs, trendingBlogs, query }) => {
    const head = () => (
        <Head>
            <title>
                {category.name} | {APP_NAME}
            </title>
            <meta name="description" content={`Best programming blogs on ${category.name}`} />
            <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:title" content={`${category.name}| ${APP_NAME}`} />
            <meta property="og:description" content={`Best programming blogs on ${category.name}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/inbrief.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/inbrief.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <main>
                    <article>
                        <div className="container">
                        <header>
                                <div className="col-md-12 pt-3">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div style={{maxHeight: 'max-content'}}>
                                            <img
                                                src={`${API}/category/image/${category.slug}`}
                                                alt={category.name}
                                                className="img img-fluid"/>
                                            </div>
                                            {blogs.map((b, i) => (
                                                <div key={i}>
                                                    <Card key={i} blog={b} />
                                                    <hr />
                                                </div>))}
                                        </div>
                                        <div className="col-md-4">
                                            <div className="sticky">
                                                <div style={{fontSize: 'x-large', fontWeight: 'bolder'}}>
                                                    {category.name}
                                                </div>
                                                <br/>
                                                <div style={{fontSize: 'medium', color: 'gray'}}>
                                                    {category.info}
                                                </div>
                                                <br/>
                                                <div style={{fontWeight: 'bold'}}>
                                                    POPULAR IN {`${category.name}`.toUpperCase()}
                                                    <hr/>
                                                </div>
                                                {trendingBlogs.map((b, i) => (
                                                    <div key={i}>
                                                        <MinCard key={i} blog={b} />
                                                    </div>))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                         </div>
                    </article>
                </main>
            </Layout>
        </React.Fragment>
    );
};

Category.getInitialProps = ({ query }) => {
    return singleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { category: data.category, blogs: data.blogs, trendingBlogs: data.trendingBlogs, query };
        }
    });
};

export default Category;