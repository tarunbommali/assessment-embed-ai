import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CreateUser = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <Link to="/" className='text-4xl'>🔙</Link>
      <div className='w-[70%]'>
        <Formik 
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label className="font-semibold  border-b border-dotted  mt-4 my-2" htmlFor="character_name">Character name</label><br />
              <Field
                className="w-[100%] rounded-lg bg-[#18181b] border border-[#3f3f46] px-4 py-2 my-1 text-[#7c7c87]"
                type="text"
                id="character_name"
                name="character_name"
                placeholder="Enter character name"
                maxLength="20"
              /><br />

              <label className="font-semibold  border-b border-dotted  mt-4 my-2" htmlFor="tagline">Tagline</label><br />
              <Field
                className="w-[100%] rounded-lg bg-[#18181b] border border-[#3f3f46] px-4 py-2 my-1 text-[#7c7c87]"
                type="text"
                id="tagline"
                name="tagline"
                placeholder="Add a short tagline"
                maxLength="50"
              /><br />

              <label className="font-semibold  border-b border-dotted  mt-4 my-2" htmlFor="description">Description</label><br />
              <Field
                className="w-[100%] rounded-lg bg-[#18181b] border border-[#3f3f46] px-4 py-2 my-1 text-[#7c7c87]"
                as="textarea"
                id="description"
                name="description"
                placeholder="How would your Character describe themselves?"
                rows="6"
                maxLength="500"
              /><br />

              <label className="font-semibold  border-b border-dotted  mt-4 my-2" htmlFor="greeting">Greeting</label><br />
              <Field
                className="w-[100%] rounded-lg bg-[#18181b] border border-[#3f3f46] px-4 py-2 my-1  text-[#7c7c87]"
                as="textarea"
                id="greeting"
                name="greeting"
                placeholder="e.g. Hello, I am Tarun. Ask me anything about React."
                rows="6"
                maxLength="2048"
              /><br />

              <button type="submit" className='bg-[#ffffff] rounded-3xl text-black px-4 py-2 my-2' disabled={isSubmitting}>Create Character</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateUser;
