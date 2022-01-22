import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FileBase from 'react-file-base64';
import { shortText } from "../../utils/validation";
import { postBook } from "./postBookAction";
import Navbar from "../../components/Navbar";
import "../css/Admin.css";

const initialFormData = {
    title: "",
    price: 0,
    category: "",
    description: "",
    coverImage: "",
    coverImageType: "",
};
const initialFormError = {
    hasTitle: false,
    hasPrice: false,
    hasCategory: false,
    hasDescription: false,
    hasSelectedFile: false,
};

const Admin = () => {
    const dispatch = useDispatch();

    const { isLoading, error, message } = useSelector(
        (state) => state.postBook
    );

    const [formData, setFormData] = useState(initialFormData);
    const [formDataError, setFormDataError] = useState(initialFormError);
    
    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if(name === 'price') {
            setFormData({
                ...formData,
                [name]: parseInt(value)
            })
            return
        } 

        setFormData({
          ...formData,
          [name]: value,
        });
    };
    useEffect( () => {
        console.log(formData);
    }, [formData])

    const handleOnSubmit = async (e) => {

        e.preventDefault();
    
        setFormDataError(initialFormError);
    
        const isTitleValid = await shortText(formData.title);
    
        setFormDataError({
          ...initialFormError,
          hasTitle: !isTitleValid,
        });
        dispatch(postBook(formData));

        setFormData(initialFormData);
    };
    const getBase64OfImage = (base64) => (
        base64
    )

    const getImageType = (base64) => (
        base64.split(';')[0].split('/')[1]
    )
    
    return (
        <div>
            <Navbar />
            <div className='mx-4 main'>
                <h1>Admin dashboard</h1>
                <hr />
                {message && (
                    <div class={`alert alert-${error ? 'danger' : 'success'}`} role="alert">
                        {message}
                    </div>
                )}
                
                {isLoading && (
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                )}
                <form onSubmit={handleOnSubmit}>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleOnChange}
                            class="form-control"
                            id="title"
                            placeholder="Enter title..."
                        />
                    </div>
                    <div class="form-group">
                        <label for="price">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleOnChange}
                            class="form-control"
                            id="price"
                            placeholder="Enter price..."
                        />
                    </div>
                    <div class="form-group">
                        <label for="category">Category</label>
                        <select
                            class="form-control"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleOnChange}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea
                            class="form-control"
                            id="description"
                            rows="3"
                            name="description"
                            value={formData.description}
                            onChange={handleOnChange}
                        >
                        </textarea>
                    </div>
                    <div class="form-group">
                        <label >Cover image</label>
                        <FileBase
                        type="file"
                        mutiple={false}
                        onDone={({base64}) => setFormData({
                                ...formData, coverImage: getBase64OfImage(base64), 
                                coverImageType: getImageType(base64)
                            })}
                        />
                    </div>
                    <button type="submit" className="btn btn-blue text-center">
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admin;
