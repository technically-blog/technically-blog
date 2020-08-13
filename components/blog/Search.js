import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
    };

    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div className="jumbotron bg-white"> 
                {message && (<p className="pt-4 text-muted font-italic">{message}</p>)}

                {results.map((blog, i) => {
                    return (
                        <div key={i} className="card mb-2">
                            <div key={i} className="card-body">
                                <div key={i}>
                                    <Link href={`/blogs/${blog.slug}`}>
                                        <a className="text-primary">{blog.title}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={handleChange}/>
                            <button type="submit" className="searchButton">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );

    return (
        <div className="container-fluid">
            <div style={{marginTop:'10px', marginBottom: '40px'}}>{searchForm()}</div>
            {searched && <div style={{ marginTop: '-120px', marginBottom: '-80px' }}>{searchedBlogs(results)}</div>}
        </div>
    );
};

export default Search;