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
                        <div className="card mb-2">
                            <div className="card-body">
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
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-8 pl-20">
                        <input type="search" className="form-control" placeholder="Search blogs" onChange={handleChange} />
                    </div>

                    <div>
                    <button className="btn btn-warning mr-2" type="submit">
                        <i className ="fa fa-search" aria-hidden="true"></i>
                    </button>
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