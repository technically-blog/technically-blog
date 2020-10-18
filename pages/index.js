import Layout from '../components/Layout';
import Head from 'next/head';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Thinking from '../components/index/Thinking';
import Explore from '../components/index/Explore';

const Index = ({router}) => {

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

    return (
        <React.Fragment>
            {head()}
            <Layout>
                <div style={{maxHeight: 'max-content', backgroundColor: 'lightsalmon', padding: '3rem 3rem 0 3rem'}}> 
                    <div className="row">
                        <div className="col-md-8">
                            <div style={{fontSize: '5rem'}}> 
                                Explore 
                                <strong> InBrief. </strong>
                            </div>
                            <div style={{fontSize: '5rem'}}>
                                to what matters to you.
                            </div>
                            <div style={{padding: '2rem 0 4rem'}}> 
                                <a className="btn btn-outline-secondary" href="/blogs">Get Started</a>
                            </div>
                        </div>
                        <div className="col-md-4 bulb">
                            <Explore/>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: 'indianred', maxHeight: 'max-content', padding: '3rem 3rem 0 3rem'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{fontSize: '5rem', fontWeight: 'bold'}}> 
                                Read.
                                <br/>
                                Share.
                                <br/>
                                Repeat. 
                            </div>
                            <div style={{padding: '2rem 0 4rem'}}> 
                                <a className="btn btn-outline-secondary" href="/signin">Write Blogs</a>
                            </div>
                        </div>
                        <div className="col-md-6 bulb" style={{fontSize: '4rem', fontWeight: '100'}}>
                            I could either watch it 
                            <br/>
                            happen or be a part 
                            <br/>
                            of it. -Elon Musk
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: 'black',maxHeight: 'max-content', padding: '3rem', color: 'antiquewhite'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{fontSize: '3rem', fontWeight: '100', paddingLeft: 'inherit'}}> 
                                Read as much as
                                <br/>
                                you want.
                                <br/>
                                We don't want you
                                <br/>
                                to stop exploring.
                            </div>
                        </div>
                        <div className="col-md-6 bulb" style={{fontSize: '4rem', borderLeft: 'dashed'}}>
                            No Membership.
                            <br/>
                            <strong>Unlimited Reading.</strong> 
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: 'darkseagreen', maxHeight: 'max-content', padding: '3rem', color: 'antiquewhite'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <div style={{fontSize: '3rem', fontWeight: '100', borderLeft: 'dashed', paddingLeft: 'inherit'}}> 
                                If you don't write for 
                                <br/>
                                publication there is
                                <br/>
                                little point in writing
                                <br/>
                                at all.
                            </div>
                            <div style={{padding: '4rem 0 1rem'}}> 
                                <a className="btn btn-outline-secondary" href="#">Apply for Publication</a>
                            </div>
                        </div>
                        <div className="col-md-6 bulb" style={{fontSize: '3rem'}}>
                            Apply for an 
                            <br/>
                            <strong>Publication </strong>
                            <br/>
                            if you are a community. 
                        </div>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
        
    );
};

export default withRouter(Index);