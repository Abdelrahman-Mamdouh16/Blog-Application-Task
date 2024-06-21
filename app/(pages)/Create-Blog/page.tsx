"use client"
import React, { useEffect, useState } from 'react'
import * as yup from "yup";
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CreateBlog() {
  const router=useRouter();
  interface values {
    title: string,
    body: string,
    userId: string
  }

  const SubmitHandling = async (val:values,{resetForm}: { resetForm: () => void }) => {
    // console.log(val);
    resetForm();
    toast('Your Blog Added Successfully',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#5011cc',
          color: '#fff',
        },
      }
    );
    setTimeout(() => {
      router.push('/');
    }, 2000);
    
  }
  let validationSchema = yup.object({
    title: yup.string().min(10, 'Must be at least 10 characters or more').required('Title is Required'),
    body: yup.string().min(10, 'Must be at least 10 characters or more').required('Body is Required'),
    userId: yup.number().max(999, 'User Id must be 1-3 digits'),
  })
  let formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      userId:'',
    },
    validationSchema,
    onSubmit: SubmitHandling,
  })

  return (
    <>
      <section className='CreateBlog'>
        <div className="container">
          <h1 className='my-5  text-white'>Create Blog </h1>

          <form className="px-3 my-3 mb-5" onSubmit={formik.handleSubmit}>
            <p className='text-white fs-4 text-capitalize'>Enter Your Title of the blog</p>
            {formik.errors.title && formik.touched.title ? <p className='py-2 alert alert-danger fw-bold'>{formik.errors.title}</p> : ''}
            <div className="form-floating mb-3">
              <input type="text" name='title' className="form-control" id="floatingInputTitle" placeholder="Enter the title fo your blog" value={formik.values.title} onBlur={formik.handleBlur} onChange={formik.handleChange} />

              <label htmlFor="floatingInputTitle">Enter the title fo your blog <span className="text-danger">*</span></label>
            </div>
            <p className='text-white fs-4 text-capitalize'>Enter Your Body of the blog</p>
            {formik.errors.body && formik.touched.body ? <p className='py-2 alert alert-danger fw-bold'>{formik.errors.body}</p> : ''}
            <div className="form-floating mb-3">
              <input type="text" name='body' className="form-control" id="floatingInputBody" placeholder="Enter the body fo your blog" value={formik.values.body} onBlur={formik.handleBlur} onChange={formik.handleChange}/>

              <label htmlFor="floatingInputBody">Enter the body fo your blog <span className="text-danger">*</span></label>
            </div>
            <p className='text-white fs-4 text-capitalize'>Enter user iD if you know it</p>
            {formik.errors.userId && formik.touched.userId ? <p className='py-2 alert alert-danger fw-bold'>{formik.errors.userId}</p> : ''}
            <div className="form-floating mb-3">
              <input type="text" name='userId' className="form-control" id="floatingInputUserId" placeholder="Enter the user ID of your blog" maxLength={3} value={formik.values.userId}  onBlur={formik.handleBlur} onChange={formik.handleChange}/>

              <label htmlFor="floatingInputUserId">Enter the user ID of your blog <span className="text-danger">*</span></label>
            </div>
            <div>
            <button className='btn text-white p-2 px-5 border-0' type='submit' disabled={!(formik.isValid && formik.dirty)} style={{ "backgroundColor": "#5011cc" }}>Submit</button>

            </div>
          </form>
        </div>
      </section>
    </>
  )

}



