import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getCategories, removeCategory } from '../../actions/category';
import { API} from '../../config';

const Category = () => {
    const [values, setValues] = useState({
        name: '',
        info: '',
        formData: '',
        error: false,
        success: false,
        loading: false,
        showButton: true,
        categories: [],
        removed: false,
        reload: false
    });

    const { name, info, error, loading, showButton, formData, success, categories, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        console.log("Page Mounted!!");
        setValues({ ...values, formData: new FormData()});
        loadCategories();
    }, [reload]);

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, categories: data, formData: new FormData()});
            }
        });
    };

    const showCategories = () => {
        return categories.map((c, i) => {
            return (
                <div className="row" key={i} style={{paddingBottom: '1rem', borderBottom: 'groove'}}>
                    <div className="col-md-4">
                    <img className="img img-fluid"
                        style={{ maxHeight: '160px', width: '100%', paddingTop: '0.7rem' }}
                        src={`${API}/category/image/${c.slug}`}
                        alt={c.title}/>
                    </div>
                    <div className="col-md-8">
                        <div style={{fontSize: 'x-large', fontWeight: '700'}}>
                            {c.name}
                        </div>
                        <div style={{fontSize: 'medium', color: 'gray'}}>
                            {c.info}
                        </div>
                        <button key={i} className="btn btn-outline-danger mr-1 ml-1 mt-3" onClick={() => deleteConfirm(c.slug)}>
                            DELETE
                        </button>
                    </div>
                </div>
            );
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this category?');
        if (answer) {
            deleteCategory(slug);
        }
    };

    const deleteCategory = slug => {
        // console.log('delete', slug);
        removeCategory(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        setValues({...values, loading: 'Loading...', showButton: false});
        // console.log('create category', name);
        create(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false, loading: false });
            } else {
                setValues({ ...values, error: false, loading: false, success: true, name: '', info: '', reload: !reload });
            }
        });
    };

    const handleChange = name => e => {
        const value = name === 'image' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: e.target.value, error: false, success: false, removed: '' });
    };

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Category is created</p>;
        }
    };

    const showError = () => {
        if (error) {
            return <p className="text-danger">Category already exist</p>;
        }
    };

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            {loading}
        </div>
    );

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Category is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newCategoryFom = () => (
        <form onSubmit={clickSubmit}>
            <label className="btn btn-outline-warning">
                                Upload featured image
                                <input onChange={handleChange('image')} type="file" accept="image/*" hidden />
                            </label>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" className="form-control" onChange={handleChange('name')} value={name} required />
            </div>
            <div className="form-group">
                <label className="text-muted">Information</label>
                <input type="text" className="form-control" onChange={handleChange('info')} value={info} required />
            </div>
            <div style={{padding: '2rem 0 2rem 0'}}>
                <button type="submit" className="btn btn-warning">
                    Create
                </button>
            </div>
        </form>
    );

    return (
        <React.Fragment>
            {showSuccess()}
            {showError()}
            {showRemoved()}
            {showLoading()}
            <div onMouseMove={mouseMoveHandler}>
                {newCategoryFom()}
                {showCategories()}
            </div>
        </React.Fragment>
    );
};

export default Category;