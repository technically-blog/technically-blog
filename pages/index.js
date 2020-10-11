import Layout from '../components/Layout';
import Link from 'next/link';

const Index = () => {

    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="display-4 font-weight-bold">
                                Learn Your Stack 
                                <br/>
                                <strong className="display-3 font-weight-bold">
                                   In Brief
                                </strong>
                            </h2>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="container">
                    <div>
                        <div className="col-md-12 text-center pb-3">
                            <a href="/categories/react" className="mr-2 pb-2"><button type="button" className="btn btn-outline-primary mb-2">React</button></a>
                            <a href="/categories/flutter" className="mr-2"><button type="button" className="btn btn-outline-success mb-2">Flutter</button></a>
                            <a href="/categories/node.js" className="mr-2 pb-2"><button type="button" className="btn btn-outline-warning mb-2">Node.js</button></a>
                            <a href="/categories/react" className="mr-2 pb-2"><button type="button" className="btn btn-outline-danger mb-2">Deno</button></a>
                            <a href="/categories/react" className="mr-2 pb-2"><button type="button" className="btn btn-outline-info mb-2">Django</button></a>
                            <a href="/categories/react" className="mr-2 pb-2"><button type="button" className="btn btn-outline-success mb-2">Kotlin</button></a>
                            <a href="/categories/react" className="mr-2 pb-2"><button type="button" className="btn btn-outline-info mb-2">Rive-Flutter</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-dark mb-2">React-Native</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-warning mb-2">Flutter Web</button></a>
                        </div>
                    </div>
                    <div>
                        <div className="col-md-12 text-center pb-3">
                            <a className="mr-2" href="/categories/machine-learning"><button type="button" className="btn btn-outline-primary mb-2">Machine Learning</button></a>
                            <a className="mr-2" href="/categories/react"> <button type="button" className="btn btn-outline-secondary mb-2">Deep Learning</button></a>
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-danger mb-2">Computer Vision</button></a>
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-dark mb-2">Natural Language Processing</button></a>
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-info mb-2">Image Processing</button></a>
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-success mb-2">Data Science</button></a>            
                        </div>
                        <div className="col-md-12 text-center">
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-info mb-2">Artificial Intelligence</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-warning mb-2">Game Theory</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-danger mb-2">Soft Computing</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-warning mb-2">System Design</button></a>   
                        </div>
                    </div>
                    <div>
                        <div className="col-md-12 text-center pt-3 pb-3">
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-primary mb-2">Digital Marketing</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-dark mb-2">Search Engine Optimization</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-info mb-2">Blogging</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-warning mb-2">Adsense</button></a>
                            <a href="/categories/react" className="mr-2"><button type="button" className="btn btn-outline-info mb-2">Computer Science</button></a>
                            <a href="/categories/react" className="mr-2" href="#"> <button type="button" className="btn btn-outline-secondary mb-2">Internet Of Things</button></a>
                                     
                        </div>
                        <div className="col-md-12 text-center">
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-danger mb-2">Intelligent Systems</button></a>
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-success mb-2">Content Marketing</button></a>      
                            <a className="mr-2" href="/categories/react"><button type="button" className="btn btn-outline-danger mb-2">Startups</button></a>
                        </div>
                    </div>
                </div>
                
            </article>
        </Layout>
    );
};

export default Index;