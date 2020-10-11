import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { userPublicProfile } from '../../actions/user';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';

const UserProfile = ({user, blogs, query}) => {

    const head = () => (
        <Head>
            <title>
                {user.username} | {APP_NAME}
            </title>
            <meta name="description" content={`Blogs by ${user.username}`} />
            <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
            <meta property="og:description" content={`Blogs by ${user.username}`} />
            <meta property="og:type" content="webiste" />
            <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/inbrief.png`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/inbrief.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
    );


    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div className="card mt-1 mb-1">
                    <div className="card-body" key={i}>
                        <Link href={`/blogs/${blog.slug}`}>
                            <a className="lead">{blog.title}</a>
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body"> 
                                    <div className="row">
                                        <div className="col-md-3 pt-2">
                                            <img src={`${API}/user/photo/${user.username}`}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{maxHeight: '256px', maxWidth: '256px'}}
                                                alt="user profile"
                                            />
                                        </div>
                                        <div className="col-md-9 pt-2">
                                            <h5>{user.name}</h5>
                                                <p className="text-muted">
                                                    Joined {moment(user.createdAt).fromNow()}
                                                    <br/>
                                                    {user.email}
                                                    <br/>
                                                    {user.about}
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-6"> 
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title bg-warning pt-4 pb-4 pl-4 pr-4 text-light">Recent blogs by {user.name}</h5>
                                {showUserBlogs()}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6"> 
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title bg-warning pt-4 pb-4 pl-4 pr-4 text-light">Message {user.name}</h5>
                                    <br/>
                                    <p>contact form</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
    )
}

UserProfile.getInitialProps = ({query}) => {
    return userPublicProfile(query.username).then(data => {
        if(data.error) {
            console.log(data.error)
        } else {
            return {user:data.user, blogs: data.blogs, query}
        }
    });
};

export default UserProfile;