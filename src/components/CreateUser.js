import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";

const CreateUser = () => {
  const userName = useSelector((state) => state.user.userName);

  if (userName === null) {
    return alert("Please sign in to continue.");
  }

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <Link to="/" className="text-4xl">
        🔙
      </Link>
      <div className="w-[70%]">
        <Formik
          initialValues={{
            character_name: "",
            tagline: "",
            description: "",
            greeting: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          validate={(values) => {
            let errors = {};
            if (!values.character_name) {
              errors.character_name = "Character name is required";
            }
            if (!values.tagline) {
              errors.tagline = "Tagline is required";
            }
            if (!values.description) {
              errors.description = "Description is required";
            }
            if (!values.greeting) {
              errors.greeting = "Greeting is required";
            }
            return errors;
          }}
        >
          {(formik) => (
            <Form autoComplete="off">
              <div>
                <label
                  className="font-semibold border-b border-dotted mt-4  my-2"
                  htmlFor="character_name"
                >
                  Character name
                </label>
                <br />
                <Field
                  className="w-[100%] rounded-lg bg-[#18181b] border border-[#3f3f46] px-4 py-2 my-2 text-[#7c7c87]"
                  type="text"
                  id="character_name"
                  name="character_name"
                  placeholder="Enter character name"
                  maxLength="20"
                />
                {formik.errors.character_name && (
                  <h1 className="text-[#ff4041]">
                    {" "}
                    * {formik.errors.character_name}
                  </h1>
                )}
              </div>
              <br />
              <div>
                <label
                  className="font-semibold border-b border-dotted mt-4 my-2"
                  htmlFor="tagline"
                >
                  Tagline
                </label>
                <br />
                <Field
                  className="w-[100%] rounded-lg bg-[#18181b] my-2 border border-[#3f3f46] px-4 py-2  text-[#7c7c87]"
                  type="text"
                  id="tagline"
                  name="tagline"
                  placeholder="Add a short tagline"
                  maxLength="50"
                />
                {formik.errors.tagline && (
                  <h1 className="text-[#ff4041]"> * {formik.errors.tagline}</h1>
                )}
              </div>
              <br />
              <div>
                <label
                  className="font-semibold border-b border-dotted mt-4 my-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <br />
                <Field
                  className="w-[100%] rounded-lg bg-[#18181b]  border border-[#3f3f46] px-4 py-2 my-2 text-[#7c7c87]"
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="How would your Character describe themselves?"
                  rows="6"
                  maxLength="500"
                />
                {formik.errors.description && (
                  <h1 className="text-[#ff4041]">
                    {" "}
                    * {formik.errors.description}
                  </h1>
                )}
              </div>
              <br />
              <div>
                <label
                  className="font-semibold border-b border-dotted mt-4 my-2"
                  htmlFor="greeting"
                >
                  Greeting
                </label>
                <br />
                <Field
                  className="w-[100%] rounded-lg bg-[#18181b] border border-[#3f3f46] px-4 py-2 my-2 text-[#7c7c87]"
                  as="textarea"
                  id="greeting"
                  name="greeting"
                  placeholder="e.g. Hello, I am Tarun. Ask me anything about React."
                  rows="6"
                  maxLength="2048"
                />
                {formik.errors.greeting && (
                  <h1 className="text-[#ff4041]">
                    {" "}
                    * {formik.errors.greeting}
                  </h1>
                )}
              </div>
              <br />
              <button
                type="submit"
                className="flex-end  bg-[#ffffff] items-end rounded-3xl text-black px-4 py-2 my-3"
                disabled={formik.isSubmitting}
              >
                Create Character
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateUser;
