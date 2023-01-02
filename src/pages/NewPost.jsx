import { useState } from "react";
import {
  redirect,
  useNavigate,
  useActionData,
  useNavigation,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";

function NewPostPage() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  console.log(navigate);
  const data = useActionData();
  // async function submitHandler(event) {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     const formData = new FormData(event.target);
  //     const post = {
  //       title: formData.get('title'),
  //       body: formData.get('post-text'),
  //     };
  //     await savePost(post);
  //     navigate('/');
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setIsSubmitting(false);
  // }

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
      {data && data.status && data.message}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;
export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };
  try {
    await savePost(post);
  } catch (err) {
    if (err.status === 422) {
      return err;
    }
    throw err;
  }
  return redirect("/blog");
}
