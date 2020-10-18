import { useState, useEffect } from 'react';
import { getCookie } from '../../actions/auth';
import { create, getTags, removeTag } from '../../actions/tag';
import { API} from '../../config';

const Tag = () => {
    const [values, setValues] = useState({
        name: '',
        info: '',
        formData: '',
        error: false,
        success: false,
        loading: false,
        showButton: true,
        tags: [],
        removed: false,
        reload: false
    });

    const { name, info, formData, loading, showButton, error, success, tags, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({...values, formData: new FormData()});
        loadTags();
    }, [reload]);

    const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, tags: data, formData: new FormData() });
            }
        });
    };

    const showTags = () => {
        return tags.map((t, i) => {
            return (
                <div className="row" key={i} style={{paddingBottom: '1rem', borderBottom: 'groove'}}>
                    <div className="col-md-4">
                    <img className="img img-fluid"
                        style={{ maxHeight: '160px', width: '100%', paddingTop: '0.7rem' }}
                        src={`${API}/tag/image/${t.slug}`}
                        alt={t.title}/>
                    </div>
                    <div className="col-md-8">
                        <div style={{fontSize: 'x-large', fontWeight: '700'}}>
                            {t.name}
                        </div>
                        <div style={{fontSize: 'medium', color: 'gray'}}>
                            {t.info}
                        </div>
                        <button key={i} className="btn btn-outline-danger mr-1 ml-1 mt-3" onClick={() => deleteConfirm(t.slug)}>
                            DELETE
                        </button>
                    </div>
                </div>
            );
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
            deleteTag(slug);
        }
    };

    const deleteTag = slug => {
        // console.log('delete', slug);
        removeTag(slug, token).then(data => {
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
        create( formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
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
            return <p className="text-success">Tag is created</p>;
        }
    };

    const showLoading = () => (
        <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
            {loading}
        </div>
    );

    const showError = () => {
        if (error) {
            return <p className="text-danger">Tag already exist</p>;
        }
    };

    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Tag is removed</p>;
        }
    };

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };

    const newTagFom = () => (
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
            <div style={{padding: '2rem'}}>
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
                {newTagFom()}
                {showTags()}
            </div>
        </React.Fragment>
    );
};

export default Tag;